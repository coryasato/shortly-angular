angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.addLink = function(link){
    Links.addLink(link)
      .then(function(data){
        $location.path('/links');
      }).catch(function(err){
        console.log(err);
      });
  };
});

