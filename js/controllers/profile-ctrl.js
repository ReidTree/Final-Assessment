var app = angular.module('mod');// Add module and controller here.

app.controller('profile-ctrl', function($scope, loginService){

  $scope.userDetails = loginService.getProfile();
  console.log('function ran', loginService.getProfile());

})
