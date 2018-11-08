var angular = require('angular');

angular.module('templates', []);

angular.module('app', [
	'templates'
]);

require('./locationAndTemp/locationAndTemp');
require('./timeAndDate/timeAndDate');
require('./todoList/todoList');
require('./todoList/singleTask/singleTask');
