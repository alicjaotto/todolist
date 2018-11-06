(function(angular) {
	'use strict';

	angular.module('app')
		.directive('singleTask', function () {
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
				templateUrl: '/src/app/todoList/singleTask/singleTask.html',
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
})(window.angular);
