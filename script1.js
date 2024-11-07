
// JavaScript to toggle FAQ answer display
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Get the next element (the <p> tag containing the answer)
        
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block'; // Show the answer
        } else {
            answer.style.display = 'none'; // Hide the answer
        }
    });
});