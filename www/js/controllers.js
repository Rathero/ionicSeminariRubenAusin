angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CitiesCtrl', function($scope, Cities) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.cities = Cities.all();
  $scope.remove = function(city) {
    Cities.remove(city);
  };
})

.controller('CityDetailCtrl', function($scope, $stateParams, Cities, $http) {
  $scope.city = Cities.get($stateParams.cityId);
  var request = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city.name + ",es&APPID=155de3b370efd8e0f45c05494dfb08e9";
  console.log(request);
  $http.get(request).success(function(data, status, headers, config) {
    $scope.city.details = data;
  });
});
