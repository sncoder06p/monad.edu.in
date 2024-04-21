function validateEnrollmentNumber() {
    var enrollmentNumber = document.getElementById("enrollment_number").value;
    // Example validation: Check if the enrollment number is "123456"
    if (enrollmentNumber === "2300087") {
        return true; // Allow form submission
    } else {
        document.getElementById("error-message").style.display = "block"; // Display error message
        return false; // Prevent form submission
    }
}