const User = require('../models/user');
const jwt = require('jsonwebtoken');

const addUser = async (req, res) => {
    const data = req.body;

    try {
        await User.create(data);

        return res.status(200).json({ success: true });

    } catch (err) {
        return res.status(400).json({ success: false });
    }
};

const getUsers = async (req, res) => {
    const data = req.body;
    const isValid = jwt.verify(token,  'admin4123')

    if (!isValid) return res.status(401).json({ success: false })
    if (isValid.email !== 'admimn@technischools.com') return res.status(401).json({ success: false})

    try {
        const users = await User.find();

        return res.status(200).json({ success: true, users });

    } catch (err) {
        return res.status(400).json({ success: false });
    }
};

module.exports = {
    addUser,
    getUsers
}