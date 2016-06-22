var express = require('express');
var router = express.Router();

/* GET home page. */

var items = ['Eat Breakfast', 'Go to Web Development Bootcamp', 'Go home and sleep'];

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/items', function(req, res, next) {
  res.render('index', {key: items});
});

router.get('/items/new', function(req, res, next) {
  res.render('index', {key: items});
});

router.post('/items',function(req, res, next){
  // var newItem = req.body;
  items.push();
  res.redirect('/');
});






module.exports = router;
