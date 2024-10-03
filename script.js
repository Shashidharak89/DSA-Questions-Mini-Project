 // Object to store username-password pairs
 const users = {
    "admin": "password123",
    "user1": "pass1",
    "user2": "pass2",
    "shashi":"abcd1234"
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username exists and password matches
    if (users[username] && users[username] === password) {
        // Redirect to home.html
        window.location.href = "home.html";
    } else {
        showPopup("Invalid username or password!");
    }
}
function showPopup(message) {
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
    // Focus on the popup when it appears
    document.getElementById("popup").focus();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("backdrop").style.display = "none";
}



 // Ensure .load stays for at least 3 seconds
 window.addEventListener('load', function() {
    const loadDiv = document.querySelector('.container');
    const conDiv = document.querySelector('.login-container');
    
    setTimeout(function() {
        loadDiv.style.display = 'none';  // Hide the loading screen
        conDiv.style.display = 'block';  // Show the main content
    }, 1800); // 3000 milliseconds = 3 seconds
});

