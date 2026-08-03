const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("studyFlowTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
        localStorage.setItem("studyFlowTheme", "dark");
    } else {
        themeButton.textContent = "Dark Mode";
        localStorage.setItem("studyFlowTheme", "light");
    }
});