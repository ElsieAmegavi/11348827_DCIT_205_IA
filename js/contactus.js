function sendContactUsForm() {

    // Get form values
    var name = document.getElementById("txt_name").value;
    var email = document.getElementById("txt_email").value;
    var phone = document.getElementById("txt_phone").value;
    var subject = document.getElementById("txt_subject").value;
    var message = document.getElementById("txt_message").value;

    // Validate required fields
    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
        alert("All fields are required. Please fill them out.");
        return;
    }


    alert("Thank you for your message. We will get in touch soon.");
}

function sendComplaintForm() {

    // Get form values
    var name = document.getElementById("txt_name").value;
    var email = document.getElementById("txt_email").value;
    var phone = document.getElementById("txt_phone").value;
    var date = document.getElementById("Date_date").value;
    var complaint = document.getElementById("txt_message").value;
    var level = document.getElementById("number_level").value;
    var id = document.getElementById("number_id").value;

    // Validate required fields
    if (name === "" || email === "" || phone === "" || date === "" || complaint === "" || id === "" || level === "") {
        alert("All fields are required. Please fill them out.");
        return;
    }

    
    alert("Thank you for your message. We will get in touch soon.");
}