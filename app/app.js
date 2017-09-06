"use strict";

var app = angular.module("MushroomMania", ['ngRoute']);
//config-keyword is used to configure app
//$routeprovider- determines URL route
app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        //templateUrl- what template to use:
        templateUrl: 'partials/all-mushrooms.html',
        //controller- what controller to use:
        controller: "shroomCtrl"
    }).

    otherwise('/');
});