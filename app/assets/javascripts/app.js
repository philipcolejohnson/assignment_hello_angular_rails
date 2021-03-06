var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/messages");

  $stateProvider
    .state("messages", {
      url: "/messages",
      templateUrl: "templates/messages/index.html",
      controller: "MessagesCtrl"
    });

});

MyApp.config(
  ['RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

  }]);