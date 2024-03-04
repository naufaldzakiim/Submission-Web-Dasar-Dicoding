const button = document.getElementById("switch");
const navBar = document.getElementById("navBar");
const profile = document.getElementById("profile");
const content = document.getElementById("content");
const credits = document.getElementById("credits");

button.addEventListener("click", function(){
    navBar.classList.toggle("glass-card");
    profile.classList.toggle("glass-card");
    content.classList.toggle("glass-card");
    credits.classList.toggle("glass-card");

    navBar.classList.toggle("alter-glass-card");
    profile.classList.toggle("alter-glass-card");
    content.classList.toggle("alter-glass-card");
    credits.classList.toggle("alter-glass-card");
});