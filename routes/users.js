const express = require("express");
const router = express.Router();

/* GET users listing. */
// /users
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
//users/test
router.get("/test", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
