(function() {
  'use strict';
  angular
    .module('pbox',[
      'ngRoute',
      'underscore',
      'moment'
    ])
    .config(function ($routeProvider){
      $routeProvider
      .when('/', {
        template: '<h1>Pick Box</h1><a href="#/admin">You da Admin</a>',
        controller: 'MainController'
      })

      // Admin
      .when('/admin', {
        templateUrl: 'views/admin/list.html',
        controller: 'AdminController'
      })
      .when('/admin:pboxId', {
        templateUrl: 'views/admin/show.html',
        controller: 'AdminController'
      })
      .when('/admin:pboxId/edit', {
        templateUrl: 'views/admin/edit.html',
        controller: 'AdminController'
      })
      .when('/admin:cart',{
        templateUrl: 'views/admin/cart.html',
        controller: 'AdminController'
      })
      .when('/addAccessories', {
        templateUrl: 'views/admin/create.html',
        controller: 'AdminController'
      })
      .when('/likes', {
        templateUrl: 'views/admin/list.html',
        controller: 'AdminController'
      })


// Customer
      .when('/customer', {
        templateUrl: 'views/customer/list.html',
        controller: 'CustController'
      })
      .when('/customer:pboxId', {
        templateUrl: 'views/customer/show.html',
        controller: 'CustController'
      })
      .when('/customer:pboxId/edit', {
        templateUrl: 'views/customer/edit.html',
        controller: 'CustController'
      })
      .when('/customer:cart',{
        templateUrl: 'views/customer/cart.html',
        controller: 'CustController'
      })
      .when('/addAccessories', {
        templateUrl: 'views/customer/create.html',
        controller: 'CustController'
      })
      .when('/likes', {
        templateUrl: 'views/customer/list.html',
        controller: 'CustController'
      })
      .when('/likes:likedPboxId',{
        templateUrl: 'views/customer/show.html',
        controller: 'CustController'
      })

// When bad stuff happens
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({ redirectTo: '/404'})
    });


  angular
  .module('underscore',[])
  .factory('_', function($window) {
    return $window._;
  })

  angular
  .module('moment', [])
  .factory('moment', function($window) {
    return $window.moment;
  });

}());
