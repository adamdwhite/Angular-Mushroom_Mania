"use strict";

console.log('mushroom factory!');

app.factory("shroomFactory", function($q, $http) {
    let getShrooms = () => {
        return $q((resolve, reject) => {
            $http.get(`https://mushroom-mania-e3948.firebaseio.com/mushrooms.json`)
                .then((itemObject) => {
                    let itemCollection = itemObject.data;
                    console.log("mushrooms in collection".itemCollection);
                    resolve(itemCollection);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    return { getShrooms };
});