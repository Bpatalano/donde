angular.module('fizzbuzz', [])
.controller('fizzbuzzCtrl', function($scope, Counter) {
  angular.extend( $scope, Counter); 
})
.factory( 'Counter', function() {
  var counter = 0;
  var increment = function() {
    counter ++;
    var display = '';
    if (counter % 5 === 0 && counter % 3 === 0) {
      display = 'FIZZBUZZ';
      return;
    }
    if (counter % 3 === 0) {
      display = 'FIZZ';
      return;
    }
    if (counter % 5 === 0) {
      display = 'BUZZ';
      return;
    }
    else {
      display = '';
    }
  };

  return {
    counter : counter,
    increment : increment
  }
  
});