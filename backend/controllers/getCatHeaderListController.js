const AllCategoryData = require('../models/allCategoryData');

const getCatHeadList = async(req, res) => {
    const data = await AllCategoryData.find().select(['cagegoryname', 'categoryimg']);
    res.send(data);
}

module.exports = getCatHeadList;