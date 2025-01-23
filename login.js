document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card-inner');
    const showSignupButton = document.getElementById('showSignup');
    const showLoginButton = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    const patterns = {
        username: /^[a-zA-Z0-9_]{3,20}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    };
    showSignupButton.addEventListener('click', (e) => {
            e.preventDefault();
        card.style.transform = 'rotateY(180deg)';
        });

    showLoginButton.addEventListener('click', (e) => {
        e.preventDefault();
        card.style.transform = 'rotateY(0deg)';
    });

    function validateInput(input, pattern) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        
        if (!input.value) {
            formGroup.classList.add('error');
            errorMessage.textContent = 'This field is required';
            return false;
        }
        
        if (pattern && !pattern.test(input.value)) {
            formGroup.classList.add('error');
            errorMessage.textContent = getErrorMessage(input.name);
            return false;
        }

        formGroup.classList.remove('error');
        errorMessage.textContent = '';
        return true;
    }

    function getErrorMessage(inputName) {
        const messages = {
            username: 'Username must be 3-20 characters long and can contain letters, numbers, and underscores',
            email: 'Please enter a valid email address',
            password: 'Password must be at least 8 characters long and contain at least one letter and one number',
            confirmPassword: 'Passwords do not match'
        };
        return messages[inputName] || 'Invalid input';
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        const isUsernameValid = validateInput(username, patterns.username);
        const isPasswordValid = validateInput(password, patterns.password);
        if (isUsernameValid && isPasswordValid) {
            console.log('Login successful');
            loginForm.reset();
        }
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername');
        const email = document.getElementById('email');
        const newPassword = document.getElementById('newPassword');
        const confirmPassword = document.getElementById('confirmPassword');

        const isUsernameValid = validateInput(newUsername, patterns.username);
        const isEmailValid = validateInput(email, patterns.email);
        const isPasswordValid = validateInput(newPassword, patterns.password);
        const isConfirmValid = validateInput(confirmPassword);
        if (newPassword.value !== confirmPassword.value) {
            validateInput(confirmPassword);
            return;
        }

        if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid) {
            console.log('Signup successful');
            signupForm.reset();
            card.style.transform = 'rotateY(0deg)';
        }
    });

    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('.form-group').classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.closest('.form-group').classList.remove('focused');
        }
        });

        input.addEventListener('input', () => {
            if (input.value) {
                validateInput(input, patterns[input.name]);
            }
    });
});
});
// JavaScript to handle form submission and redirection
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your validation logic here
    window.location.href = 'main.html'; // Redirect to main page
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your validation logic here
    alert('Sign up successful!');
});

// Toggle between login and signup forms
document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
});