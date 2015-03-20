

 // get all todos and show in view
function getAllTodosCtrl($scope, $http) = function(){
  $http.get('/api/todos')
    .success(function(data, status, headers, config){
      $scope.todos = data.todos;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });
};

  // for adding new todo
function createTodoCtrl($scope, $http, $location) = function(){
  $scope.form = {};
  $scope.submitTodo = function(){
    $http.post('/api/todos', $scope.form)
      .success(function(data){
        $location.path('/');
        // $scope.form = {}; // clear form so it can be repopulated

        // $scope.todos = data;
        // console.log(data);
      })
      .error(function(data){
        console.log('Error: ' + data);
    });
  };
};

  // delete a todo after checking it
function deleteTodoCtrl = function(id){
    $http.get('/api/todo' + $routeParams.id)
      .success(function(data){
        $scope.post = data.post;
    });

    $scope.deleteTodo = function(){
      $http.delete('/api/todo/' + $routeParams.id)
        .success(function(data){
          $location.url('/');
        //   $scope.todos = data;
        //   console.log(data);
        // })
        // .error(function(data){
        //   console.log('Error: ' + data);
      });
    };

    $scope.home = function(){
      $location.url('/');
    };

};
