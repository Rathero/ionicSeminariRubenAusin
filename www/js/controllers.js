 angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope) {})

.controller('CitiesCtrl', function($scope, Cities, $http) {
  $scope.cities = Cities.all();
  $scope.remove = function(city) {
    Cities.remove(city);
  };
  $scope.http = $http;
  $scope.search = function(searchWord, $http){
    if(searchWord != ""){
      $scope.cities = new Array();
      var request = "http://api.openweathermap.org/data/2.5/find?q=" + searchWord + "&type=like&mode=json&appid=a81da486a0ea0270bcda5c738ed1bca2";
      $scope.http.get(request).success(function(data, status, headers, config) {
         data.list.forEach(function(cityFound) {
            var city = {};
            city.id = cityFound.id;
            city.name = cityFound.name + ", " + cityFound.sys.country;
            Cities.add(city);
            $scope.cities.push(city);
         });
       });
    }
    else $scope.cities = Cities.all();
  };
  $scope.resetCities = function(){
    this.searchWord = '';
    $scope.cities = Cities.all();
  };
})

.controller('CityDetailCtrl', function($scope, $stateParams, Cities, $http) {
  $scope.setMapLatLon = function(lat,lon){
     $scope.map = {
        		center: {
        			latitude: lat,
        			longitude: lon
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
        			latitude: lat,
        			longitude: lon
        		},
        		options: {
        			draggable: false
        		}
        	};
  };
  $scope.city = Cities.get($stateParams.cityId);
  var request = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city.name + "&APPID=155de3b370efd8e0f45c05494dfb08e9&units=metric";
  $http.get(request).success(function(data, status, headers, config) {
    $scope.city.details = data;
    $scope.setMapLatLon(data.coord.lat,data.coord.lon);

  });
  $scope.setMapLatLon(40.454018,-3.509205);
});



