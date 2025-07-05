// Aos Initialization
AOS.init({ duration: 800, once: true });

// Function to handle the form toggle between login and register
document.addEventListener('DOMContentLoaded', function () {
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    const formSubtitle = document.getElementById('form-subtitle');
    const socialText = document.getElementById('social-text');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');

    // Initialize the forms to show login by default
    function showLoginForm(e) {
        if (e) e.preventDefault();
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');

        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');

        formTitle.textContent = 'Selamat Datang Kembali';
        formSubtitle.textContent = 'Masuk untuk melanjutkan sesi Anda.';
        socialText.textContent = 'Atau masuk dengan';
    }

    // Show the login form by default on page load
    function showRegisterForm(e) {
        if (e) e.preventDefault();
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');

        registerToggle.classList.add('active');
        loginToggle.classList.remove('active');

        formTitle.textContent = 'Buat Akun Baru';
        formSubtitle.textContent = 'Daftar sekarang untuk memulai dengan Dry Laundry.';
        socialText.textContent = 'Atau daftar dengan';
    }

    // Set initial state to show login form
    loginToggle.addEventListener('click', showLoginForm);
    registerToggle.addEventListener('click', showRegisterForm);
    showLoginLink.addEventListener('click', showLoginForm);
    showRegisterLink.addEventListener('click', showRegisterForm);
});


// Function to handle the mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Function to toggle password visibility
const togglePasswordButtons = document.querySelectorAll('.toggle-password');
togglePasswordButtons.forEach(button => {
    button.addEventListener('click', function () {
        const passwordInput = this.previousElementSibling; // Input password berada sebelum span
        const toggleIcon = this.querySelector('.toggle-icon');

        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        toggleIcon.classList.toggle('fa-eye');
        toggleIcon.classList.toggle('fa-eye-slash');
    });
});