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
	};
})(window.angular);
