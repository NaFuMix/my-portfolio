const noteInput = document.getElementById('floatingTextarea2');
const addBtn = document.getElementById('addBtn');
const noteDiv = document.getElementById('notes');
const fileInput = document.getElementById('fileInput');

function loadNotes() {
  noteDiv.innerHTML = '';
  fileInput.value = '';
  const notes = JSON.parse(localStorage.getItem('myNotes') || '[]');

  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = "note";
    noteElement.innerHTML = `
      ${note.image ? `<img src="${note.image}">` : ""}
      <p>${note.text}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    noteDiv.appendChild(noteElement);
  });
}

addBtn.addEventListener('click', () => {
  const noteText = noteInput.value.trim();
  if (noteText === "" && !fileInput.files.length) return;
  if (fileInput.files.length) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const notes = JSON.parse(localStorage.getItem('myNotes') || '[]');
      notes.push({ text: noteText, image: e.target.result });
      localStorage.setItem('myNotes', JSON.stringify(notes));
      noteInput.value = '';
      fileInput.value = '';
      loadNotes();
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    const notes = JSON.parse(localStorage.getItem('myNotes') || '[]');
    notes.push({ text: noteText, image: null });
    localStorage.setItem('myNotes', JSON.stringify(notes));
    noteInput.value = '';
    loadNotes();
  }
});
 
function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem('myNotes') || '[]');
  notes.splice(index, 1);
  localStorage.setItem('myNotes', JSON.stringify(notes));
  loadNotes();
}

window.onload = loadNotes;