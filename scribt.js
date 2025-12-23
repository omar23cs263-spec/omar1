const themeBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Dark / Light toggle
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeIcon.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});

// Click-to-toggle for hover sections (works on mobile)
const toggleSections = document.querySelectorAll(".hover-section");

toggleSections.forEach(section => {
    section.addEventListener("click", () => {
        section.classList.toggle("active");
    });
});