var angular = require('angular');

	angular.module('app')
		.directive('timeAndDate', function() {
			'use strict';
			return {
				restrict: 'E',
				transclude: true,
				templateUrl: '/timeAndDate/timeAndDate.html',
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
