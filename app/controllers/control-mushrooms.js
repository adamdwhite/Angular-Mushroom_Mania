"use strict";

console.log("here's the mushroom controller");

app.controller("shroomCtrl", function($scope, shroomFactory) {

    shroomFactory.getShrooms()
        .then(function(itemCollection) {
            //push items into the array for search functionality
            let shroomArray = [];
            let shrooms = Object.keys(itemCollection);
            shrooms.forEach((item) => {
                shroomArray.push(itemCollection[item]);
            });
            console.log("shrooms", itemCollection);
            $scope.shrooms = shroomArray;
        });
});