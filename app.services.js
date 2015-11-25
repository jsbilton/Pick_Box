(function() {
  'use strict';
   angular
    .module('pbox')
    .factory('PboxService', function($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/pbox';


      var addPbox = function (addAccessories) {
             $http.post(url, addAccessories).then(function (res) {
               console.log(res);
             });
          };

      var getPbox = function () {
        return $http.get(url);
      };

      var removePbox = function (box){
        $http.delete (url + '/' + box._id);
      };

}());
