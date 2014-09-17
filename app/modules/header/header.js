module.exports =
  angular.module("exampleapp.header", [])
    .service("NavigationService", require("../../services/navigationService.js"))
    .controller("headerController", require("./headerController.js"));