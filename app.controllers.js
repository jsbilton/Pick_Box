(function() {
  'use strict';
  angular
  .module('pbox')
  .controller('MainController', function ($scope) {

    })

    // Admin Controller = PboxController
    .controller('AdminController', function ($scope, PboxService, $routeParams)

      PboxService.getPbox().success(function (box){
        console.log(box);
        $scope.msg = box;
      });

      var clearInput = function (box){
        $scope.addAccessories.title = " ";
        $scope.addAccessories.image = " ";
        $scope.addAccessories.price = " ";
        $scope.addAccessories.description = " ";
      };
      $scope.gear = function (addAccessories) {
        setTimeout(clearInput, 100);
        prompt('Rock Hard');
      };
      $scope.delPbox = function (box) {
        PboxService.deletePbox(box);
      }
    })

    // Customer Controller = CustController
  .controller('CustController', function ($scope, PboxService, CartService, $routeParams) {

    PboxService.getPboxData().then(function (box) {

      $scope.pbox = pbox; //attaching pbox with scope
    });

    //demo code below
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

  .controller('CartController', function ($scope, CartService, $routeParams) {
    CartService.getPbox().success(function(gear){
      $scope.msg = accessories;
    });
    $scope.delCartAccessory = function (pboxItem) {
      CartService.delCartAccessory(pboxItem);
    };

  })


}());
