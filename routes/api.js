var mongoose = require('mongoose');
/////////////
// db connect
/////////////
var database = require('../config/database.js');
mongoose.connect(database.url, function(err){
    if(err){
        console.log('db connection error!', err);
    } else {
        console.log('db connection successful!');
    }
});



var Todo = require('../models/Todo.js');

/* GET all todos listing. */
exports.getAllTodos = function(req, res, next) {
  Todo.find({}, function (err, todos){
    res.json(todos);
  });
};


// post and get todo
exports.createTodo = function(req, res, next) {
  todo = new Todo({
      name : req.body.name,
      completed : req.body.completed,
      note : req.body.note
  });
  todo.save();
  res.json(req.body);
};


// gets particular todo by id number/ todo-specific view
exports.getTodo = function(req, res, next) {
  Todo.findById(req.params.id, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
};

// gets particular todo by id number and EDITS/ redirect to ALL TODOS view
exports.updateTodo = function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function(err,post){
    if (err) return next(err);
    return res.json(post);
  });
};

// deletes particular todo/ redirect to ALL TODOS view
exports.deleteTodo = function(req, res, next) {
  Todo.findByIdAndRemove(req.body, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
};
