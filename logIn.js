document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate mobile number
        const mobileNumberInput = document.getElementById('name');
        const mobileNumberValue = mobileNumberInput.value.trim();
        const mobileError = document.getElementById('mobileError');

        if (mobileNumberValue === '') {
            mobileError.textContent = '*Please enter your mobile number.';
            return;
        } else if (!/^\d{10}$/.test(mobileNumberValue)) {
            mobileError.textContent = '*Please enter a valid 10-digit mobile number.';
            return;
        } else {
            mobileError.textContent = ''; // Clear the error message
        }

        // Validate password
        const passwordInput = document.getElementById('password');
        const passwordValue = passwordInput.value;
        const passwordError = document.getElementById('passwordError');

        if (passwordValue === ''){
            passwordError.textContent = '*Enter your Password';
            return;
        } else {
            passwordError.textContent = ''; // Clear the error message
        }

        
    });

    // Add event listener to the mobile number input for numeric-only input
    const mobileNumberInput = document.getElementById('name');
    mobileNumberInput.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    // Add event listener to the eye icon for toggling password visibility
    const togglePassword = document.querySelector('.toggle');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Change the eye icon based on the password visibility
        togglePassword.classList.toggle('fa-eye-slash', type === 'password');
        togglePassword.classList.toggle('fa-eye', type === 'text');
    });
});
