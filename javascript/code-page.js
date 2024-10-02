function showCode(language) {
    // Hide all code snippets
    var codeSnippets = document.querySelectorAll('.code');
    codeSnippets.forEach(function(snippet) {
        snippet.style.display = 'none';
        snippet.classList.remove('fade-in');  // Remove fade-in class
    });

    // Show the selected language code snippet with fade-in animation
    var selectedSnippet = document.getElementById(language);
    selectedSnippet.style.display = 'block';  // Ensure it's visible
    selectedSnippet.classList.add('fade-in');
}

// Function to copy code to clipboard
function copyCode(language, button) {
    var codeSnippet = document.getElementById(language).querySelector('pre').innerText;
    navigator.clipboard.writeText(codeSnippet).then(function() {
        // Change button text to "Copied!" for 10 seconds
        button.innerText = 'Copied!';
        setTimeout(() => {
            button.innerText = 'Copy Code'; // Reset text after 10 seconds
        }, 10000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}