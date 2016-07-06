angular.module('donde', [])
.controller('dondeControl', function($scope, dondeQuery) {
  $scope.query = function(newQuery) {
    dondeQuery.query(newQuery)
      .then(function(result) {
        $scope.result = result;
      });

  }
  $scope.result = '';
})
.factory( 'dondeQuery', function($http) {
  var query = function(newQuery) { 
    console.log(newQuery);
    var data = {
      place : newQuery 
    }
    return $http({
      method: 'POST',
      url: '/query',
      data: data
    })
      .then(function (resp) {
        console.log ("Results:", resp)
        return resp;
      });
  }

  return {
    query : query
  }
});