//toggle FAQ answer display
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;  
        
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block'; 
        } else {
            answer.style.display = 'none';
        }
    });
});