const todo = require("../model/todo");

exports.getTodo = async (req, res) => {
  // todo.find({ title: req.title }, (err, docs) => {
  //   if (err) {
  //     res.status(500).send({ status: "failed", message: err });
  //   } else {
  //     res.send({
  //       status: "success",
  //       message: "Data fetched correctly",
  //       data: docs,
  //     });
  //   }
  // });

  try {
    const todos = await todo.find({ title: "test" });
    console.log(todos);
    res.send({
      status: "success",
      message: "Data fetched correctly",
      data: todos,
    });
  } catch (err) {
    res.status(500).send({ status: "failed", message: err });
  }
};
