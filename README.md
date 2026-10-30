# StudyFlow

A student-focused academic planner that runs entirely in the browser. It brings tasks, a weekly timetable, notes, a GPA calculator and a focus timer into one responsive website, with no backend or installation.

Started as a first-semester ICT project and later redesigned with a cleaner interface and more features.

## Features

| Page | What it does |
|------|--------------|
| **Home** | Overview of the app and a 25-minute Pomodoro focus timer with start, pause and reset |
| **Tasks** | Add, complete and delete tasks; saved in the browser with LocalStorage |
| **Timetable** | Weekly class schedule view |
| **Notes** | Write and save notes, see a live word count, and download a note as a `.txt` file |
| **GPA** | Add courses with grade and credit hours; GPA is calculated as total grade points weighted by credit hours |
| **About** | Project information |

Also included: dark and light theme (your choice is remembered) and a layout that adapts to phones and desktops.

## Built With

- HTML5
- CSS3 (responsive layout, theme styling)
- Vanilla JavaScript (DOM manipulation, `setInterval` for the timer, event handling)
- Browser LocalStorage for saving tasks, notes, courses and theme

## Run It

No build step is needed.

```bash
git clone https://github.com/tatheerfatimaofficial08-rgb/StudyFlow.git
cd StudyFlow
```

Then open `index.html` in any browser.

## Project Structure

```text
StudyFlow/
├── index.html
├── tasks.html
├── timetable.html
├── notes.html
├── gpa.html
├── about.html
├── css/
│   └── style.css
└── js/
    ├── main.js      # theme toggle
    ├── timer.js     # Pomodoro timer
    ├── tasks.js     # task planner
    ├── notes.js     # notes, word count, download
    └── gpa.js       # GPA calculator
```

## Notes

Data is stored only in your own browser (LocalStorage), so it stays private but is not synced between devices, and clearing browser data removes it.

## Author

Tatheer Fatima, BS Computer Science student, Air University Multan
