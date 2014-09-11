module.exports = ['$rootScope', '$location', function ($rootScope, $location) {

  var NavigationService = {
    currentPath: $location.path()
  };

  $rootScope.$on('$routeChangeSuccess', function(e, current, previous, rejection) {
    NavigationService.currentPath = $location.path();
  });

  return NavigationService;

}];