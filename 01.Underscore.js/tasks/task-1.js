/*
 Create a function that:
 *   Takes an array of students
 *   Each student has a `firstName` and `lastName` properties
 *   **Finds** all students whose `firstName` is before their `lastName` alphabetically
 *   Then **sorts** them in descending order by fullname
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   Then **prints** the fullname of founded students to the console
 *   **Use underscore.js for all operations**
 */

function solve() {
    "use strict";

    var _ = require('../node_modules/underscore/underscore.js');

    return function (students) {
        _.chain(students)
            .filter(function (item) {
                return (item.firstName.toLowerCase() < item.lastName.toLowerCase());
            })
            .map(function (item) {
                item.fullName = item.firstName + ' ' + item.lastName;
                return item;
            })
            .sortBy('fullName')
            .reverse()
            .each(function (item) {
                console.log(item.fullName);
            });
    };
}

var students = [{
    firstName: 'Ester',
    lastName: 'Reba'
}, {
    firstName: 'Abdullo',
    lastName: 'Vilma'
}, {
    firstName: 'Germano',
    lastName: 'Sabina'
}, {
    firstName: 'Naomi',
    lastName: 'Tichaona'
}];

var result = solve();
result(students);

module.exports = solve;