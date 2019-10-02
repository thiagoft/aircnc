const User = require('../models/User');

// index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        //usando desconstrução, busca de dentro de body o atributo e-mail
        const { email } = req.body;

        //quando a variável possui o mesmo nome da chave não é necessário adicionar o nome da mesma por exemplo { email: email }
        let user = await User.findOne({email});
        if (!user) {
            user = await User.create({email})
        }

        // const user = await User.create({ email });

        return res.json(user);
    }
};