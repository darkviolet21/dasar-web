
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var x = document.getElementById("swab");
  if (x.innerHTML === "Light Mode") {
    x.innerHTML = "Dark Mode";
  } else {
    x.innerHTML = "Light Mode";
  }
}
