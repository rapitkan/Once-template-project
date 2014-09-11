require("angular");
module.exports = angular.module("recipebook.navigation", [])
                  .service("NavigationService", require("../../services/navigationService.js"))
                  .controller("navigationController", require("./navigationController.js"));