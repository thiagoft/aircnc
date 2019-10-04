const multer = require('multer');
const path = require('path');

//"path" concatena os parametros via varargs com o separador de niveis default do sistema o qual estiver rodando
//"__dirname" retorna o diretorio atual do arquivo o qual path foi chamado
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    }),
};