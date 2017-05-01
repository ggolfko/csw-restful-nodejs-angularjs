'use strict';

var app = angular.module('starter', ['ngResource', 'ngRoute', 'ngSanitize']);

// app.config(function($routeProvider) {
//   $routeProvider
//     .when("/", {
//       templateUrl: "src/main.html",
//       controller: 'AppController'
//     })
// });
//


app.controller('AppController', function($scope, $resource, $rootScope) {

  var Crm = $resource('/api/crms/:crm_id', {
      crm_id: '@id'
    },
    // PUT is not a bulid-in http method in ngResource
    {
      update: {
        method: 'PUT'
      }
    }
  )
  // need to declare in first use in side controller
  // unless we cannot access editCrm via $scope
  $scope.address = {};
  $scope.geo = {};
  $scope.company = {}
  $scope.error = {};
  $scope.editCrm = {};
  $scope.result = {};
  $scope.data = {};
  $scope.crms = Crm.query();

  $scope.get = function(id) {
    // crm in function argument = result of Crm.get().
    // crm = Crm.get({crm_id})
    Crm.get({
      crm_id: id
    }, function(crm) {
      // $scope.result = crm
      console.log(crm)
      console.log('result name = ' + crm.name)
    })
  }

  $scope.edit = function(id) {
    Crm.get({
      crm_id: id
    }, function(crm) {
      $scope.error = {};
      $scope.editCrm.id = id
      $scope.editCrm.name = crm.name
      $scope.editCrm.username = crm.username;
      $scope.editCrm.email = crm.email;
      //address
      $scope.editCrm.street = crm.address.street;
      $scope.editCrm.suite = crm.address.suite;
      $scope.editCrm.city = crm.address.city;
      $scope.editCrm.zipcode = crm.address.zipcode;
      //address.geo
      $scope.editCrm.lat = crm.address.geo.lat;
      $scope.editCrm.lng = crm.address.geo.lng;
      //
      $scope.editCrm.phone = crm.phone;
      $scope.editCrm.website = crm.website;
      //company
      $scope.editCrm.companyname = crm.company.name;
      $scope.editCrm.catchPhrase = crm.company.catchPhrase;
      $scope.editCrm.bs = crm.company.bs;
      //
      $scope.editCrm.picUrl = crm.picUrl;
      $scope.get(id)
      $scope.result = {}
      // $scope.result.message = '<strong>Well done!</strong> You successfully ' + $scope.editCrm.name + ' is edit.'
    })
  }

  $scope.update = function(id) {

    $scope.error.name = (!$scope.editCrm.name || $scope.editCrm.name.trim() === '') ? true : false;
    $scope.error.username = (!$scope.editCrm.username || $scope.editCrm.username.trim() === '') ? true : false;
    $scope.error.email = (!$scope.editCrm.email || $scope.editCrm.email.trim() === '') ? true : false;
    $scope.error.street = (!$scope.editCrm.street || $scope.editCrm.street.trim() === '') ? true : false;
    $scope.error.suite = (!$scope.editCrm.suite || $scope.editCrm.suite.trim() === '') ? true : false;
    $scope.error.city = (!$scope.editCrm.city || $scope.editCrm.city.trim() === '') ? true : false;
    $scope.error.zipcode = (!$scope.editCrm.zipcode || $scope.editCrm.zipcode.trim() === '') ? true : false;
    $scope.error.lat = (!$scope.editCrm.lat || $scope.editCrm.lat.trim() === '') ? true : false;
    $scope.error.lng = (!$scope.editCrm.lng || $scope.editCrm.lng.trim() === '') ? true : false;
    $scope.error.website = (!$scope.editCrm.website || $scope.editCrm.website.trim() === '') ? true : false;
    $scope.error.phone = (!$scope.editCrm.phone || $scope.editCrm.phone.trim() === '') ? true : false;
    $scope.error.companyname = (!$scope.editCrm.companyname || $scope.editCrm.companyname.trim() === '') ? true : false;
    $scope.error.catchPhrase = (!$scope.editCrm.catchPhrase || $scope.editCrm.catchPhrase.trim() === '') ? true : false;
    $scope.error.bs = (!$scope.editCrm.bs || $scope.editCrm.bs.trim() === '') ? true : false;
    $scope.error.picUrl = (!$scope.editCrm.picUrl || $scope.editCrm.picUrl.trim() === '') ? true : false;

    if (!$scope.error.name &&
      !$scope.error.username &&
      !$scope.error.email &&
      !$scope.error.street &&
      !$scope.error.suite &&
      !$scope.error.city &&
      !$scope.error.zipcode &&
      !$scope.error.lat &&
      !$scope.error.lng &&
      !$scope.error.phone &&
      !$scope.error.website &&
      !$scope.error.companyname &&
      !$scope.error.catchPhrase &&
      !$scope.error.bs &&
      !$scope.error.picUrl) {
      Crm.update({
        crm_id: id
      }, {
        name: $scope.editCrm.name,
        username: $scope.editCrm.username,
        email: $scope.editCrm.email,
        address: {
          street: $scope.editCrm.street,
          suite: $scope.editCrm.suite,
          city: $scope.editCrm.city,
          zipcode: $scope.editCrm.zipcode,
          geo: {
            lat: $scope.editCrm.lat,
            lng: $scope.editCrm.lng
          }
        },
        phone: $scope.editCrm.phone,
        website: $scope.editCrm.website,
        company: {
          name: $scope.editCrm.companyname,
          catchPhrase: $scope.editCrm.catchPhrase,
          bs: $scope.editCrm.bs,
        },
        picUrl: $scope.editCrm.picUrl
      });
      $scope.crms = Crm.query();
      // $scope.get(id)
      swal({
        title: "Well done! You successfully " + $scope.editCrm.name + " is updated.",
        text: "I will close in 2 seconds.",
        type: "success",
        timer: 2000,
        showConfirmButton: false
      });
      $scope.result.status = 'success'
      $scope.result.message = '<strong>Well done!</strong> You successfully ' + $scope.editCrm.name + ' is updated.'
    } else {
      swal({
        title: "Better check yourself, you\'re not looking too good.",
        text: "I will close in 2 seconds.",
        type: "warning",
        timer: 2000,
        showConfirmButton: false
      });
      $scope.result.status = 'warning'
      $scope.result.message = '<strong>Warning!</strong> Better check yourself, you\'re not looking too good.'
    }
  }

  $scope.delete = function(id) {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary Crm_id : " + id + "!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel please!",
      closeOnConfirm: false,
      closeOnCancel: false
    }, function(isConfirm) {
      if (isConfirm) {
        swal("Deleted!", "Your imaginary Crm_id : " + id + " has been deleted.", "success");
        Crm.delete({
          crm_id: id
        })
        $scope.crms = Crm.query();
      } else {
        swal("Cancelled", "Your imaginary Crm_id : " + id + " is safe :)", "error");
      }
    });
    $scope.result.status = 'danger'
    $scope.result.message = '<strong>Oh snap!</strong> You successfully Crm_id :' + id + ' is deleted.'

  }

  $scope.add = function() {
    $scope.error.name = (!$scope.addCrm.name || $scope.addCrm.name.trim() === '') ? true : false;
    $scope.error.username = (!$scope.addCrm.username || $scope.addCrm.username.trim() === '') ? true : false;
    $scope.error.email = (!$scope.addCrm.email || $scope.addCrm.email.trim() === '') ? true : false;
    $scope.error.picUrl = (!$scope.addCrm.picUrl || $scope.addCrm.picUrl.trim() === '') ? true : false;

    if (!$scope.error.name && !$scope.error.username && !$scope.error.email && !$scope.error.picUrl) {
      Crm.save({
        name: $scope.addCrm.name,
        username: $scope.addCrm.username,
        email: $scope.addCrm.email,
        address: {
          street: $scope.addCrm.street,
          suite: $scope.addCrm.suite,
          city: $scope.addCrm.city,
          zipcode: $scope.addCrm.zipcode,
          geo: {
            lat: $scope.addCrm.lat,
            lng: $scope.addCrm.lng
          }
        },
        phone: $scope.addCrm.phone,
        website: $scope.addCrm.website,
        company: {
          name: $scope.addCrm.companyname,
          catchPhrase: $scope.addCrm.catchPhrase,
          bs: $scope.addCrm.bs,
        },
        picUrl: $scope.addCrm.picUrl
      })
      $scope.crms = Crm.query();

      Custombox.close();
      swal({
        title: "Well done! You successfully Crm:name " + $scope.addCrm.name + " is created.",
        text: "I will close in 2 seconds.",
        imageUrl: "assets/plugins/sweetalert/thumbs-up.jpg",
        timer: 2000,
        showConfirmButton: false
      });
      $scope.result.status = 'success'
      $scope.result.message = '<strong>Well done!</strong> You successfully Crm:name ' + $scope.addCrm.name + ' is created.'
    }
  }

  // ======= function for front-end display with Angular ====
  $scope.isEmpty = function(obj) {
    return Object.keys(obj).length == 0;
  }

  $scope.select = function(id, obj) {
    return id == obj.id
  }


});
