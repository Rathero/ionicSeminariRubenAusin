
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.AngularGoogleMap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                        scope.$apply(function(){
                                scope.$eval(attrs.ngEnter);
                        });

                        event.preventDefault();
                }
            });
        };
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.cities', {
    url: '/cities',
    views: {
      'tab-cities': {
        templateUrl: 'templates/tab-cities.html',
        controller: 'CitiesCtrl'
      }
    }
  })
    .state('tab.city-detail', {
      url: '/cities/:cityId',
      views: {
        'tab-cities': {
          templateUrl: 'templates/city-detail.html',
          controller: 'CityDetailCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/cities');

});
