var express = require('express');
var mongoose = require('mongoose');

/////////////
// db connect
/////////////
var database = require('./config/database.js');
mongoose.connect(database.url, function(err){
    if(err){
        console.log('db connection error!', err);
    } else {
        console.log('db connection successful!');
    }
});

// *** before moving connect to separate file ***
// mongoose.connect('mongodb://localhost/flagelhozen', function(err){
//     if(err){
//         console.log('connection error', err);
//     } else {
//         console.log('connection successfull');
//     }
// });


var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


////////////////////
// EXPRESS/Node.js views engine setup
////////////////////
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


////////////////
// middleware
////////////////
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



////////////////
// routing
////////////////
// * * *  express - node.js views  * * *
// var routes = require('./routes/index');
var todos = require('./routes/todos');
// app.use('/', routes);
app.use('/todos', todos);



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//////////////////
/// error handlers
//////////////////
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



//////////////////
// routes to ANGULAR.js + JSON API
//////////////////
var api = require('./routes/api');

app.get('/api/todos', api.getAllTodos);
app.get('/api/todo/:id', api.getTodo);
app.post('/api/todo', api.createTodo);
app.put('/api/todo/:id', api.updateTodo);
app.delete('/api/todo/:id', api.deleteTodo);

app.get('*', function(req, res, next){
    res.sendfile('./public/index.html');
});


//////////////////////////
// server + listening port
//////////////////////////
app.listen(3030);
console.log("app listening on port 3030");


module.exports = app;
