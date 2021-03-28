const { getUsers, addUser, deleteUser, getUser, updateUser } = require('./repository');
var express = require('express');
const { query } = require('express');
var router = express.Router();


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', async (req, res) => {
  let users = await getUsers(req.query.search);  
  res.send(users);
});
router.get('/:id', async (req, res) => {
  let userId = req.params.id
  let user = await getUser(userId);
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
router.put('/', async (req, res) => {
  let userName = req.body.name
  let userId = req.body.id
  let response = await updateUser( userId, userName)
        res.send({ success: true })
});
router.delete('/:id', async (req, res) => {
  let userId = req.params.id
  let user = await deleteUser(userId);
  if (user) {
    res.send(204);
  } 
});

module.exports = router;

