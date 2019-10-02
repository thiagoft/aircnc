const User = require('../models/User');

// index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        //usando desconstrução, busca de dentro de body o atributo e-mail
        const { email } = req.body;

        const user = await User.create({ email });

        return res.json(user);
    }
};