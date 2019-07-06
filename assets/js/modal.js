// Get the modal
var neftmodal = document.getElementById('neft');
var cashmodal = document.getElementById('cash');
var upimodal = document.getElementById('upi');

// When the user clicks the button, open the modal 
function neftModal() {
	neftmodal.style.display = "block";
}

function cashModal(){
	cashmodal.style.display = "block";
}

function upiModal(){
	upimodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(){
    neftmodal.style.display = "none";
    cashmodal.style.display = "none";
    upimodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == neftmodal || event.target == cashmodal || event.target == upimodal) {
        neftmodal.style.display = "none";
        cashmodal.style.display = "none";
        upimodal.style.display = "none";
    }
}
