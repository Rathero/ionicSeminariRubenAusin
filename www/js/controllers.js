angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CitiesCtrl', function($scope, $http, Cities) {
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
  $scope.search = function(searchWord, $http){
    if(searchWord != ""){
      $scope.cities = new Array();
      var request = "http://api.openweathermap.org/data/2.5/find?q=" + searchWord + "&type=like&mode=xml&appid=44db6a862fba0b067b1930da0d769e98";
        $http.get(request).success(function(data, status, headers, config) {
           data.cities.list.forEach(function(entry) {
              var cityFound = data.cities.list[i];
              console.log(cityFound);
              var city = {};
              city.id = 0;
              city.name = searchWord;
              $scope.cities.push(city);
           });
         });
    }
    else $scope.cities = Cities.all();
  };
  $scope.resetCities = function(){
    $scope.cities = Cities.all();
  };
})

.controller('CityDetailCtrl', function($scope, $stateParams, Cities, $http) {
  $scope.city = Cities.get($stateParams.cityId);
  var request = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city.name + ",es&APPID=155de3b370efd8e0f45c05494dfb08e9";
  $http.get(request).success(function(data, status, headers, config) {
    $scope.city.details = data;
  });
});
