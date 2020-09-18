const server = require("./api/server.js");
const port = 1111;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
