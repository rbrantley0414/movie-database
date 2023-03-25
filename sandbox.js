// Object.keys(movieData).forEach(key=> {
//     console.log(key);
//     console.log(movieData[key]);
// });

var element = document.getElementById("demo");

// const sortByPosition = movies => {
//     const order = [], res = {};
//     Object.keys(movies).forEach(key => {
//        return order[movies[key]['year']] = key;
//     });
//     order.forEach(key => {
//        res[key] = movies[key];
//     });
//     return res;
//  }

//  console.log(sortByPosition(movies));
const movies = {
    "The Darjeeling Limited": {
        plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
        cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
        runtime: 151,
        rating: 7.2,
        year: 2007,
    },
    "The Royal Tenenbaums": {
        plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
        rating: 7.6,
        year: 2001,
        cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
        runtime: 170,
    },
    "Fantastic Mr. Fox": {
        year: 2009,
        plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
        cast: [
            "George Clooney",
            "Meryl Streep",
            "Bill Murray",
            "Jason Schwartzman",
        ],
        runtime: 147,
        rating: 7.9,
    },
    "The Grand Budapest Hotel": {
        rating: 8.1,
        runtime: 159,
        year: 2014,
        plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
};
// document.write(colorObject.colors.map(c => c.code.rgba[0]));
// document.write(movies.movies[0].map(c => c.cast));




// var printObj = function (obj) {
//     var string = '';
//     for (var prop in obj) {
//         if (typeof obj[prop] == 'string') {
//             string += prop + ': ' + obj[prop] + '; </br>';
//         }
//         else {
//             string += prop + ': </br>' + (obj[prop]) + '</br>';
//         }
//     }
//     return string;
// }
// function movieData_Run() {
//     element.innerHTML = printObj(movies);
// }




// document.getElementById("demo").innerHTML = movieData.plot + ", " + movieData.rating + ", " + movieData.year + ", " + movieData.cast + ", " + movieData.runtime;

// var output = JSON.stringify(movieData);
// document.getElementById("demo").innerHTML = (output);

// var output = '';
// Object.values(movieData).forEach(val => {
//     output += JSON.stringify(movieData);
// });
// document.getElementById("demo").innerHTML = (output);

// for (var key in movies) {
//     for (var key2 in movies[key]) {
//       console.log(key, key2, movies[key][key2]);
//     }
//   }



//   const iterate = (movies) => {
//     Object.keys(movies).forEach(key => {

//     console.log(`key: ${key}, value: ${obj[key]}`)

//     if (typeof movies[key] === 'object' && movies[key] !== null) {
//             iterate(movies[key])
//         }
//     })
// }


// for (var key in movies) {
//     for (var key2 in movies[key]) {
//         for (var key3 in movies[key]) {
//             console.log(key3, movies[key][key3]);
//         }
//     }

//     function printValues(movies) {
//         for (var key in movies) {
//             if (typeof movies[key] === "object") {
//                 printValues(movies[keys]);
//             } else {
//                 console.log(movies[key]);
//             }
//         }
//     }

//     for (var key in movies) {
//         if (typeof movies[key] === "object") {
//             printValues(movies[keys]);
//         } else {
//             console.log(movies[key]);
//         }
//     }


// Object.values(movies).forEach((value) => {
//     console.log(value.plot)
// })

// Object.values(movies).forEach((value) => {
//     console.log(value.runtime)
// })

// Object.values(movies).forEach((value) => {
//     console.log(value.rating)
// })

// Object.values(movies).forEach((value) => {
//     console.log(value.year)
// })

// // Using AJAX?

// function iterate(movies) {
//     if (typeof movies === 'string)') {
//         $('#log').append((movies + '</br>'));
//     }
//     if (typeof movies === 'object') {
//         $.each(movies, function (key, value) {
//             iterate(value)
//         });
//     }
// }

// function printValues(obj) {
//     for (var key in obj) {
//         console.log(key)
//         if (typeof obj[key] === "object") {
//             printValues(obj[key]);
//         } else {
//             console.log(obj[key]);
//         }
//     }
// }







// function printValues(obj) {
//     for (var i in movies) {
//         document.write("<strong>" + i + ": </strong></br>");
//         for (var key in movies[i]) {
//             document.write(key + ": " + movies[i][key] + "</br>");
//         }
//     }
// }

// printValues();

var movieArr = Object.entries(movies);
// console.log(movieArr);

// ------------------------------------------------------

// function printArray(arr) {
//     if (typeof (arr) == "object") {
//         for (var i = 0; i < arr.length; i++) {
//             printArray(arr[i]);
//         }
//     }
//     else console.log(arr);
// }

// printArray(movieArr)

// ------------------------------------------------------

// function movieDatabase() {
//     for (let i = 0; i < movieArr.length; i++) {
//         for (let j in movieArr[i]) {
//             document.write(j + ": " + movieArr[i][j] + "<br>");
//         }
//     }
// };

// movieDatabase(movieArr);


// ------------------------------------------------------

// function printMovies(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr[i].length; j++) {
//             console.log(arr[i][0]);
//             console.log(arr[i][j].plot);
//             console.log(arr[i][j].rating);
//             console.log(arr[i][j].runtime);
//             console.log(arr[i][j].year);
//         }
//     }
// }

// function printMovies(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i][1]);
//     }
// }

// ------------------------------------------------------
// FINAL! Like for Real real

// function printMovies(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr[i].length; j++) {
//             document.write(`<strong>${arr[i][0]}</strong>: </br>`);
//             document.write(`${arr[i][j].year} </br>`);
//             document.write(`${arr[i][j].rating} </br>`);
//             document.write(`${arr[i][j].runtime} </br>`);
//             document.write(`${arr[i][j].plot} </br>`);
//         }
//     }
// }

// function printMovies(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr[i].length; j++) {
//             document.write('<tr>');
//             document.write('<td>' + arr[i][0] + '</td>');
//             document.write(`<td>${arr[i][j].year}</td>`);
//             document.write(`<td>${arr[i][j].rating}</td>`);
//             document.write(`<td>${arr[i][j].runtime} mins</td>`);
//             document.write('</tr>');
//             document.write('<tr>');
//             document.write(`<td colspan="4" class="plot">${arr[i][j].plot}</td>`);
//             document.write('</tr>');
//         }
//     }
// }

// printMovies(movieArr);

/* <table>
            <!-- Title, Plot, Rating, Runtime, Year -->
            <tr>
                <th class="title">Title</th>
                <th class="year">Year</th>
                <th class="rating">Rating</th>
                <th class="runtime">Runtime</th>
            </tr>
            <tr>
                <td colspan="4" class="plot"></td>
            </tr>
        </table> */


// ------------------------------------------------------

