// Simulate a backend response
const users = {
    user1: 'password123',
    user2: 'password456'
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if username and password match
    if (users[username] && users[username] === password) {
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        // Display error message
        errorMessage.textContent = 'Incorrect username or password';
    }
});
