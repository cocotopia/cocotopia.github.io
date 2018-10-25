var app = angular.module('MyApp', ['ngPostMessage']);

app.controller('MainCtrl', function($scope) {
  $scope.messages = [];
  $scope.$root.$on('$messageIncoming', function (event, data){
    if(data.origin == "https://jab.pe"){
        $scope.messages.push(angular.fromJson(data));
        console.log(data)
    }
  });
  $scope.sendMessage = function (){
    $scope.$emit(
      '$messageOutgoing',
      angular.toJson({"response":"hi"})
    );
  };
});
