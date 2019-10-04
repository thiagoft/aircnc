const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aircnc:aircnc@0926@cluster0-1gtkd.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors());
// permite o uso de json vindo das requests
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes);

app.listen(3333);