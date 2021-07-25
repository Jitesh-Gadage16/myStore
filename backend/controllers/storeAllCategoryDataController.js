const AllCategoryData = require('../models/allCategoryData');


const storeAllCategory = async(req, res) => {
    try {
        const categoryname = req.body.categoryname;
        const categoryimg = req.body.categoryimg;

        let subcategoryname = req.body.subcategoryname;
        let subcategoryimg = req.body.subcategoryimg;

        console.log(categoryname, categoryimg, subcategoryname, subcategoryimg);
        res.send('done')

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

module.exports = storeAllCategory;

// const storeAllCategoryData = await new