var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Obi1",
    added: new Date()
  },
  {
    text: "I am your father!",
    user: "VaderGr8er",
    added: new Date()
  }  
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('form');
});

router.post('/new', function(req, res, next){
  msg = req.body.msg;
  usr = req.body.usr;
  dt = req.body.added;
  messages.push({ text: msg, user: usr, added: new Date() });
  res.redirect('/');
});

module.exports = router;
