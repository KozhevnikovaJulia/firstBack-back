const express = require('express');
const app = express();
const port = process.env.PORT || 7777;
const usersRouter = require('./usersRouter');
const tasksRouter = require('./tasksRouter');
const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true, useUnifiedTopology: true});

// //mongoose
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// });

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use((req,res) => {
  res.send(404)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
