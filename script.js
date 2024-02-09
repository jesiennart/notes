const cross = document.querySelector(".fa-xmark");
const addNotes = document.querySelector(".add-note");
const deleteBtn = document.querySelector(".delete");
const addBtn = document.querySelector(".add");
const popup = document.querySelector(".popup");
const noteType = document.querySelector("#noteType");
const note = document.querySelector("#text-note");
const error = document.querySelector(".error");
const notes = document.querySelector(".notes");
const icon = document.querySelector(".cross");

const showPopup = () => {
  popup.style.visibility = "visible";
};
const hidePopup = () => {
  popup.style.visibility = "hidden";
};
const noteError = () => {
  if (note.value === "" || noteType.value === '') {
    error.style.display = "block";
    error.textContent = "Create note and choose type of note!";
  } else {
    error.style.display = "none";
    addNewNote();
  }
};

const addNewNote = () => {

    const divNote = document.createElement('div');
    divNote.classList.add('container');
  
    const noteTittle = document.createElement('p');
    noteTittle.classList.add('type');
    noteTittle.innerHTML = noteType.value;
  
    const noteText = document.createElement('p');
    noteText.classList.add('text');
    noteText.innerHTML = note.value;

    const icon = document.createElement('button')
    icon.classList.add('cross')
    icon.innerHTML = 'X'
    divNote.appendChild(icon)
  
    divNote.appendChild(noteTittle);
    divNote.appendChild(noteText);
    notes.appendChild(divNote);

    const delNote = () => {
        notes.removeChild(divNote)
    }
icon.addEventListener("click", delNote);
  
    noteType.value = '';
    note.value = '';
  
    hidePopup();

};

const deleteNotes = () => {
    const container = document.querySelectorAll('.container')
    container.forEach(element => {
        element.remove();
    });
    
}

addNotes.addEventListener("click", showPopup);
cross.addEventListener("click", hidePopup);
addBtn.addEventListener("click", noteError);
deleteBtn.addEventListener("click", deleteNotes);

