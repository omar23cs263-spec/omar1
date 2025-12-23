const themeBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeIcon.textContent =
        document.body.classList.contains("dark") ? "🌙" : "☀️";
});