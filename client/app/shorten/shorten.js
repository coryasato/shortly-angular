angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  angular.extend('ShortenController', Links);

  $scope.addLink = function(link){
    Links.addLink(link)
      .then(function(data){
        console.log("AFTER THEN POST", JSON.stringify(data));
      }).catch(function(err){
        console.log(err);
      });
  };
});

