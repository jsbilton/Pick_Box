(function() {
  'use strict';
  angular
  .module('pbox')
  .controller('MainController', function ($scope) {

    })
    // Customer Controller = CustController
  .controller('CustController', function ($scope, PboxService, CartService, $routeParams) {
    PboxService.getPboxData().then(function (pbox) {

      $scope.pbox = pbox; //attaching pbox with scope
    });
    // CartService.getLikes().success(function (likedAccessories) {
    //
    //   $scope.likedAccessories = likedAccessories;
    // })
    $scope.likeAccessory = function (accessory) {
    CartService.addCartAccessory(accessory);
    };
    if ($routeParams, cartPboxId) { //next is an ajax call
      CartService.getSingleAccessory($routeParams.cartPboxId).success(function (cartItem) {
        $scope.cartItem = cartItem;
        console.log(cartItem);
      })
    }
  })
  // Admin Controller = PboxController
  .controller('AdminController', function ($scope, PboxService, $routeParams)

    if ($routeParams.like) {

  }{

  })

  .controller('CartController', function ($scope, CartService, $routeParams) {
    CartService.get
  })


}());
