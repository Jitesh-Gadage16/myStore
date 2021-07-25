const express = require('express');
const app = express();

const Port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('this is a start!');
});

//database
require('./models/mongoConnection');


//To Use JSON Format
app.use(express.json());


//user registration route
const userRegistrationRoute = require('./routers/userRegistrationRouter');
app.use(userRegistrationRoute);

//getCatHeadList
const getCatHeaderListRouter = require('./routers/getCatHeaderListRouter');
app.use(getCatHeaderListRouter);

app.listen(Port, () => console.log('running good.'));