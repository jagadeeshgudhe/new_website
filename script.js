// Show alert on "Start Free Trial" button click
document.querySelector('#hero button').addEventListener('click', () => {
    alert('Thank you for your interest! The trial feature is coming soon.');
});

  





//discover more 
document.getElementById("discover-more-btn").addEventListener("click", function() {
    window.open("https://www.investopedia.com/articles/00/082100.asp", "_blank");
  });






//overlaying the team//
  function showTeamOverlay() {
      document.getElementById('team-overlay').style.display = 'flex';
  }

  function hideTeamOverlay() {
      document.getElementById('team-overlay').style.display = 'none';
  }





