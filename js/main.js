document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("side-menu").classList.toggle("open");
});

document.querySelectorAll("#side-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("side-menu").classList.remove("open");
    });
});