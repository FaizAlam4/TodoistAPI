import db from "../models/index.js";
import { v4 as uuidv4 } from "uuid";

const Project = db.projects;

export const findProjectAll = (req, res) => {
  Project.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const findProjectById = (req, res) => {
  const id = req.params.id;

  Project.findByPk(id)
    .then((data) => {
      res
        .status(200)
        .send({ message: "Successfully found the project", data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const createProject = (req, res) => {
  if (!req.body.name && req.body.name.trim() == "") {
    res.status(400).send({ message: "Project should have a title" });
  }

  Project.create({ ...req.body, id: uuidv4() })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const updateProject = (req, res) => {
  const myId = req.params.id;
  Project.update(req.body, { where: { id: myId }, returning: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const deleteProject = (req, res) => {
  const id = req.params.id;
  Project.destroy({ where: { id: id } })
    .then((data) => {
      if (data == 1) {
        res.status(200).send({ message: "Project deleted successfully..." });
      } else {
        res.send({ message: `Could not delete the project with id=${id}` });
      }
    })
    .catch((err) => {
      res.send({ message: `Could not delete the project with id=${id}` });
    });
};
