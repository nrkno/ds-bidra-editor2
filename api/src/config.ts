import dotenv from "dotenv";
dotenv.config();

export const PORT = Number(process.env.PORT) || 80;
export const IS_DEBUG = process.env.DEBUG === "on";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const IS_RUNNING_TESTS = process.env.NODE_ENV === "test";
export const MIMIR_ADMIN_GROUP_ID: string | undefined =
	process.env.MIMIR_ADMIN_GROUP_ID;
export const MIMIR_MARKETING_GROUP_ID: string | undefined =
	process.env.MIMIR_MARKETING_GROUP_ID;
export const MONGO_URI = process.env.MONGO_URI;
