var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");

var btn = document.getElementById("myBtn1");
var btn1 = document.getElementById("myBtn2");

var clssignup = document.getElementsByClassName("close")[0];
var clssignin = document.getElementsByClassName("close")[1];

clssignup.onclick = function(){
    modal.style.display = "none";
}

clssignin.onclick = function(){
    modal1.style.display = "none";
}