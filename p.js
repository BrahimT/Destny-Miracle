showNotes()




let addBtn = document.getElementById('addBtn');




addBtn.addEventListener('click', function () {



 




    //! this function will fire 🔥 when some on will click on it 🖱️

    let addTxt = document.getElementById('addTxt'); //*  Grabbing the text area
    let notes = localStorage.getItem('notes');      //*Grabbing notes form local storage

    if (notes === null) notesObj = []; //* if the local storage  is empty than print a blank array 

    else notesObj = JSON.parse(notes) // * Otherwise print the note of the user to the console and convert it from string to array




    notesObj.push(addTxt.value);   // *pushing text of user to our local storage


    // here in LocalStorgae we will add a key and value respectivley notes and notesObj.the data type of notesObj  will be string  

    localStorage.setItem("notes", JSON.stringify(notesObj));//? now we are settting the key to 'notes'  and  the value to  note of the user





    // !Removing the written note of the user when submite/save the note
    addTxt.value = '';



    // ! Displaying notes to our DOM

    /* 
    * In order to display your notes to you Dom. you have to create a function 
    * and name whatever you want but here i will name Shownote and   
    */


    // * run the fucntion named showNotes()
    showNotes() // TODO: you can also remove this beacuse we have the same function claiing it above 

});



function showNotes() {
    // here we will use the same code which we have previously used whern we are cheaking the notes 

    let notes = localStorage.getItem("notes");
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
    // ? Now we will add our Html and CSS to each and every box which is popped out when the user add a new note




    // TODO: Note
    // *  in my   case there is no css beacuse i are use bootstrap but
    // *  you can always add a style tag inside the html.if you are
    //  * using your own style



    // ! Now we will use for each loop because user can add as many notes as he/she want 



    // ?here we will crete a blank variable name html 
    let html = ""; // undefine 

    // ? first we will grabe the note of the user 
    // ? than we will fire 🔥 for each loop 
    // ? than give it two parameter  (element and index)
    // ? and then we will finally run our function
    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p id="demo" class="card-text"> ${element}</p>
             <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });


    // !if there is no notes than display the following message otherwise sidplay nothing
    let notesElm = document.getElementById("notes");

    if (notesObj.length == 0) notesElm.innerHTML = `Nothing to show!  <strong>  Use "Add a Note" Button to add notes.</strong>`;
    else notesElm.innerHTML = html;
}

// !when some body click on 'Clear All' than clear the whole local storgae. 

let ClearAll = document.getElementById('ClearAll');
ClearAll.addEventListener('click', ClearAllFunction);

function ClearAllFunction() {
    let confirming = confirm('Are you sure')
    if (confirming === true) {
        localStorage.clear();
        location.reload();
    }
}


// ! function to delete a sepcific note

function deleteNote(index) {

    let notes = localStorage.getItem('notes');

    if (notes === null) DeletingSpecificNotesArray = [];
    else DeletingSpecificNotesArray = JSON.parse(notes)

    // and finally we will ask the user he/She is sure or note
    let confirmingForSpecificNotes = confirm('Are you sure')
    if (confirmingForSpecificNotes === true) {
        // ? here index is the specife note of the user and 1 specifies that we wnat ot delete only one note
        DeletingSpecificNotesArray.splice(index, 1)

        // ?Now i will finallly set the notes to the localstorgae
        localStorage.setItem("notes", JSON.stringify(DeletingSpecificNotesArray))

        // ? show notes will show the remaining notes
        showNotes();


      
  
    }
}





// ! Totol number of notes by the user
/*
let TotalNotes = document.getElementById('TotalNotes');
TotalNotes.innerText = `Total Number of Notes = ${notesObj.length}🙂`;
if (notesObj.length === 0)
    TotalNotes.innerText = `No notes Yet 😔 `;

*/
// ! filter Search 

// so to so we will use input event listiner

let search = document.getElementById('searchTxt');

search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase(); // Grabbbing the search box
    let noteCard = document.getElementsByClassName('noteCard'); // Grabbing the note by the user/Grabbing all the classes from NoteCards 
    let HighLight = document.getElementById('demo')
                                           
    Array.from(noteCard).forEach(function (document) {
        let cardTxt = document.getElementById("demo").innerText;
        // if the serach include the same text than dispaly it otherwise dont display it 
        if (cardTxt.includes(inputVal)) {
            document.style.display = "block";
            HighLight.style.background = "orange";
        }
        else document.style.display = "none"
    })


});