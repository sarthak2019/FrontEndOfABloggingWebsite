var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("cpost");
var cls = document.getElementById("closepost");
btn2.onclick = function() {
  modal2.style.display = "block";
}

cls.onclick = function(){
  modal2.style.display = "none";
}