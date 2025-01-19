import express from "express";

const server = express();
const port = 5000;

server.use(express.static("/frontend/dist/"))

const log = (req: any, res: any, next: any) => {
  console.log('Please login', Date.now())
  next()
}

server.get('/', (req: any, res: any) => {
  res.sendFile("index.html")
})

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});
