/*
 Create a function that:
 *   Takes an array of students
 *   Each student has a `firstName`, `lastName` and `age` properties
 *   **finds** the students whose age is between 18 and 24
 *   **prints**  the fullname of found students, sorted lexicographically ascending
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

function solve() {
    return function (students) {
        "use strict";

        var _ = require('../node_modules/underscore/underscore.js');

        _.chain(students)
            .filter(function (st) {
                return 18 <= st.age && st.age <= 24;
            })
            .map(function (st) {
                st.fullName = st.firstName + ' ' + st.lastName;
                return st;
            })
            .sortBy('fullName')
            .each(function (st) {
                console.log(st.fullName);
            });
    };
}

var students = [{
    firstName: 'Efstathios',
    lastName: 'Eyvindr',
    age: 27
}, {
    firstName: 'Valtteri',
    lastName: 'Mansoor',
    age: 22
}, {
    firstName: 'Darin',
    lastName: 'Lorin',
    age: 27
}, {
    firstName: 'Sunil',
    lastName: 'Pavlo',
    age: 9
}, {
    firstName: 'Diniz',
    lastName: 'Shahar',
    age: 14
}, {
    firstName: 'Brutus',
    lastName: 'Vlad',
    age: 40
}, {
    firstName: 'Moishe',
    lastName: 'Anaru',
    age: 19
}];

var result = solve();
result(students);

module.exports = solve;
