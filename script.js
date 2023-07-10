document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    var errorMessages = [];

    // Username validation
    if (username.length < 8) {
        errorMessages.push("Username must be at least 8 characters long.");
        document.getElementById('usernameError').innerText = "Username must be at least 8 characters long.";
    } else {
        document.getElementById('usernameError').innerText = "";
    }

    // Password validation
    if (password.length < 8) {
        errorMessages.push("Password must be at least 8 characters long.");
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters long.";
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    // First Name validation
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        errorMessages.push("First Name should contain only alphabets.");
        document.getElementById('firstNameError').innerText = "First Name should contain only alphabets.";
    } else {
        document.getElementById('firstNameError').innerText = "";
    }

    // Last Name validation
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        errorMessages.push("Last Name should contain only alphabets.");
        document.getElementById('lastNameError').innerText = "Last Name should contain only alphabets.";
    } else {
        document.getElementById('lastNameError').innerText = "";
    }

    // Date of Birth validation
    if (!isValidDate(dob)) {
        errorMessages.push("Invalid Date of Birth.");
        document.getElementById('dobError').innerText = "Invalid Date of Birth.";
    } else {
        document.getElementById('dobError').innerText = "";
    }

    // Email validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        errorMessages.push("Invalid Email address.");
        document.getElementById('emailError').innerText = "Invalid Email address.";
    } else {
        document.getElementById('emailError').innerText = "";
    }

    // Phone Number validation
    if (phoneNumber.length > 0 && !/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) {
        errorMessages.push("Invalid Phone Number format. Please use XXX-XXX-XXXX format.");
        document.getElementById('phoneNumberError').innerText = "Invalid Phone Number format. Please use XXX-XXX-XXXX format.";
    } else {
        document.getElementById('phoneNumberError').innerText = "";
    }

    if (errorMessages.length === 0) {
        displaySuccessMessage();
    }
}

function isValidDate(dateString) {
    var pattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!pattern.test(dateString)) {
        return false;
    }

    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        return false;
    }

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    }

    return day > 0 && day <= monthLength[month - 1];
}

function displaySuccessMessage() {
    alert("Registration Successful!");
}
