const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// 1. عند تحميل الصفحة: تحقق هل المستخدم اختار الوضع الليلي سابقاً؟
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // 2. تحديث الشكل وتخزين الاختيار في ذاكرة المتصفح
    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark"); // حفظ الوضع الليلي
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light"); // حفظ الوضع الفاتح
    }
});
