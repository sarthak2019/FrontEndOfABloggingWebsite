var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");

var btn = document.getElementById("myBtn1");
var btn1 = document.getElementById("myBtn2");

var clssignin = document.getElementsByClassName("close")[0];
var clssignup = document.getElementsByClassName("close")[1];

btn.onclick = function() {

  modal.style.display = "block";
  
}

btn1.onclick = function() {

  modal1.style.display = "block";
  
}

clssignup.onclick = function(){
    document.getElementById('fullname').value = "";
    document.getElementById('signupusername').value = "";
    document.getElementById('signuppassword').value = "";
    document.getElementById('confirmpassword').value = "";
    modal.style.display = "none";

}

clssignin.onclick = function(){

    document.getElementById('signinusername').value = "";
    document.getElementById('signinpassword').value = "";
    modal1.style.display = "none";

}

function signUp(){

  modal1.style.display = "none";
  modal.style.display = "block";

}