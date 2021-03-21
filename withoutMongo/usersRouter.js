const { getUsers, addUser } = require('./repository');
var express = require('express');
const { query } = require('express');
var router = express.Router();


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', async (req, res) => {
  let users = await getUsers();
  if (!!req.query.search) {
    users = users.filter(u => u.name.indexOf(req.query.search)> -1)
  }
  res.send(users);
});
router.get('/:id', async (req, res) => {
  let userId = req.params.id
  let users = await getUsers();
  let user = users.find(u => u.id == userId)
  if (user) {
    res.send(user);
  } else {
    res.send(404);
  }
  
});
router.post('/', async (req, res) => {
  let userName = req.body.name
  let response = await addUser(userName)
        res.send({ success: true })
});

module.exports = router;

