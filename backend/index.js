import * as dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
const app = express();
import cors from "cors";
app.use(express.json());
import express from "express";
import resumeRouter from "./router/resume.router.js";

app.use("/resume", resumeRouter);

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected !!!  ");
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
