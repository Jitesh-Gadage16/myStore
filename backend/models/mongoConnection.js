const mongoose = require('mongoose');

const connectionUrl = 'mongodb://127.0.0.1:27017/mystorekey';

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

console.log('"mystorekey" database connected.')