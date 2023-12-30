import { FastifyInstance } from "fastify";
import { IS_RUNNING_TESTS, IS_DEBUG } from "./config";

function formatToJsonString(
	msg: string,
	type: string,
	options: Record<any, any> = {}
) {
	return `${JSON.stringify(
		Object.assign({}, options, {
			name: "ds-mimir-user-management",
			pid: process.pid,
			msg: `${type}: ${msg}`,
			time: Date.now(),
		})
	)}\n`;
}

/**
 * Logging to STDOUT and STDERR as this is picked up by Kubernetes.
 * This can be extended to include (or replace with) other logging
 * services or tools
 */
export const Log = {
	fastify(fastify: FastifyInstance) {
		if (!IS_DEBUG) return;
		fastify.addHook("onRequest", (req, rep, next) => {
			Log.debug(`Request to ${req.method} "${req.url}"`);
			next();
		});
		fastify.addHook("onResponse", (req, rep, next) => {
			Log.debug(`Request returned status code: ${rep.statusCode}`);
			next();
		});
	},
	debug(msg: string) {
		!IS_RUNNING_TESTS && IS_DEBUG && process.stdout.write(`DEBUG: ${msg}\n`);
	},
	error(msg: string, type = "", options?: Record<any, any>) {
		!IS_RUNNING_TESTS &&
			process.stderr.write(formatToJsonString(msg, type, options));
	},
	log(msg: string, type = "", options?: Record<any, any>) {
		!IS_RUNNING_TESTS &&
			process.stdout.write(formatToJsonString(msg, type, options));
	},
};

/**
 * Use these types to make it easier to read and trace logs
 */
export const LOG_MESSAGE_TYPE = {
	GET_METADATA_FAILED: "GET_METADATA_FAILED",
};
