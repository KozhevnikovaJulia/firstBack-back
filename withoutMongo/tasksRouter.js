var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', async (req, res) => {
  res.send('tasks');
});

module.exports = router;

