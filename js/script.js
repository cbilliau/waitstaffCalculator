angular.module('calcApp', ['ngMessages', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'RootCtrl'
      })
      .when('/home', {
        templateUrl: 'home.html',
        controller: 'RootCtrl'
      })
      .when('/new_meal', {
        templateUrl: 'new_meal.html',
        controller: 'RootCtrl'
      })
      .when('/my_earnings', {
        templateUrl: 'my_earnings.html',
        controller: 'RootCtrl'
      })
      .when('/error', {
        template: '<p>Error - Page Not Found</p>'
      })
      .otherwise('/error');
    }])
    .controller('RootCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
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
								$scope.clearForm();
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

				// functions
				$scope.clearForm = function(){
					$scope.mealPrice = null;
					$scope.taxRate = null;
					$scope.tipPerc = null;
				}

				$scope.resetForm = function(){
					$scope.clearForm();
					$scope.tips = 0;
					$scope.earningsTipTotal = 0;
	        $scope.earningsMealCount = 0;
	        $scope.avgTipPerMeal = 0;
				};
    }]);
