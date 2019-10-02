const mongoose = require('mongoose');
//Criando estrutura de dado
const UserSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', UserSchema);