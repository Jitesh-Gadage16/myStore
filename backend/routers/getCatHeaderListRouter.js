const express = require('express');
const Router = express.Router();
const getCatHeadList = require('../controllers/getCatHeaderListController');

Router.get('/getcatheaderlist', (req, res) => getCatHeadList(req, res));

module.exports = Router;