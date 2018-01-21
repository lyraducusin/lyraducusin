(function() {
  function portfolioCtrl($scope) {
    var vm = this;
    vm.portfolio = function($scope){
      $scope.pageClass = "page-portfolio";
    }
  }
  angular
  .module("myProfile")
  .controller("portfolioCtrl", portfolioCtrl);
})();
