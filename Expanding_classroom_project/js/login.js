// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var loginBtn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks the login button, open the modal
loginBtn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

