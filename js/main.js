function updateYear() {
    document.getElementById("year").textContent = new Date().getFullYear().toString();
}

document.addEventListener("DOMContentLoaded", function() {
    updateYear();
});
