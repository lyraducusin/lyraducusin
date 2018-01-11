(function() {
  function aboutCtrl($scope) {
    var vm = this;
    vm.about = function($scope){
      $scope.pageClass = "page-about";
    }
  }
  angular
  .module("myProfile")
  .controller("aboutCtrl", aboutCtrl);
})();
