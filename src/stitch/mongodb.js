import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

// TODO: Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  "atlas-todoapp"
);

// TODO: Instantiate a collection handle for todo.items
const items = mongoClient.db("todo").collection("items");

export { items };
