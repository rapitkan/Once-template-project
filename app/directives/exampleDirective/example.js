module.exports = ['$compile', 'ExamplesService', function ($compile, ExamplesService) {

    return {
        restrict: 'E',
        scope: {
          example: '='
        },
        templateUrl: "./directives/exampleDirective/example.html",
        link: function(scope, element, attrs) {
          scope.$watch('exampleId', function () {
            console.info(scope.example);
          });
        }
    };

}];
