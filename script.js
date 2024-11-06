// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show alert on "Start Free Trial" button click
document.querySelector('#hero button').addEventListener('click', () => {
    alert('Thank you for your interest! The trial feature is coming soon.');
});

// FAQ Section toggle effect
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// Modal popup for testimonials
document.querySelectorAll('#testimonials blockquote').forEach((quote, index) => {
    quote.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>${quote.innerHTML}</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal on clicking 'X' or outside the content
        modal.querySelector('.close').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    });
});



//overlaying the team//
  function showTeamOverlay() {
      document.getElementById('team-overlay').style.display = 'flex';
  }

  function hideTeamOverlay() {
      document.getElementById('team-overlay').style.display = 'none';
  }