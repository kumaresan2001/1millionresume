import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function postresume(data) {
  return await client.db("interview").collection("resume").insertMany(data);
}

export async function getresume(query) {
  return await client
    .db("interview")
    .collection("resume")
    .find(query)
    .toArray();
}

export async function deleteresume(id) {
  return await client
    .db("interview")
    .collection("resume")
    .deleteOne({ _id: new ObjectId(id) });
}
