'use strict';

var angular = require('angular');

var app = angular.module('app', []);

app.constant('VERSION', require('../../package.json').version);

require('./app')
require('./locationAndTemp/locationAndTemp');
require('./timeAndDate/timeAndDate');
require('./todoList/todoList');
require('./todoList/singleTask/singleTask');
