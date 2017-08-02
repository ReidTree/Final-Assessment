var app = angular.module('mod');// Add module and controller here.

app.controller('login-ctrl', function($scope, loginService){

$scope.login = function(x){
  loginService.checkLogin(x);

};


});
