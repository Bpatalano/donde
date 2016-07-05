angular.module('donde', [])
.controller('dondeControl', function($scope, dondeQuery) {
  angular.extend( $scope, dondeQuery); 
})
.factory( 'dondeQuery', function() {
});