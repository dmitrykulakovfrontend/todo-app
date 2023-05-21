const Todo = require("../model/todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send({
      status: "success",
      message: "Data fetched correctly",
      data: todos,
    });
  } catch (err) {
    res.status(500).send({ status: "failed", message: err });
  }
};
exports.createTodo = async (req, res) => {
  try {
    const body = req.body;
    const createdTodo = new Todo({
      title: body.title,
      isComplete: body.isComplete,
      description: body.description,
      createdAt: body.createdAt,
    });
    await createdTodo.save();
    res.send({
      status: "success",
      message: "Todo created successfully",
      data: createdTodo,
    });
  } catch (err) {
    res.status(500).send({ status: "failed", message: err });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const body = req.body;
    const todo = await Todo.updateOne(
      { _id: body._id },
      {
        title: body.title,
        isComplete: body.isComplete,
        description: body.description,
        createdAt: body.createdAt,
      }
    );

    res.send({
      status: "success",
      message: "Todo updated successfully",
      data: todo,
    });
  } catch (err) {
    res.status(500).send({ status: "failed", message: err });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const body = req.body;
    const todo = await Todo.deleteOne({ _id: req.params.id });

    res.send({
      status: "success",
      message: "Todo deleted successfully",
      data: todo,
    });
  } catch (err) {
    res.status(500).send({ status: "failed", message: err });
  }
};
