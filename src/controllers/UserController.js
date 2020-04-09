const User = require('../models/User');

module.exports = {

    async create(req, res) {
        const { 
            name,
            email,
            password,
            data_nascimento,
            avatar 
        } = req.body;

        const userExists = await User.findOne({email: email});

        if(userExists) {
            return res.json(userExists);
        }

        const user = await User.create({
            name,
            email,
            password,
            data_nascimento,
            avatar 
        });

        return res.json(user);
    }

};