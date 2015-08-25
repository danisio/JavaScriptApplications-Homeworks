/* 
 Create a function that:
 *   **Takes** a collection of books
 *   Each book has propeties `title` and `author`
 **  `author` is an object that has properties `firstName` and `lastName`
 *   **finds** the most popular author (the author with biggest number of books)
 *   **prints** the author to the console
 *	if there is more than one author print them all sorted in ascending order by fullname
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

function solve() {
    return function (books) {
        "use strict";

        var _ = require('../node_modules/underscore/underscore.js');

        var sortedAuthors = _.chain(books)
            .pluck('author')
            .map(function (author) {
                author.fullName = author.firstName + ' ' + author.lastName;
                return author;
            })
            .countBy('fullName')
            .pairs()
            .sortBy(1).reverse()
            .value();

        var mostPopularAuthorsCount = sortedAuthors[0][1];
        _.chain(sortedAuthors)
            .filter(function (item) {
                return item[1] === mostPopularAuthorsCount;
            })
            .pluck(0)
            .sortBy()
            .each(function (item) {
                console.log(item);
            });
    };
}

var books = [{
    title: 'Katadzhiya trepe molets-mutant s uran',
    author: {
        firstName: 'Leland',
        lastName: 'Pallab'
    }
}, {
    title: 'Planirat se tridnevni stachki',
    author: {
        firstName: 'Cleitus',
        lastName: 'Lyosha'
    }
}, {
    title: 'Pleseni svalyat bombandirovach',
    author: {
        firstName: 'Leland',
        lastName: 'Pallab'
    }
}, {
    title: 'Stokovata borsa evakuirana',
    author: {
        firstName: 'Leland',
        lastName: 'Pallab'
    }
}, {
    title: 'Valentino otvarya magazin v Nyu York',
    author: {
        firstName: 'Cleitus',
        lastName: 'Lyosha'
    }
}, {
    title: 'Robot otkradna Mig-29',
    author: {
        firstName: 'Meliton',
        lastName: 'Hann'
    }
}, {
    title: 'Vikat pensioneri',
    author: {
        firstName: 'Cleitus',
        lastName: 'Lyosha'
    }
}, {
    title: 'Evropeyskata kosmicheska agentsiya izprati Hari Potar do kosmicheskata stantsiya',
    author: {
        firstName: 'Jan',
        lastName: 'Murray'
    }
}, {
    title: 'Mel Gibsan otkradna samoletonosach',
    author: {
        firstName: 'Faruq',
        lastName: 'Laurie'
    }
}, {
    title: 'Pensionerite iskat ostavki',
    author: {
        firstName: 'Osgar',
        lastName: 'Yankel'
    }
}, {
    title: 'Maniak podgoni otryad uchiteli',
    author: {
        firstName: 'Valrio',
        lastName: 'Bongani'
    }
}, {
    title: 'Eskimosi praznuvat',
    author: {
        firstName: 'Boitumelo',
        lastName: 'Donal'
    }
}, {
    title: 'Horata iskat zatvor za Debeliya',
    author: {
        firstName: 'Pallas',
        lastName: 'Pauwel'
    }
}, {
    title: 'Vrachki predrichat masovi stachki',
    author: {
        firstName: 'Shahar',
        lastName: 'Sava'
    }
}, {
    title: 'Privatizatori zadigat raketa za skrap',
    author: {
        firstName: 'Pallas',
        lastName: 'Pauwel'
    }
}, {
    title: 'Diabetitsi se kriyat',
    author: {
        firstName: 'Meliton',
        lastName: 'Hann'
    }
}, {
    title: 'Androidi lekuvat malariya s hormon ot morkovi',
    author: {
        firstName: 'Achim',
        lastName: 'Dion'
    }
}, {
    title: 'Atomen fizik trepe angeli s otrova za koloradski brambari',
    author: {
        firstName: 'Hieronymos',
        lastName: 'Udo'
    }
}, {
    title: 'Reyndzhari dovtasvat na pomosht',
    author: {
        firstName: 'Ruben',
        lastName: 'Anah'
    }
}, {
    title: 'Babichki rezhat vodno kolelo za otmashtenie',
    author: {
        firstName: 'Pallas',
        lastName: 'Pauwel'
    }
}, {
    title: 'Skotovadite yadosani',
    author: {
        firstName: 'Philbert',
        lastName: 'Joel'
    }
}];

var result = solve();
result(books);

module.exports = solve;
