(function() {
  angular
  .module("myProfile")
  .config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/home', {
      controller: "homeCtrl",
      templateUrl: "views/home.html"
    })
    .when('/about', {
      controller: "aboutCtrl",
      templateUrl: "views/about.html"
    })
    .when('/contact', {
      controller: "contctCtrl",
      templateUrl: "views/contact.html"
    })
    .otherwise({ redirectTo: '/home'});
    $locationProvider.hashPrefix('');
  });

})();
