const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");
// /todo
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
