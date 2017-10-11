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

app.get('/cv', function(req, res){
    res.render('cv');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/pfe', function(req, res){
    res.render('index_pfe');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.render('error404');
});

app.listen(3002);
