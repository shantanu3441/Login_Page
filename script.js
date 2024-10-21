document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation
    if (username === 'student' && password === 'password123') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        // Redirect or perform any other action here
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
});
