const express = require('express');
const app = express();
const articles = require('./public/js/findArticles.js');

// USE

app.use('/public', express.static('public'));

// SET

app.set('views', './views');
app.set('view engine', 'ejs');

// GET

app.use('/', express.static(__dirname + '/node_modules/ejs'));
app.get('/', function(req, res){
    var config = require('./public/Publication.json');
    res.render('index', config);
});

app.get('/articles/:id', function(req, res){
    res.send(articles.getArticles(req.params.id));
});

app.get('/pub', function(req, res){
    var config = require('./public/Publication.json');
    res.send(config);
});

app.get('/pfe', function(req, res){
    res.render('index_pfe');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.render('error404');
});

app.listen(3002);