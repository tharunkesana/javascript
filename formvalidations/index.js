document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const pincode = document.getElementById('pincode').value;
    const number = document.getElementById('number').value;

    
    if (firstname.length > 7) {
        document.getElementById('firstnameError').textContent = 'First name should not be more than 7 characters';
    }

    
    if (lastname.length > 7) {
        document.getElementById('lastnameError').textContent = 'Last name should not be more than 7 characters';
    }

    
    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email';
    }

    
    if (pincode.length > 7) {
        document.getElementById('pincodeError').textContent = 'Pincode should not exceed more than 7 characters';
    }

    
    const numberPattern = /^\d+$/;
    if (!numberPattern.test(number)) {
        document.getElementById('numberError').textContent = 'Invalid number';
    }

    
    if (
        firstname.length <= 7 &&
        lastname.length <= 7 &&
        emailPattern.test(email) &&
        pincode.length <= 7 &&
        numberPattern.test(number)
    ) {
        alert('Form submitted successfully!');
    
    }
});