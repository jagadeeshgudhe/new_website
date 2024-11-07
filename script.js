// it will Show alert on "Start Free Trial" when click the button
document.querySelector('#hero button').addEventListener('click', () => {
    alert('Thank you for your interest! The trial feature is coming soon.');
});

  
//if click discover more button, navigate to another website  
document.getElementById("discover-more-btn").addEventListener("click", function() {
    window.open("https://www.investopedia.com/articles/00/082100.asp", "_blank");
  });


//overlaying the team images //
  function showTeamOverlay() {
      document.getElementById('team-overlay').style.display = 'flex';
  }

  function hideTeamOverlay() {
      document.getElementById('team-overlay').style.display = 'none';
  }





