angular.module('delivery').controller('homeController', function($scope,$http,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,$state){

    $scope.$on("$ionicView.afterEnter", function(){
      ionicMaterialInk.displayEffect();
    });

})

.controller('productChooserController', function($scope,$http,ionicMaterialInk,
  ionicMaterialMotion,$ionicSideMenuDelegate,$timeout,$state){

    $scope.imagens = ['img/water.jpg','img/ionic.png'];

    
    $scope.$on("$ionicView.afterEnter", function(){
      ionicMaterialInk.displayEffect();
      //ionicMaterialMotion.ripple();
    });

});
