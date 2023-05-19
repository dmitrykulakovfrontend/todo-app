const express = require("express");
const router = express.Router();
const { getTodo } = require("../controllers/todo");
router.get("/", getTodo);
module.exports = router;
