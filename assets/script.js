const Switch = document.getElementById("Switch");
const navBar = document.getElementById("navBar");
const profile = document.getElementById("profile");
const content = document.getElementById("content");
const credits = document.getElementById("credits");

Switch.addEventListener("click", function(){
    navBar.classList.toggle("glassCard");
    profile.classList.toggle("glassCard");
    content.classList.toggle("glassCard");
    credits.classList.toggle("glassCard");

    navBar.classList.toggle("alterGlassCard");
    profile.classList.toggle("alterGlassCard");
    content.classList.toggle("alterGlassCard");
    credits.classList.toggle("alterGlassCard");
});