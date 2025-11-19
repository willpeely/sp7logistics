// Smooth scroll for CONTACT button
document.getElementById("contact-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
});
