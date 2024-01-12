import Fastify, { FastifyRequest, RequestPayload } from "fastify";
import fastifyStatic from "@fastify/static";
import { getUserData } from "./auth";
import path from "path";
import mongoose, { model, Schema } from "mongoose";
import {
  formSchema,
  agreementSchema,
  type Agreement,
  AgreementData,
} from "@nrk/ds-bidra-config-common";

import { performHealthCheck, OK, WARNING } from "./health/health-check";
import { Log } from "./log";

import {
  IS_RUNNING_TESTS,
  IS_PRODUCTION,
  PORT,
  MONGO_URI,
  BIDRA_ADMIN_GROUP_ID,
  BIDRA_SUPERUSER_GROUP_ID,
} from "./config";
import { request } from "http";

module.exports = createServer;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI);
  mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("connected to mongoDB");
  });
} else {
  console.log("Can´t connect to database. Exiting");
  process.exit(0);
}

const agreementModel = model(
  "agreements",
  new Schema(agreementSchema, { read: "primaryPreferred" })
);
const formModel = model("forms", new Schema(formSchema, { read: "primaryPreferred" }));

const filterNewestAll = (contracts: any) =>
  contracts.map((item: any) => {
    const contractItem = Object.assign({}, item);
    contractItem.text = item.versions[item.versions.length - 1];
    return contractItem;
  });

const SERVE_STATIC_FROM = process.env.UI_RELATIVE_PATH
  ? path.join(__dirname, process.env.UI_RELATIVE_PATH)
  : process.env.UI_ABSOLUTE_PATH;

declare module "fastify" {
  interface FastifyRequest {
    // Declaration merging to decorate with custom fields we need.
    contentType?: "xml" | "json";
    isTypeSpecified?: boolean;
    user: any;
  }
}
function validateAccess(grouplist: string | undefined) {
  if (!IS_PRODUCTION) return true;
  if (grouplist && BIDRA_ADMIN_GROUP_ID && BIDRA_SUPERUSER_GROUP_ID) {
    const groups = grouplist.split(",");
    if (groups.includes(BIDRA_ADMIN_GROUP_ID)) {
      console.log("ADMIN");
      return true;
    }
    if (groups.includes(BIDRA_SUPERUSER_GROUP_ID)) {
      console.log("SUPERUSER");
      return true;
    }
  }
  return false;
}
export default function createServer(opts?: { withLog: boolean }) {
  const fastify = Fastify({
    logger: !IS_PRODUCTION && opts && opts.withLog,
  });

  fastify.register(require("@fastify/cors"), { origin: true });

  // Simple health check
  fastify.get("/health", (request, reply) => {
    performHealthCheck().then((health) => {
      const statusCode = health.status === OK || health.status === WARNING ? 200 : 500;
      reply.status(statusCode).send(health);
    });
  });

  fastify.get("/me", async (request: any, reply) => {
    console.log("request.headers", request.headers["x-forwarded-access-token"]);
    if (request.headers["x-forwarded-access-token"]) {
    const accessToken = request.headers["x-forwarded-access-token"];
    const userData = await getUserData(accessToken);
    reply.status(200).send(userData);
    } else {
      reply.status(403).send("Forbidden");
    }
  });

  fastify.get("/forms/active", (request: any, reply) => {
    formModel
      .find({ sectionTags: ["web"] })
      .then((forms) => {
        reply.send(forms);
      })
      .catch((err) => {
        reply.status(500).send(err.stack || err.toString());
      });
  });

  fastify.get("/agreement", (request, reply) => {
    agreementModel
      .find()
      .lean()
      .then((data) => {
        reply.status(200).send(filterNewestAll(data));
      })
      .catch((err) => {
        reply.status(500).send(err.stack || err.toString());
      });
  });

  console.log("SERVE_STATIC_FROM", SERVE_STATIC_FROM);
  if (SERVE_STATIC_FROM) {
    fastify.register(fastifyStatic, {
      root: SERVE_STATIC_FROM,
      prefix: "/test",
      list: false,
      wildcard: true,
    });
    fastify.get("/", (request: any, reply) => {
      if (validateAccess(request.headers["x-forwarded-groups"])) {
        reply.sendFile("index.html");
      } else {
        reply.sendFile("forbidden.html");
      }
    });
  } else {
    fastify.get("/", (request, reply) => {
      reply.send("Server ready");
    });
  }

  fastify.get("/auth", (request: any, reply) => {
    if (validateAccess(request.headers["x-forwarded-groups"])) {
      const user = request.headers["X-Forwarded-User"];
      const accessToken = request.headers["X-Forwarded-Access-Token"];
      const email = request.headers["x-forwarded-email"];
      const groups = request.headers["x-forwarded-groups"];
      Log.log(`From headers: ${JSON.stringify({ accessToken, user, email, groups })}`);
      reply.status(200).send(request.headers);
    } else {
      reply.status(403).send("Forbidden");
    }
  });
  Log.fastify(fastify);
  return fastify;
}

if (!IS_RUNNING_TESTS) {
  const server = createServer();
  // Run the server!
  server.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      throw err;
    }
    console.log("server listening", PORT);
    server.log.info(`server listening on ${address}`);
  });
}
