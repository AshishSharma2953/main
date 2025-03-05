document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const mobileNumberInput = document.getElementById('mobile-number');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const mobileError = document.getElementById('mobileError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const showPasswordCheckbox = document.getElementById('showPasswordCheckbox');

    // Function to validate mobile number
    function validateMobileNumber() {
        const mobileNumber = mobileNumberInput.value.trim();
        mobileError.textContent = '';
        if (mobileNumber === '') {
            mobileError.textContent = '* Mobile number cannot be empty';
            return false;
        } else if (!/^\d{10}$/.test(mobileNumber)) {
            mobileError.textContent = '* Please enter a valid 10-digit mobile number';
            return false;
        }
        return true;
    }

    // Function to validate password
    function validatePassword() {
        const password = passwordInput.value.trim();
        passwordError.textContent = '';
        if (password === '') {
            passwordError.textContent = '* Please enter a password';
            return false;
        }
        return true;
    }

    // Function to validate confirm password
    function validateConfirmPassword() {
        const confirmPassword = confirmPasswordInput.value.trim();
        confirmPasswordError.textContent = '';
        if (confirmPassword === '') {
            confirmPasswordError.textContent = '* Please confirm your password';
            return false;
        } else if (confirmPassword !== passwordInput.value.trim()) {
            confirmPasswordError.textContent = '* Passwords do not match';
            return false;
        }
        return true;
    }

    // Function to toggle show password
    function toggleShowPassword() {
        const isChecked = showPasswordCheckbox.checked;
        if (isChecked) {
            passwordInput.type = 'text';
            confirmPasswordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
            confirmPasswordInput.type = 'password';
        }
    }

    // Function to handle keypress event for mobile number input
    function handleMobileNumberKeyPress(event) {
        // Allowing only digits (0-9) in the input
        const charCode = event.charCode;
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    }

    // Adding input event listener to mobile number input field for real-time validation
    mobileNumberInput.addEventListener('input', validateMobileNumber);
    // Adding keypress event listener to mobile number input field to prevent non-digit characters
    mobileNumberInput.addEventListener('keypress', handleMobileNumberKeyPress);

    // Add event listeners for real-time validation
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);

    // Add event listener for show password checkbox
    showPasswordCheckbox.addEventListener('click', toggleShowPassword);

    // Add submit event listener for final validation before form submission
    form.addEventListener('submit', function (event) {
        // Validate all fields
        const mobileValid = validateMobileNumber();
        const passwordValid = validatePassword();
        const confirmPasswordValid = validateConfirmPassword();

        // Check for empty fields and display error messages
        if (!mobileValid) {
            mobileError.textContent = '* Mobile number cannot be empty';
        }
        if (!passwordValid) {
            passwordError.textContent = '* Please enter a password';
        }
        if (!confirmPasswordValid) {
            confirmPasswordError.textContent = '* Please confirm your password';
        }

        // Prevent form submission if any field is empty or if any validation fails
        if (!mobileValid || !passwordValid || !confirmPasswordValid) {
            event.preventDefault();
        }
    });
});

