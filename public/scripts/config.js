(function() {
  angular
  .module("myProfile")
  .config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/', {
      controller: "aboutCtrl",
      templateUrl: "views/about.html"
    })
    .when('/contact', {
      controller: "contctCtrl",
      templateUrl: "views/contact.html"
    })
    .when('/portfolio', {
      controller: "portfolioCtrl",
      templateUrl: "views/portfolio.html"
    })
    .otherwise({ redirectTo: '/'});
    $locationProvider.hashPrefix('');
  });

})();
