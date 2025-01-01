var more = document.getElementById("more");
var moreText = document.querySelector("showMore");
var btnText = document.getElementById("myBtn");

btnText.addEventListener("click", myFunction);
function myFunction(e) {
  e.preventDefault();
  if (more.style.display === "none") {
    more.style.display = "block";
  } else {
    more.style.display = "none";
  }

  /* if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = "see more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "see less"; 
    moreText.style.display = "block";
  } */
}
