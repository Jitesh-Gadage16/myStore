// const mongoose = require('mongoose');

const mongoose = require('mongoose');

const connectionUrl = 'mongodb://127.0.0.1:27017/mystorekey';

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

console.log('"mystorekey" database connected.')


// const subCategorySchema = {
//     subcategoryname: {
//         type: String,
//         required: true,
//     },
//     subcategoryimg: {
//         type: String,
//         required: true,
//     },
// };

const allCategorySchema = new mongoose.Schema({
    cagegoryname: {
        type: String,
        required: true,
    },
    categoryimg: {
        type: String,
        required: true,
    },
    subcategories: [{
        subcategoryname: {
            type: String,
            required: true,
        },
        subcategoryimg: {
            type: String,
            required: true,
        },
    }]
}, { timestamps: true });

const AllCategoryData = new mongoose.model('allcategorydata', allCategorySchema)
    // module.exports = AllCategoryData;

// const data = async() => {
//     const store = await new AllCategoryData({
//         cagegoryname: 'Daily Need',
//         categoryimg: "dailyneedimg",
//         subcategories: [
//             { subcategoryname: '1name', subcategoryimg: '1img', },
//             { subcategoryname: '2name', subcategoryimg: '2img', },
//             { subcategoryname: '3name', subcategoryimg: '3img', },
//         ]
//     });

//     const storeSave = await store.save();
//     console.log(storeSave);
// }

// data();

module.exports = AllCategoryData;