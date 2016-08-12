angular.module('calcApp', ['ngMessages'])
    .controller('RootCtrl', ['$scope', function($scope) {

        //  Set $scope var
        $scope.formInvalid = false;
				$scope.tips = 0;
				$scope.earningsTipTotal = 0;
        $scope.earningsMealCount = 0;
        $scope.avgTipPerMeal = 0;

        //  submit function
        $scope.submit = function() {
            if ($scope.mealForm.$valid) {
                $scope.earningsMealCount++;
								$scope.earningsTipTotal += tips;
								$scope.avgTipPerMeal = $scope.earningsTipTotal / $scope.earningsMealCount;
            } else {
                $scope.formInvalid = true;
            }
        };

				//	calc functions
        $scope.subTotal = function(mealPrice, taxRate) {
            return mealPrice + (mealPrice * (taxRate / 100));
        };
        $scope.tipTotal = function(sub, tipPerc) {
						tips = sub * (tipPerc / 100);
            return tips;
        };



    }]);
