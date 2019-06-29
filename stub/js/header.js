// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2")

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");
var btn1 = document.getElementById("myBtn2");
var btn2 = document.getElementById("cpost");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var cls = document.getElementById("closepost");
var clssignin = document.getElementById("csignin");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

cls.onclick = function(){
    modal2.style.display = "none";
}

clssignin.onclick = function(){
    modal1.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal1) {
    modal1.style.display = "none";
  }

}

function SignUp(){
  
  modal1.style.display = "none";
  modal.style.display = "block";
}