const courseName = document.getElementById("courseName");
const creditHours = document.getElementById("creditHours");
const gradeInput = document.getElementById("gradeInput");
const addCourseButton = document.getElementById("addCourseButton");
const courseList = document.getElementById("courseList");
const gpaResult = document.getElementById("gpaResult");

let courses = JSON.parse(localStorage.getItem("studyFlowCourses")) || [];

function saveCourses() {
    localStorage.setItem("studyFlowCourses", JSON.stringify(courses));
}

function calculateGPA() {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    courses.forEach(function (course) {
        totalGradePoints += course.gradePoints * course.creditHours;
        totalCreditHours += course.creditHours;
    });

    if (totalCreditHours === 0) {
        gpaResult.textContent = "0.00";
        return;
    }

    const gpa = totalGradePoints / totalCreditHours;

    gpaResult.textContent = gpa.toFixed(2);
}

function displayCourses() {
    courseList.innerHTML = "";

    if (courses.length === 0) {
        courseList.innerHTML =
            '<p class="empty-message">No courses added yet.</p>';

        calculateGPA();
        return;
    }

    courses.forEach(function (course, index) {
        const courseCard = document.createElement("div");

        courseCard.classList.add("course-card");

        courseCard.innerHTML = `
            <div>
                <h3>${course.name}</h3>
                <p>
                    Credit Hours: ${course.creditHours}
                    |
                    Grade: ${course.grade}
                </p>
            </div>

            <button onclick="deleteCourse(${index})">
                Delete
            </button>
        `;

        courseList.appendChild(courseCard);
    });

    calculateGPA();
}

function deleteCourse(index) {
    courses.splice(index, 1);

    saveCourses();
    displayCourses();
}

addCourseButton.addEventListener("click", function () {
    const name = courseName.value.trim();
    const credits = Number(creditHours.value);
    const selectedOption =
        gradeInput.options[gradeInput.selectedIndex];

    const gradePoints = Number(gradeInput.value);
    const gradeName = selectedOption.text;

    if (
        name === "" ||
        credits < 1 ||
        credits > 6 ||
        gradeInput.value === ""
    ) {
        alert("Please enter valid course details.");
        return;
    }

    const newCourse = {
        name: name,
        creditHours: credits,
        grade: gradeName,
        gradePoints: gradePoints
    };

    courses.push(newCourse);

    saveCourses();
    displayCourses();

    courseName.value = "";
    creditHours.value = "";
    gradeInput.value = "";
});

displayCourses();