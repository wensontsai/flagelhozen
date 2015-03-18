var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

module.exports = router;


/* GET all todos listing. */
router.get('/', function(req, res, next) {
  var id, name, completed, note;

  Todo.find(function (err, todos){
    if (err) return next(err);
      todos.forEach(function(data){
        id = data.id,
        name = data.name,
        completed = data.completed,
        note = data.note
  });
   res.render('todos',
      { title: 'All Todos',
        todos : todos
      });
    })
});


// post and get todo
router.post('/', function(req, res, next) {
  todo = new Todo({
      name : req.body.name,
      completed : req.body.completed,
      note : req.body.note
  });

  Todo.create(
    { name : todo.name,
      completed : todo.completed,
      note : todo.note
    }, function(err,post){
      if (err) return next(err);
      // res.render('todos', { title: 'All Todos', id : id, name : name, completed : completed, note : note });
      res.redirect('todos');
  });
});


// gets particular todo by id number/ todo-specific view
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
});

// gets particular todo by id number and EDITS/ redirect to ALL TODOS view
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
});

// deletes particular todo/ redirect to ALL TODOS view
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.body, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
});

//app
router.get('*', function(req, res, next){
  res.sendfile('../public/partials/todos.html');
});
