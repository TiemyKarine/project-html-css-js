 document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');
    const termsInput = document.getElementById('terms');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const strengthMeter = document.getElementById('strengthMeter');
    const signupBtn = document.getElementById('signupBtn');
    const toast = document.getElementById('toast');

    const errors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        password: document.getElementById('passwordError'),
        confirmPassword: document.getElementById('confirmError'),
    };

    // Show/hide password
    togglePasswordBtn.addEventListener('click', () => {
        const isHidden = passwordInput.type === 'password';
        passwordInput.type = isHidden ? 'text' : 'password';
        togglePasswordBtn.textContent = isHidden ? '🙈' : '👁️';
        togglePasswordBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    });

    // Password strength meter
    function getStrength(value) {
        let score = 0;
        if (value.length >= 8) score++;
        if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
        if (/\d/.test(value) && /[^A-Za-z0-9]/.test(value)) score++;
        return score; // 0-3
    }

    passwordInput.addEventListener('input', () => {
        const score = getStrength(passwordInput.value);
        strengthMeter.classList.remove('weak', 'medium', 'strong');
        if (passwordInput.value.length === 0) {
            // no class, empty bars
        } else if (score <= 1) {
            strengthMeter.classList.add('weak');
        } else if (score === 2) {
            strengthMeter.classList.add('medium');
        } else {
            strengthMeter.classList.add('strong');
        }
        clearError('password');
    });

    function setError(field, message) {
        errors[field].textContent = message;
        document.getElementById(field === 'confirmPassword' ? 'confirmPassword' : field).classList.add('invalid');
    }

    function clearError(field) {
        errors[field].textContent = '';
        const el = document.getElementById(field === 'confirmPassword' ? 'confirmPassword' : field);
        if (el) el.classList.remove('invalid');
    }

    [nameInput, emailInput, passwordInput, confirmInput].forEach((input) => {
        input.addEventListener('input', () => clearError(input.name === 'confirmPassword' ? 'confirmPassword' : input.name));
    });

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function validate() {
        let valid = true;

        if (nameInput.value.trim().length < 2) {
            setError('name', 'Please enter your name.');
            valid = false;
        }

        if (!isValidEmail(emailInput.value.trim())) {
            setError('email', 'Please enter a valid email address.');
            valid = false;
        }

        if (passwordInput.value.length < 8) {
            setError('password', 'Password must be at least 8 characters.');
            valid = false;
        }

        if (confirmInput.value !== passwordInput.value || confirmInput.value === '') {
            setError('confirmPassword', 'Passwords do not match.');
            valid = false;
        }

        if (!termsInput.checked) {
            showToast('Please accept the Terms and Privacy Policy.', 'error');
            valid = false;
        }

        return valid;
    }

    function showToast(message, type = '') {
        toast.textContent = message;
        toast.className = 'toast show' + (type ? ' ' + type : '');
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validate()) return;

        signupBtn.disabled = true;
        signupBtn.querySelector('.btn-label').textContent = 'Creating account...';

        // Simulate an async signup request
        setTimeout(() => {
            signupBtn.disabled = false;
            signupBtn.querySelector('.btn-label').textContent = 'Sign Up';
            showToast('Welcome to Kawaii! 🎉', 'success');
            form.reset();
            strengthMeter.classList.remove('weak', 'medium', 'strong');
        }, 1200);
    });

    // Social sign-up buttons
    document.querySelectorAll('.social-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const provider = btn.dataset.provider;
            showToast(`Redirecting to ${provider}...`);
        });
    });
});