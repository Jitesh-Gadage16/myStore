const UserData = require('../models/userSchema');
const bcrypt = require('bcryptjs');

const userRegistration = async(req, res) => {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const mobile = req.body.mobile;
        const password = await bcrypt.hash(req.body.password, 8);

        userData = await new UserData({
            firstname,
            lastname,
            mobile,
            password
        });

        const userDataSave = await userData.save();
        res.send(userDataSave);

    } catch (error) {
        if (error.code === 11000) {
            res.status(409).send('mobile number already exist.')
        } else {
            if (error.message) {
                res.status(400).send(error.message);
            } else {
                res.status(400).send(error);
            }
        }
        console.log(error);
    }
}

module.exports = userRegistration;