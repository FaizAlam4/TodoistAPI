import {
  findActiveTaskAll,
  createTask,
  findActiveTask,
  updateTask,
  closeTask,
  deleteTask,
  reOpenTask
} from "../controllers/task.controller.js";
import { Router } from "express";
var taskRouter = Router();

taskRouter.get("/", findActiveTaskAll);
taskRouter.post("/", createTask);
taskRouter.get("/:id", findActiveTask);
taskRouter.post("/:id", updateTask);
taskRouter.post("/:id/close", closeTask);
taskRouter.post("/:id/reopen", reOpenTask);
taskRouter.delete("/:id", deleteTask);
export default taskRouter;
