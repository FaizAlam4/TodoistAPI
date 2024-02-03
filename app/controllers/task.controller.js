import db from "../models/index.js";

const Task = db.tasks;
export const findActiveTaskAll = (req, res) => {
  Task.findAll()
    .then((data) => {
      return data.filter((taskItem) => {
        if (taskItem.is_completed == false) {
          return true;
        } else return false;
      });
    })
    .then((filteredData) => {
      res.status(200).send(filteredData);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

export const createTask = (req, res) => {
  if (req.body.content && req.body.content.trim() == "") {
    res.status(500).send({ message: "content of task cann't be empty!" });
  } else
    Task.create({ ...req.body, project_id: req.query.project_id })
      .then((data) => {
        res
          .status(200)
          .send({ message: "Task created successfully!", data: data });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
};

export const findActiveTask = (req, res) => {
  const id = req.params.id;
  Task.findAll({ where: { id: id } })
    .then((data) => {
      if (data[0].is_completed == false) {
        res.status(200).send({ message: "Found successfully", data: data });
      } else
        res.status(500).send({
          message: "The task either not exists or has been completed!",
        });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const updateTask = (req, res) => {
  const id = req.params.id;
  Task.update(req.body, { where: { id: id }, returning: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const closeTask = (req, res) => {
  const id = req.params.id;
  Task.update(
    { ...req.body, is_completed: true },
    { where: { id: id }, returning: true }
  )
    .then((data) => {
      res.status(200).send({ message: "Successfully closed", data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const reOpenTask = (req, res) => {
  const id = req.params.id;
  Task.update(
    { ...req.body, is_completed: false },
    { where: { id: id }, returning: true }
  )
    .then((data) => {
      res.status(200).send({ message: "Task reopened", data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const deleteTask = (req, res) => {
  const id = req.params.id;
  Task.destroy({ where: { id: id } })
    .then((data) => {
      if (data == 1) {
        res.status(200).send({ message: "task deleted successfully..." });
      } else {
        res.send({ message: `Could not delete the task with id=${id}` });
      }
    })
    .catch((err) => {
      res.send({ message: `Could not delete the task with id=${id}` });
    });
};
