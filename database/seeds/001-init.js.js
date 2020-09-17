exports.seed = function (knex) {
  // Inserts seed entries
  return knex("users").insert([
    {
      id: 1,
      username: "lyntechi",
      password: "secret",
      department: "testing dep",
    },
    {
      id: 2,
      username: "wonderwoman",
      password: "strongpass",
      department: "Frontend Management",
    },
    {
      id: 3,
      username: "superman",
      password: "ilovewonderwoman",
      department: "testing dep",
    },
  ]);
};
