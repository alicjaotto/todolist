(function(angular) {
	'use strict';

	angular.module('app')
		.directive('timeAndDate', function() {
			return {
				restrict: 'E',
				transclude: true,
				templateUrl: '/src/app/timeAndDate/timeAndDate.html',
				controller: timeAndDateController
			};
		});

		function timeAndDateController($scope, $timeout) {
			$scope.time = new Date();

			$scope.updateTime = function() {
				$timeout(function() {
					$scope.time = new Date();
					$scope.updateTime();
				}, 1000);
			}

			$scope.updateTime();
		}
})(window.angular);
