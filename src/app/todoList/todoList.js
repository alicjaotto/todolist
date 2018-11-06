(function(angular) {
	'use strict';

	angular.module('app')
		.directive('todoList', function () {
			return {
				restrict: 'E',
				transclude: true,
				scope: {},
				templateUrl: '/src/app/todoList/todoList.html',
				controller: todoListController,
			};
	});

	function todoListController($scope) {

		$scope.list = [
			{
				title: 'learn Angular 2+ and TypeScript',
				done: false
			},
			{
				title: 'make my application works!',
				done: false
			},
			{
				title: 'set proper title for 1 or 0 tasks to do',
				done: false
			}
		];

		$scope.doneList = [
			{
				title: 'make my application beautiful and user-friendly',
				done: true
			}
		];

		$scope.addNewTask = function() {
			if ($scope.newTask.length !== 0) {
				var newTask = {title: $scope.newTask, done: false};
				$scope.list.push(newTask);
				clearNewTask();
			}
		}

		$scope.markTaskAsDone = function(index) {
			$scope.list[index].done = true;
			var doneTask = $scope.list[index];
			$scope.doneList.push(doneTask);
			$scope.list.splice(index, 1);
		}

		$scope.deleteTask = function(index) {
			$scope.list.splice(index, 1);
		}

		function clearNewTask() {
			$scope.newTask = '';
		}
	};
})(window.angular);
