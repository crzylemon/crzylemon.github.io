// Add a script to toggle the "dark" class on the body element when the switch is clicked
var toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("change", function() {
  document.body.classList.toggle("dark");
  document.getElementById("navbar").classList.toggle("dark");
  document.getElementById("navbaritem").classList.toggle("dark");
});

// Set the default mode to dark
document.body.classList.add("dark");
document.getElementById("navbar").classList.add("dark");
document.getElementById("navbaritem").classList.add("dark");
toggle.checked = true;