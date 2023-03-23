function clickPerson() {
    var x = event.clientX;
    var y = event.clientY;
    // document.getElementById("coord").innerHTML = "X,Y:" + x + ", " + y;
    var clockx1 = 385;
    var clocky1 = 196;
    var clockx2 = 478;
    var clocky2 = 495;
    if(x >= clockx1 && x <= clockx2 && y >= clocky1 && y <= clocky2) {
        // window.alert("You found the clock!");
        // document.getElementById("clock").style.color = "green";

    }
}
function clearstuff() {
    document.getElementById("coord").innerHTML = "X,Y:";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}