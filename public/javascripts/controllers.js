// managing the poll list
function PollListCtrl($scope){
  #scope.polls = [];
}

// voting/viewing poll results
function PollItermCtrl($scope, $routeParams){
  $scope.poll = {};
  $scope.vote = function(){};
}

//creating a new poll
function PollNewCtrl($scope){
  $scope.poll = {
    question:'',
    choices: [{text:''}, {text:''}, {text:''}]
  };
  $scope.addChoice = function(){
    $scope.poll.choices.push({text:''});
  };
  $scope.createPoll = function(){};
}
