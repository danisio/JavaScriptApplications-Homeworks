/* 
 Create a function that:
 *   Takes an array of students
 *   Each student has:
 *   `firstName`, `lastName` and `age` properties
 *   Array of decimal numbers representing the marks
 *   **finds** the student with highest average mark (there will be only one)
 *   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

function solve() {
    return function (students) {
        "use strict";

        var _ = require('../node_modules/underscore/underscore.js');

        var student = _.chain(students)
            .map(function (st) {
                st.fullName = st.firstName + ' ' + st.lastName;
                st.averMark = _.reduce(st.marks, function (memo, num) {
                        return memo + num;
                    }, 0) / st.marks.length;
                return st;
            })
            .sortBy('averMark')
            .last()
            .value();

        console.log(student.fullName + ' has an average score of ' + student.averMark);
    };
}

var students = [{
    firstName: 'Stanimir',
    lastName: 'Jakov',
    age: 24,
    marks: [6, 4]
}, {
    firstName: 'Stanimir',
    lastName: 'Jakov',
    age: 17,
    marks: [5, 5]
}, {
    firstName: 'Frederick',
    lastName: 'Jacob',
    age: 1,
    marks: [4.2, 3.7]
}, {
    firstName: 'Joukahainen',
    lastName: 'Valerian',
    age: 1,
    marks: [4, 3.7]
}, {
    firstName: 'Teodor',
    lastName: 'Mervyn',
    age: 8,
    marks: [6, 1.2]
}, {
    firstName: 'Kristaps',
    lastName: 'lfsige',
    age: 30,
    marks: [7.3, 6.9]
}, {
    firstName: 'Varnava',
    lastName: 'Peter',
    age: 42,
    marks: [3, 4]
}, {
    firstName: 'Aibek',
    lastName: 'Patricio',
    age: 9,
    marks: [7, 8]
}, {
    firstName: 'Lovre',
    lastName: 'Thoko',
    age: 11,
    marks: [2, 10]
}, {
    firstName: 'Ambrosius',
    lastName: 'Volos',
    age: 26,
    marks: [4, 4.2]
}];

var result = solve();
result(students);

module.exports = solve;
