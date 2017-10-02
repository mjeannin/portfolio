const express = require('express');
const app = express();

// USE

app.use('/public', express.static('public'));

// SET

app.set('views', './views');
app.set('view engine', 'ejs');

// GET

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/cv', function(req, res){
    res.render('cv');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.listen(3002);