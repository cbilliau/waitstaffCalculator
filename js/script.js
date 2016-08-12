angular.module('calcApp', ['ngMessages'])
    .controller('RootCtrl', ['$scope', function($scope) {

        //  Set $scope var
        $scope.formInvalid = false;
				$scope.subAmmount = 0;
				$scope.tipAmmount = 0;

        //  submit function
        $scope.submit = function() {
            if ($scope.mealForm.$valid) {
								$scope.earningsTipTotal += $scope.tipTotal;
                console.log('The form is valid');
            } else {
                console.log('The form is invalid');
                $scope.formInvalid = true;
            }

				$scope.subTotal = function(mealPrice, taxRate){
					subAmmount = mealPrice + (mealPrice * (taxRate / 100));
					return subAmmount;
				};

				$scope.tipTotal = function(sub, tipPerc){
					tipAmmount = sub * (tipPerc / 100);
					return tipAmmount;
				};

				$scope.total = function(sub, tipTotal){
					// console.log('subtip'+subPlusTip);
					// console.log('totalTip'+tipAmmount);
					return subAmmount + tipAmmount;
				}
        };
				$scope.earningsTipTotal = 0;
				$scope.earningsMealCount = 0;
				$scope.avgTipPerMeal = 0;

    }]);
