const db = require("../database/dbconfig");

module.exports = {
  find,
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}
