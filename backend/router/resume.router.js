import express from "express";
import {
  postresume,
  getresume,
  deleteresume,
} from "../service/resume.service.js";
const router = express.Router();

router.post("/", async function (request, response) {
  const data = request.body;
  const result = await postresume(data);

  result
    ? response.send({ message: "resume post is successful" })
    : response.status(404).send({ message: "resume is not" });
});

router.get("/", async function (request, response) {
  const result = await getresume(request.query);
  result
    ? response.send(result)
    : response.status(404).send({ message: " resume is not" });
});

router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  const result = await deleteresume(id);
  result.deletedCount >= 1
    ? response.send({ message: "delete resume is successful" })
    : response.status(404).send({ message: "resume is not" });
});

export default router;
