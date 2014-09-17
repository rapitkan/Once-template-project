module.exports =
  angular.module("exampleapp.navigation", [])
    .service("NavigationService", require("../../services/navigationService.js"))
    .controller("navigationController", require("./navigationController.js"));