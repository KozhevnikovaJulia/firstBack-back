const express = require('express');
const app = express();
const port = 7777;
const usersRouter = require('./usersRouter');
const tasksRouter = require('./tasksRouter');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use((req,res) => {
  res.send(404)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


