document.addEventListener("DOMContentLoaded", function () {

    // Contact form to Google Sheets //custom logic referred from google
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
    const form = document.forms['submitToGoogleSheet'];
    const msg = document.getElementById("msg");
  
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => {
                msg.innerHTML = "Error sending message. Please try again later.";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                console.error('Error!', error.message);
            });
    });
  
  });

  //form validation check 
  function validateForm() {
    // Check Name field for minimum length (3 characters)
    var name = document.forms["submitToGoogleSheet"]["NAME"].value;
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    // Check Email field for valid email format
    var email = document.forms["submitToGoogleSheet"]["EMAIL"].value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if Subject is provided
    var subject = document.forms["submitToGoogleSheet"]["SUBJECT"].value;
    if (subject.trim() == "") {
        alert("Subject is required.");
        return false;
    }

    // Check Message for minimum length (5 characters)
    var message = document.forms["submitToGoogleSheet"]["MESSAGE"].value;
    if (message.length < 5) {
        alert("Message must be at least 5 characters long.");
        return false;
    }

    return true; // Form is valid
}


//performed by me
function toggleNav(){
    const burger = document.getElementById("menu_icon");
    const navLinks = document.getElementById("navbar-small-screens");
    if(burger.classList.contains("hide")){
        navLinks.style.display = "block";
        burger.classList.remove("hide")
        console.log("if")
    }
    else{
        console.log("else")
        navLinks.style.display = "none";
        burger.classList.add("hide");
    }

}