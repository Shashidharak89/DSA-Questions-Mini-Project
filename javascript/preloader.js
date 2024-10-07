window.addEventListener('load', function() {
    const loadDiv = document.querySelector('.preloader-container');
    const conDiv = document.querySelector('.main');
    const conDiv2 = document.querySelector('.hide-on-scan');
    
    setTimeout(function() {
        loadDiv.style.display = 'none';  // Hide the loading screen
        conDiv.style.display = 'block';  // Show the main content
        conDiv2.style.display = 'block';
    }, 3); // 3000 milliseconds = 3 seconds
});
