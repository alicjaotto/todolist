var angular = require('angular');

	angular.module('app')
		.directive('singleTask', function () {
			'use strict';
			return {
				restrict: 'E',
				transclude: true,
				scope: {
					title: '<',
					index: '@',
					taskDone: '<',
					deleteTaskCallback: '&',
					markTaskAsDoneCallback: '&'
				},
				templateUrl: '/todoList/singleTask/singleTask.html',
				controller: singleTaskController,
			};
	});

	function singleTaskController($scope) {

		$scope.delete = function() {
			$scope.deleteTaskCallback();
		};

		$scope.done = function() {
			$scope.markTaskAsDoneCallback();
		};

		$scope.isTaskDone = function() {
			return $scope.taskDone === true;
		}
	};
