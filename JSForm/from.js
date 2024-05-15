function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    // Encode form data as URL parameters
    var formData = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone) + "&dob=" + encodeURIComponent(dob);

    // Redirect to another page with form data as URL parameters
    window.location.href = "display.html?" + formData;
}