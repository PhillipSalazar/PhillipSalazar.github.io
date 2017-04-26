var app = angular.module('appz',['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
// Routing functions
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'public/pages/home.html',
      controller  : 'mainController'
    })

    // route for the gallery page
    .when('/gallery', {
      templateUrl : 'public/pages/gallery.html',
      controller  : 'galleryController'
    })
    // route for the about page
    .when('/about',{
      templateUrl : 'public/pages/about.html',
      controller  : 'aboutController'

    });
});

/*
// needs to worked on

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
*/


// main controller
app.controller('mainController', function($scope){
  console.log("hello index");

});

// Gallery Controller
app.controller('galleryController', function($scope){

console.log("Hello gallery");
$scope.cake = "lolz"
});

// About Controller
app.controller('aboutController', function($scope){
  console.log("helloz aboutz");
  $scope.cake= "hahaz"
});
