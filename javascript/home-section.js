// DOM elements
const allBtn = document.getElementById('all-btn');
const easyBtn = document.getElementById('easy-btn');
const mediumBtn = document.getElementById('medium-btn');
const hardBtn = document.getElementById('hard-btn');
const questionItems = document.querySelectorAll('.question-item');

// Function to update question list visibility
function updateQuestionList(difficulty) {
    questionItems.forEach((item) => {
        item.classList.remove('show');
        if (difficulty === 'all' || item.classList.contains(difficulty)) {
            setTimeout(() => {
                item.classList.add('show');
            }, 100); // Add a delay for animations
        }
    });
}

// Function to handle difficulty switch
function switchDifficulty(difficulty) {
    allBtn.classList.remove('selected');
    easyBtn.classList.remove('selected');
    mediumBtn.classList.remove('selected');
    hardBtn.classList.remove('selected');

    switch (difficulty) {
        case 'all':
            allBtn.classList.add('selected');
            updateQuestionList('all');
            break;
        case 'easy':
            easyBtn.classList.add('selected');
            updateQuestionList('easy');
            break;
        case 'medium':
            mediumBtn.classList.add('selected');
            updateQuestionList('medium');
            break;
        case 'hard':
            hardBtn.classList.add('selected');
            updateQuestionList('hard');
            break;
        default:
            break;
    }
}

// Event listeners for buttons
allBtn.addEventListener('click', () => switchDifficulty('all'));
easyBtn.addEventListener('click', () => switchDifficulty('easy'));
mediumBtn.addEventListener('click', () => switchDifficulty('medium'));
hardBtn.addEventListener('click', () => switchDifficulty('hard'));

// Set default questions (all)
updateQuestionList('all');
