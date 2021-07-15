const express = require('express');
const router = express.Router();
const userRegistration = require('../controllers/userRegistrationController');

router.post('/userregistration', (req, res) => userRegistration(req, res));

module.exports = router;