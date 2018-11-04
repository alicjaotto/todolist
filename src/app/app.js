(function(angular) {
	'use strict';

	angular.module('app', [])
		.directive('app', function() {
			return {
				restrict: 'E',
				transclude: true,
				scope: {},
				templateUrl: '/src/app/app.html'
			}
		});
})(window.angular);
