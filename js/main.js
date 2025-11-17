// Toggle menu
document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("side-menu").classList.toggle("open");
});

// Close + smooth scroll when clicking a menu link
document.querySelectorAll("#side-menu a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();   // STOP instant jump

        const target = document.querySelector(link.getAttribute("href"));

        // Smooth scroll
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        // Close menu
        document.getElementById("side-menu").classList.remove("open");
    });
});

// Smooth scroll for CONTACT button
document.getElementById("contact-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
});


const themeCheckbox = document.getElementById("theme-toggle-checkbox");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeCheckbox.checked = savedTheme === "dark";
}

// Toggle theme on change
themeCheckbox.addEventListener("change", () => {
    const newTheme = themeCheckbox.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});
