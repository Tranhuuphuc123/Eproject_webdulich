/* map toggle part */
var modal = document.getElementById("myModal");
var mapModel = document.getElementById("mapModel");
var map = document.getElementById("map01");
var captionText = document.getElementById("caption");
mapModel.onclick = function(){
  modal.style.display = "block";
  document.body.style.overflow ="hidden";
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow ="scroll";
}
