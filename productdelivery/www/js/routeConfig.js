
angular.module('delivery').config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'view/mainview.html',
    abstract: true,
    controller: 'homeController'
  })

  .state('home.productchooser', {
    url: '/productchooser',
    views: {
      'productchooserview': {
        templateUrl: 'view/productchooser.html',
        controller: 'productChooserController'
      }
    }
  });

  $urlRouterProvider.otherwise('/home/productchooser');

});
