window.addEventListener('load', function() {
    const loadDiv = document.querySelector('.preloader-container');
    const conDiv = document.querySelector('.main');
    
    setTimeout(function() {
        loadDiv.style.display = 'none';  // Hide the loading screen
        conDiv.style.display = 'block';  // Show the main content
    }, 3); // 3000 milliseconds = 3 seconds
});