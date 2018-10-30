angular.module('myTodoListApp', [])
	.controller('myTodoListController', function($scope) {

		$scope.list = [
			{
				title: 'learn Angular 2+ and TypeScript',
				done: false
			},
			{
				title: 'make my application beautiful and user-friendly',
				done: false
			},
			{
				title: 'Make my application works',
				done: false
			}
		];

		$scope.doneList = [];

		$scope.addNewTask = function() {
			var newTask = {title: $scope.newTask, done: false};
			$scope.list.push(newTask);
			clearNewTask();
		}

		$scope.markTaskAsDone = function(index) {
			$scope.list[index].done = true;
			var doneTask = $scope.list[index];
			$scope.doneList.push(doneTask);
			$scope.list.splice(index, 1);
		}

		function clearNewTask() {
			$scope.newTask = '';
		}
});
