var app = angular.module('starter.AngularGoogleMap', ['google-maps']);

app.controller('MapCtrl', ['$scope', function ($scope) {

	$scope.map = {
		center: {
			latitude: 40.454018,
			longitude: -3.509205
		},
		zoom: 12,
		options : {
			scrollwheel: false
		},
		control: {}
	};
	$scope.marker = {
		id: 0,
		coords: {
			latitude: 40.454018,
			longitude: -3.509205
		},
		options: {
			draggable: true
		}
	};
}]);
