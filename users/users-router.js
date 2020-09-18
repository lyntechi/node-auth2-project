const protected = require("../auth/restricted-middleware");
const router = require("express").Router();
const Users = require("./users-model");

router.get("/", protected, (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
