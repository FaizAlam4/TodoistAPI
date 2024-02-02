import {
  findProjectAll,
  createProject,
  findProjectById, 
  updateProject,
  deleteProject
} from "../controllers/project.controller.js";
import { Router } from "express";
var router = Router();

router.get("/", findProjectAll);
router.get('/:id', findProjectById)
router.post("/", createProject);
router.post('/:id',updateProject)
router.delete('/:id',deleteProject)

export default router;
