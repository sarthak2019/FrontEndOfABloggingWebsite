// Get the signup modal
var modal = document.getElementById("myModal");

// Get the signin modal
var modal1 = document.getElementById("myModal1");

var btn = document.getElementById("myBtn1");
var btn1 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var clssignin = document.getElementsByClassName("close")[0];

// Get the <span> element that closes the modal1
var clssignup = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function () {

  modal.style.display = "block";

}
// When the user clicks the button, open the modal 1
btn1.onclick = function () {

  modal1.style.display = "block";

}

// When the user clicks on <span> (x),  clear the text filed values if entered and then close the modal
clssignup.onclick = function () {
  document.getElementById('fullname').value = "";
  document.getElementById('signupusername').value = "";
  document.getElementById('signuppassword').value = "";
  document.getElementById('confirmpassword').value = "";
  modal.style.display = "none";

}

// When the user clicks on <span> (x),  clear the text filed values if entered and then close the modal
clssignin.onclick = function () {

  document.getElementById('signinusername').value = "";
  document.getElementById('signinpassword').value = "";
  modal1.style.display = "none";

}

//when user clicks on signup hyperlink on signin model, should open the signup model
function signUp() {

  document.getElementById('signinusername').value = "";
  document.getElementById('signinpassword').value = "";
  modal1.style.display = "none";
  modal.style.display = "block";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    document.getElementById('fullname').value = "";
    document.getElementById('signupusername').value = "";
    document.getElementById('signuppassword').value = "";
    document.getElementById('confirmpassword').value = "";
    modal.style.display = "none";
  }
  else if (event.target == modal1) {
    document.getElementById('signinusername').value = "";
    document.getElementById('signinpassword').value = "";
    modal1.style.display = "none";
  }

}