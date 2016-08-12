angular.module('calcApp', [ 'ngMessages' ])
			 .controller('RootCtrl', [ '$scope', function($scope)	{

				//  Set $scope var
				 $scope.formInvalid = false;

				//  submit function
				 $scope.submit = function(){
				 if( $scope.mealForm.$valid ) {
				     console.log('The form is valid');
				 } else {
				     console.log('The form is invalid');
						 $scope.formInvalid = true;
				 }
			 }
			 }]);
