require("angular");
module.exports = angular.module("exampleapp.examples", [])
                  .service("ExamplesService", require("../../services/examplesService.js"))
                  .controller("examplesController", require("./examplesController.js"));
