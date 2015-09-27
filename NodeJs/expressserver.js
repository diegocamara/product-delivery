var express = require('express');
var app = express();
var router = express.Router();
var sequelize = require('sequelize');
var models = require('./application/models');

router.route('/itens').get(function(req, res, next){
  res.send('Get');
})
.post(function(req, res, next){
  res.send('Post');
})

router.route('/itens/id=:id').get(function(req, res, next){
  res.send('Get id: ' + req.params.id);
})
.post(function(req, res, next){
  res.send('Post id: ' + req.params.id);
})
.delete(function(req, res, next){
  res.send('Delete id: ' + req.params.id);
});

app.get('/service', function(req, res){
  console.log(req.route);
  res.send('NodeJs Service Online!');
});

app.use('/api', router);

var server = undefined;

models.sequelize.sync().then(function(){
    server = app.listen(3000, function(){
    console.log('Express listening to http://localhost:3000');
  })
});
