(function(angular) {
	'use strict';

	// angular.module('app')
	// 	.factory('weatherService', [$http, $q, function ($http, $q) {
	//
	// 		function getWeather (lat, lon) {
	// 			var deferred = $q.defer();
	// 			$http.get('https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + lat + '&lon=' + lon + '&APPID=8f5da5a3c95b945d1b9119efc8bb164b')
	// 				.success(function(data){
	// 					deferred.resolve(data.query.results.channel);
	// 				})
	// 				.error(function(err){
	// 					console.log('Error retrieving markets');
	// 					deferred.reject(err);
	// 				});
	// 			return deferred.promise;
	// 		}
	// 		return {
	// 			getWeather: getWeather
	// 		};
	// 	}]);
})(window.angular);
