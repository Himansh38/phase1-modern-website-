// Predefined credentials
const username = 'user123';
const password = 'pass123';

// Prompt the user for input
const inputUsername = prompt('Enter your username:');
const inputPassword = prompt('Enter your password:');

// Check if the input matches the predefined credentials
if (inputUsername === username && inputPassword === password) {
    alert('Authentication successful! Welcome, ' + inputUsername + '!');
} else {
    alert('Authentication failed. Please check your username and password.');
}
