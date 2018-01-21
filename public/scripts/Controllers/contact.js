(function() {
  function contctCtrl($scope, $http){
    $scope.pageClass        = "page-contact";
    // $scope.result           = "hidden";
    // $scope.resultMessage    = "message";
    // $scope.contactDate;
    // $scope.submitButtonDisabled = false;
    // $scope.submitted
    var vm = this;
    vm.contact = function(contactForm){
      // console.log(contactForm);
      // $scope.submitted            = true;
      // $scope.submitButtonDisabled = true;
      // if(contactform.$valid)
      //   {
      //     $http({
      //       method: "POST",
      //       url:
      //     })
      //   }
    }
  }

  angular
  .module("myProfile")
  .controller("contctCtrl", contctCtrl);
})();
