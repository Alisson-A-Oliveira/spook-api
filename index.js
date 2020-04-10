const express = require('express');
const mongoose = require('mongoose');
const user = require('./src/routes/user');
const book = require('./src/routes/book');

const app = express();

mongoose.connect('mongodb+srv://spook:spook@cluster0-7tykh.mongodb.net/spook?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use('/user', user);
app.use('/book', book);
 
app.listen(3001);