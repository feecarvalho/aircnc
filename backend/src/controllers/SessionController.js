// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        // Verificação se o email já existe no db
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        // Await só deixa a função prosseguir ao finalizar o cadastro no banco

        return res.json(user);
    }
};
