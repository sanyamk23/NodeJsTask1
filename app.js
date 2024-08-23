const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();

// mongoose.connect('mongodb+srv://sanyamkumat:Sanyam%402305@cluster0.iz588ml.mongodb.net/test?retryWrites=true&w=majority');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB');
// });

const uri = 'mongodb+srv://sanyamk23:Sanyam@2305@cluster0.lijatce.mongodb.net/task1?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use(express.static('public'));

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
