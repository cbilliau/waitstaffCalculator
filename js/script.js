angular.module('calcApp', [ 'ngMessages' ])
			 .controller('RootCtrl', [ '$scope', function($scope)	{

				 $scope.submit = function(){
				 if( $scope.mealForm.$valid ) {
				     console.log('The form is valid');
				 } else {
				     console.log('The form is invalid');
				 }
			 }
			 }]);
