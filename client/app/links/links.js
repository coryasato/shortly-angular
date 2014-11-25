angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, Links) {
  angular.extend('LinksController', Links);

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(data) {
        $scope.data = data;
      })
      .catch(function(err) {
        conosole.log(err);
      });
  };

  $scope.openLink = function(code) {
    $window.open('http://localhost:3000/api/links/' + code);
    $scope.getLinks();
  };
});
