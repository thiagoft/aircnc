const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

io.on("connection", socket => {
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = user_id;
});

mongoose.connect(
  "mongodb+srv://aircnc:aircnc@0926@cluster0-1gtkd.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

// É importante que este filtro esteja antes das outras chamadas a use por utilizar o recurso
// next que dara continuidade nas chamadas subsequentes
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
// permite o uso de json vindo das requests
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
