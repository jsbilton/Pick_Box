(function() {
  'use strict';
  angular
  .module('pbox')
  .controller('MainController', function ($scope) {

    })
    // Admin Controller = PboxController
  .controller('PboxController', function ($scope, PboxService, LikeService, $routeParams) {
    PboxService.getPboxData().then(function (pbox) {

      $scope.pbox = pbox; //attaching pbox with scope
    });
    LikeService.getLikes().success(function (likedAccessories) {

      $scope.likedAccessories = likedAccessories;
    })
    $scope.likeAccessory = function (accessory) {
    LikeService.addLikedAccessory(accessory);
    };
    if ($routeParams, likedPboxId) { //next is an ajax call
      LikeService.getSingleAccessory($routeParams.likedPboxId).success(function (likedItem) {
        $scope.likedItem = likedItem;
        console.log(likedItem);
      })
    }
  })
  // Customer Controller = CustController 
  .controller('CustController', function ($scope, PboxService, CartService, $routeParams)

    if ($routeParams.like) {

  }{

  })


}());
