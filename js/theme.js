const themeCheckbox = document.getElementById("theme-toggle-checkbox");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeCheckbox.checked = savedTheme === "dark";
} else {
    // Default theme = dark
    document.documentElement.setAttribute("data-theme", "dark");
    themeCheckbox.checked = true;
}

// Toggle theme
themeCheckbox.addEventListener("change", () => {
    const newTheme = themeCheckbox.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});
