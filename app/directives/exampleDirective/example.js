module.exports = ['$compile', 'RecipesService', function ($compile, RecipesService) {

    return {
        restrict: 'E',
        scope: {
          recipe: '='
        },
        templateUrl: "./directives/recipe/recipe.html",
        link: function(scope, element, attrs) {
          scope.$watch('recipeId', function () {
            console.info(scope.recipe);
          });
        }
    };

}];
