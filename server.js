const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const PORT = 4000;
const cors = require('cors');
 
server.use(cors());
server.use("/api", router)
server.listen(PORT, () => {
  console.log('JSON Server is running at port', PORT);
})