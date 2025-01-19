import express from "express";

const server = express();
const port = 5000;

import loginPage from "./routes/login.js";

server.use(express.static("/dist/static"))

server.use('/', loginPage);

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});
