(function() {
  function contctCtrl($scope){
    var vm = this;
    vm.contact = function($scope){
      $scope.pageClass = "page-contact";
    }
  }

  angular
  .module("myProfile")
  .controller("contctCtrl", contctCtrl);
})();
