var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var img = ["espaço.jpg", "espaço1.jpg", "espaço2.jpg", "g4.jpg"];
var b = 0;
setInterval(() => {
  const main = document.querySelector('main img');
  main.setAttribute("src", "./img/" + img[b]);
  if(b == img.length - 1){
    b = 0;
  }
  b++;
}, 3000);