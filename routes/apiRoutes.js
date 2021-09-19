const express = require("express");
const router = express.Router();
const { TodoModel } = require("../model/");

// Get all todos
router.get("/todo", (req, res) => {
  TodoModel.find()
    .then((allTodos) => {
      res.json(allTodos);
    })
    .catch((err) => res.json(err));
});

// Post a todo
router.post("/todo", (req, res) => {
  TodoModel.create({
    todo: req.body.todo,
  }).then((newTodo) => {
    res.json(newTodo);
  });
});

// Delete a todo
router.delete("/todo/:id", (req, res) => {
  TodoModel.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.send("successully deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});

// Update a todo
router.put("/todo/:id", (req, res) => {
  TodoModel.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updated) => {
      if (err) {
        res.send(err);
      } else {
        res.json(updated);
      }
    }
  );
});

module.exports = router;
