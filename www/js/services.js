angular.module('starter.services', [])

.factory('Cities', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cities = [{
    id: 0,
    name: 'Barcelona',
  }, {
    id: 1,
    name: 'Madrid',
  }, {
    id: 2,
    name: 'Roma',
  }, {
    id: 3,
    name: 'Paris',
  }, {
    id: 4,
    name: 'Washington DC',
  }, {
    id: 5,
    name: 'London',
  }, {
    id: 6,
    name: 'Berlin',
  }, {
    id: 7,
    name: 'Hamburg',
  }, {
    id: 8,
    name: 'Budapest',
  }, {
    id: 9,
    name: 'Seoul',
  }];

  return {
    all: function() {
      return cities;
    },
    remove: function(city) {
      cities.splice(cities.indexOf(city), 1);
    },
    get: function(cityId) {
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].id === parseInt(cityId)) {
          return cities[i];
        }
      }
      return null;
    },
    add: function(city){
      cities.push(city);
    }
  };
});
