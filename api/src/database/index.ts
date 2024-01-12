import { MongoClient } from "mongodb";
import {
    MONGO_URI,
  } from "../config";
  
const connectionString = `${MONGO_URI}`;

export function connectDatabase(): Promise<MongoClient> {
    return MongoClient.connect(connectionString);
}