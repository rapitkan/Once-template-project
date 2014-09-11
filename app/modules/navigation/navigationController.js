module.exports = ['$scope', 'NavigationService', function ($scope, NavigationService) {
	$scope.menuCollapsed = true;
	$scope.path = NavigationService.currentPath;
}];