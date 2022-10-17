import { MongoClient } from "mongodb";
import { db_url } from "./Keys";

const client = new MongoClient(db_url);

export { client };
