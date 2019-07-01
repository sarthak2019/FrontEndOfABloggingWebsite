//Get createpost modal
var modal2 = document.getElementById("myModal2");
// Get the signup modal
var modal = document.getElementById("myModal");

// Get the signin modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn2 = document.getElementById("cpost");

// Get the <span> element that closes the modal
var cls = document.getElementById("closepost");

// When the user clicks the button, open the modal 
btn2.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cls.onclick = function () {
  document.getElementById('title').value = "";
  document.getElementById('content-post').value = "";
  modal2.style.display = "none";
}

//when the user click on All posts button, should redirect to bloglist
var allpostsbtn = document.getElementById("all-posts-btn");
allpostsbtn.onclick = function () {
  window.location.href = "html/bloglist.html";
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

  else if (event.target == modal2) {
    document.getElementById('title').value = "";
    document.getElementById('content-post').value = "";
    modal2.style.display = "none";
  }
}