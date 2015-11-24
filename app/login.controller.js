(function() {
  angular.module('aspire').controller('LoginController', LoginController);

  LoginController.$inject = ['$scope'];

  function LoginController($scope) {

    // Define variables
    $scope.user = {
      username: '',
      password: ''
    };

    //Define methods
    $scope.submit = submit;

    function submit() {
      console.log($scope.user)
    }
  }
})();