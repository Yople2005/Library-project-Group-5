// Get the modal and other elements
var modal = document.getElementById("myModal");
var btn = document.getElementById("openPopupBtn");
var span = document.getElementsByClassName("close-sign-in")[0];
var adminAccess = document.getElementById("adminAccess");
var backToUserForm = document.getElementById("backToUserForm");
var userForm = document.getElementById("userForm");
var adminForm = document.getElementById("adminForm");

// Predefined values
const ADMIN_USERNAME = "apple";
const ADMIN_PASSWORD = "fruit";
const ACCESS_CODE = "HmawbiTu";

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    showUserForm();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle admin access link click
adminAccess.onclick = function() {
    showAdminForm();
}

// Handle back to user form link click
backToUserForm.onclick = function() {
    showUserForm();
}

// Show user form
function showUserForm() {
    userForm.style.display = "block";
    adminForm.style.display = "none";
}

// Show admin form
function showAdminForm() {
    userForm.style.display = "none";
    adminForm.style.display = "block";
}

// Handle user form submission
// Handle user form submission
function emailSend() {
    var accessCode = document.getElementById('accessCode').value;

    if (accessCode === ACCESS_CODE) {
        // Show success message with link
        swal({
            title: "Successful",
            text: "You can now access to Innovative E-Library:",
            icon: "success",
            buttons: {
                cancel: "Close",
                confirm: {
                    text: "Go to E-Library",
                    value: true,
                    visible: true,
                    closeModal: true
                }
            }
        }).then((willRedirect) => {
            if (willRedirect) {
                window.open("https://innovative-library-book-list.netlify.app/", "_blank");
            }
        });
    } else {
        // Show error message
        swal("Error", "Invalid access code!", "error");
    }
}

// Handle admin login
// Handle admin login
function adminLogin() {
    var username = document.getElementById('adminUsername').value;
    var password = document.getElementById('adminPassword').value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Show success message with link
        swal({
            title: "Successful",
            text: "You can now access the admin page:",
            icon: "success",
            buttons: {
                cancel: "Close",
                confirm: {
                    text: "Go to Admin Page",
                    value: true,
                    visible: true,
                    closeModal: true
                }
            }
        }).then((willRedirect) => {
            if (willRedirect) {
                window.open("https://example.com", "_blank");
            }
        });
    } else {
        // Show error message
        swal("Error", "Invalid username or password!", "error");
    }
}