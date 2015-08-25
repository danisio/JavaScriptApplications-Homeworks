/* 
 Create a function that:
 *   **Takes** an array of animals
 *   Each animal has propeties `name`, `species` and `legsCount`
 *   **finds** and **prints** the total number of legs to the console in the format:
 *   "Total number of legs: TOTAL_NUMBER_OF_LEGS"
 *   **Use underscore.js for all operations**
 */

function solve() {
    return function (animals) {
        "use strict";

        var _ = require('../node_modules/underscore/underscore.js');

        var totalLegs = _.chain(animals)
            .pluck('legsCount')
            .reduce(function (memo, num) {
                return memo + num;
            }, 0);

        console.log('Total number of legs: ' + totalLegs);
    };
}

var animals = [{
    name: 'Illtyd',
    species: 'Fly',
    legsCount: 1
}, {
    name: 'Hodei',
    species: 'Spam',
    legsCount: 2
}, {
    name: 'Flynn',
    species: 'Centipede',
    legsCount: 100
}, {
    name: 'Isaac',
    species: 'Dog',
    legsCount: 15
}, {
    name: 'Anass',
    species: 'Mouse',
    legsCount: 7
}, {
    name: 'Gionata',
    species: 'Rat',
    legsCount: 4
}, {
    name: 'Azazyahu',
    species: 'Butterfly',
    legsCount: 2
}, {
    name: 'Nikanor',
    species: 'Waterfowl',
    legsCount: 4
}, {
    name: 'Van',
    species: 'Dormouse',
    legsCount: 4
}, {
    name: 'Lavrentiy',
    species: 'Meerkat',
    legsCount: 11
}];

var result = solve();
result(animals);

module.exports = solve;
