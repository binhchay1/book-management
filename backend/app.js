const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/book-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/employees', require('./routes/employee'));
app.use('/api/departments', require('./routes/department'));

app.listen(5000, () => console.log('Server running on port 5000'));
