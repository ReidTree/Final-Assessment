var app = angular.module('mod');// Add module here.

app.config(function($routeProvider){
  $routeProvider
    .when('/login', {
      controller: 'login-ctrl',
      templateUrl: 'partials/login.html'
  }).when('/profile', {
      controller: 'profile-ctrl',
      templateUrl: 'partials/profile.html'
  }).otherwise({redirectTo: '/login'});
});// Routing goes here.
