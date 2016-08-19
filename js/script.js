angular.module('calcApp', [
    'ngMessages',
    'ngRoute',
    'ngAnimate'
    ])
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
    .controller('RootCtrl', ['$scope','$rootScope', function($scope, $rootScope) {

        //  Set $rootScope var
        $rootScope.formInvalid = $rootScope.formInvalid || false;
				$rootScope.tips = $rootScope.tips || 0;
				$rootScope.earningsTipTotal = $rootScope.earningsTipTotal || 0;
        $rootScope.earningsMealCount = $rootScope.earningsMealCount|| 0;
        $rootScope.avgTipPerMeal = $rootScope.avgTipPerMeal || 0;
        //  submit function
        $rootScope.submit = function() {
            if ($scope.mealForm.$valid) {
                $rootScope.earningsMealCount++;
								$rootScope.earningsTipTotal += tips;
								$rootScope.avgTipPerMeal = $rootScope.earningsTipTotal / $rootScope.earningsMealCount;
								$rootScope.clearForm();
            } else {
                $rootScope.formInvalid = true;
            }
        };

				//	calc functions
        $rootScope.subTotal = function(mealPrice, taxRate) {
            return mealPrice + (mealPrice * (taxRate / 100));
        };
        $rootScope.tipTotal = function(sub, tipPerc) {
						tips = sub * (tipPerc / 100);
            return tips;
        };

				// functions
				$rootScope.clearForm = function(){
					$rootScope.mealPrice = null;
					$rootScope.taxRate = null;
					$rootScope.tipPerc = null;
				}

				$rootScope.resetForm = function(){
					$rootScope.clearForm();
					$rootScope.tips = 0;
					$rootScope.earningsTipTotal = 0;
	        $rootScope.earningsMealCount = 0;
	        $rootScope.avgTipPerMeal = 0;
				};
    }]);
