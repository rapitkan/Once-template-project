require("angular");
module.exports = angular.module("nuottiklubi.header", [])
                  .service("NavigationService", require("../../services/navigationService.js"))
                  .controller("headerController", require("./headerController.js"));