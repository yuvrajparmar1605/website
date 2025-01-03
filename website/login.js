// Select the form and inputs
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add an event listener to handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate fields are not empty
    if (username === '' || password === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Check if username and password are different
    if (username === password) {
        alert('Username and password cannot be the same.');
        return;
    }

    // Save the username (for demonstration purposes)
    localStorage.setItem('username', username);

    // Redirect to homepage
    window.location.href = 'homepage.html';
});
