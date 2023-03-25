//movie object
let movies = {
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
        cast: ["George Clooney", "Meryl Streep", "Bill Murray", "Jason Schwartzman"],
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

// ------------------------------------------------------
//Object to an interable array

var movieArr = Object.entries(movies);
// console.log(movieArr);

// ------------------------------------------------------
// iterate over array

// function printMovies(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr[i].length; j++) {
//             console.log(arr[i][0]);
//             console.log(arr[i][j].year);
//             console.log(arr[i][j].rating);
//             console.log(arr[i][j].runtime);
//             console.log(arr[i][j].plot);
//             console.log(arr[i][j].cast);
//         }
//     }
// }


// printMovies(movieArr);

// ------------------------------------------------------
// create table body
var k = '<tbody>'
var snippet;
function generateTable(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
            k += '<tr>';
            k += '<td><strong>' + arr[i][0] + '</strong></td>';
            k += '<td>' + arr[i][j].year + '</td>';
            k += '<td><img src="media/star.png" alt="rating star">&nbsp' + arr[i][j].rating + '</td>';
            k += '<td>' + arr[i][j].runtime + ' mins</td>';
            k += '<td rowspan="3"><button class="edit">View/Edit</button></td>';
            k += '<td rowspan="3"><button class="delete">Delete</button></td>';
            k += '</tr>';
            k += '<tr>';
            var plot = arr[i][j].plot;
            // JS Slice function on plot
            snippet = plot.slice(0, 50) + '...';
            k += '<td colspan="4"class="plot">' + snippet + '</td>';
            k += '</tr>';
            k += '<tr>';
            k += '<td colspan="4" class="cast"><strong>Starring: </strong>' + arr[i][j].cast.join(", ") + '</td>';
            k += '</tr>';
            k += '</tbody>';
            document.getElementById('tableData').innerHTML = k;
        }
    }
}
generateTable(movieArr);


// ------------------------------------------------------
// add movie

var addMovieBtn = document.querySelector(".addMovieBtn");
var popupBox = document.querySelector(".popup-box");
var closeBtn = document.querySelector(".uil-times");
var title, plot, cast, runtime, year;

addMovieBtn.addEventListener("click", () => {
    popupBox.classList.toggle("show");
})

closeBtn.addEventListener("click", () => {
    popupBox.classList.toggle("show");
})

function addNewMovie() {
    var title = document.getElementById("title").value;
    var plot = document.getElementById("plot").value;
    var cast = document.getElementById("cast").value;
    var runtime = document.getElementById("runtime").value;
    var rating = document.getElementById("rating").value;
    var year = document.getElementById("year").value;
    var newMovie = [
        title, {
            "plot": plot,
            "cast": [cast],
            "runtime": runtime,
            "rating": rating,
            "year": year,
        }
    ];
    var newMovieArr = movieArr.push(newMovie);
    // console.log(movieArr);

    var tableRow = document.getElementById("tableData");
    var row = document.createElement("tr");
    var row2 = document.createElement("tr");
    var row3 = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");
    var cell7 = document.createElement("td");
    var cell8 = document.createElement("td");
    cell1.innerHTML = '<strong>' + title + '</strong>';
    cell2.innerHTML = year;
    cell3.innerHTML = '<img src="media/star.png" alt="rating star">&nbsp' + rating;
    cell4.innerHTML = runtime + ' mins';
    cell5.innerHTML = '<button class="edit">View/Edit</button>';
    cell6.innerHTML = '<button class="delete">Delete</button>';
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    tableRow.appendChild(row);
    cell7.innerHTML = plot;
    tableRow.appendChild(row2);
    cell8.innerHTML = '<strong>Starring: </strong>' + cast;
    tableRow.appendChild(row3);

    popupBox.classList.toggle("show");
}

// var newMovie = [
//     "Marie Antoinette", {
//         "plot": "An Austrian teenager marries the Dauphin of France and becomes that country's queen following the death of King Louis XV in 1774. Years later, after a life of luxury and privilege, Marie Antoinette loses her head during the French Revolution.",
//         "cast": ["Kirsten Dunst", "Jason Schwartzman", "Rose Byrne"],
//         "runtime": 118,
//         "rating": 6.5,
//         "year": 2006,
//     }
// ];

// ------------------------------------------------------
// edit movie

// ------------------------------------------------------
// delete movie

// const addBox = document.querySelector(".add-box"),
//     popupBox = document.querySelector(".popup-box"),
//     popupTitle = popupBox.querySelector("header p"),
//     closeIcon = popupBox.querySelector("header i"),
//     titleTag = popupBox.querySelector("input"),
//     descTag = popupBox.querySelector("textarea"),
//     addBtn = popupBox.querySelector("button");

// const months = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];
// //getting localStorage notes if exists and parsing them
// //to js object else passing an empty array to notes
// const notes = JSON.parse(localStorage.getItem("notes") || "[]");
// let isUpdate = false, updateId

// addBox.addEventListener("click", () => {
//     titleTag.focus();
//     popupBox.classList.add("show");
// });

// closeIcon.addEventListener("click", () => {
//     isUpdate = false;
//     titleTag.value = "";
//     descTag.value = "";
//     addBtn.innerText = "Add Note";
//     popupTitle.innerText = "Add a New Note";
//     popupBox.classList.remove("show");
// });

// function showNotes() {
//     document.querySelectorAll(".note").forEach(note => note.remove());
//     notes.forEach((note, index) => {
//         let liTag = `<li class="note">
//                         <div class="details">
//                             <p>${note.title}</p>
//                             <span>${note.description}</span>
//                         </div>
//                         <div class="bottom-content">
//                             <span>${note.date}</span>
//                             <div class="settings">
//                                 <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
//                                 <ul class="menu">
//                                     <li onclick="updateNote(${index}, '${note.title}', '${note.description}')"><i class="uil uil-pen"></i>Edit</li>
//                                     <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </li>`;
//         addBox.insertAdjacentHTML("afterend", liTag);
//     });
// }

// showNotes();

// function showMenu(elem) {
//     elem.parentElement.classList.add("show");
//     document.addEventListener("click", e => {
//         //removing show class from the settings menu on document click
//         if (e.target.tagName != "I" || e.target != elem) {
//             elem.parentElement.classList.remove("show");
//         }
//     })
// }

// function deleteNote(noteId) {
//     let confirmDel = confirm("Are you sure you want to delete this note?");
//     if (!confirmDel) return;
//     notes.splice(noteId, 1); //removing selected note from array/tasks
//     //saving updated notes to localStorage
//     localStorage.setItem("notes", JSON.stringify(notes));
//     showNotes();
// }

// function updateNote(noteId, title, desc) {
//     isUpdate = true;
//     updateId = noteId;
//     addBox.click();
//     titleTag.value = title;
//     descTag.value = desc;
//     addBtn.innerText = "Update Note";
//     popupTitle.innerText = "Update Note";
//     console.log(noteId, title, desc);
// }

// addBtn.addEventListener("click", e => {
//     e.preventDefault();
//     let noteTitle = titleTag.value,
//         noteDesc = descTag.value;

//     if (noteTitle || noteDesc) {
//         // getting month, day, year from the durrent date
//         let dataObj = new Date(),
//             month = months[dataObj.getMonth()],
//             day = dataObj.getDate(),
//             year = dataObj.getFullYear();

//         let noteInfo = {
//             title: noteTitle,
//             description: noteDesc,
//             date: `${month} ${day}, ${year}`
//         };
//         if (!isUpdate) {
//             notes.push(noteInfo); //adding new note to notes
//         } else {
//             isUpdate = false;
//             notes[updateId] = noteInfo; //updating specified note
//         }

//         //saving notes to localStorage
//         localStorage.setItem("notes", JSON.stringify(notes));
//         closeIcon.click();
//     }
//     showNotes();
//     // console.log(noteTitle, noteDesc);
// })

