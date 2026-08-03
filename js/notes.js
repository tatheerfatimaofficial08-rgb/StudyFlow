const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const wordCount = document.getElementById("wordCount");
const saveNoteButton = document.getElementById("saveNoteButton");
const downloadNoteButton = document.getElementById("downloadNoteButton");
const savedNotes = document.getElementById("savedNotes");

let notes = JSON.parse(localStorage.getItem("studyFlowNotes")) || [];

function updateWordCount() {
    const text = noteContent.value.trim();

    if (text === "") {
        wordCount.textContent = "Words: 0";
        return;
    }

    const words = text.split(/\s+/);
    wordCount.textContent = `Words: ${words.length}`;
}

function saveNotesToLocalStorage() {
    localStorage.setItem("studyFlowNotes", JSON.stringify(notes));
}

function displayNotes() {
    savedNotes.innerHTML = "";

    if (notes.length === 0) {
        savedNotes.innerHTML =
            '<p class="empty-message">No notes saved yet.</p>';
        return;
    }

    notes.forEach(function (note, index) {
        const noteCard = document.createElement("div");
        noteCard.classList.add("saved-note-card");

        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>

            <div class="note-actions">
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        `;

        savedNotes.appendChild(noteCard);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotesToLocalStorage();
    displayNotes();
}

saveNoteButton.addEventListener("click", function () {
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();

    if (title === "" || content === "") {
        alert("Please enter note title and content.");
        return;
    }

    const newNote = {
        title: title,
        content: content
    };

    notes.push(newNote);

    saveNotesToLocalStorage();
    displayNotes();

    noteTitle.value = "";
    noteContent.value = "";
    updateWordCount();
});

downloadNoteButton.addEventListener("click", function () {
    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();

    if (title === "" || content === "") {
        alert("Please write a note before downloading.");
        return;
    }

    const noteText = `${title}\n\n${content}`;

    const file = new Blob([noteText], {
        type: "text/plain"
    });

    const downloadLink = document.createElement("a");

    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = `${title}.txt`;

    downloadLink.click();

    URL.revokeObjectURL(downloadLink.href);
});

noteContent.addEventListener("input", updateWordCount);

displayNotes();
updateWordCount();