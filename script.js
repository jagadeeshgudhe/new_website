function signup(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Signup successful! You can now log in.');
    window.location.href = 'login.html';
  }


function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
      window.location.href = 'welcome.html';
    } else {
      alert('Invalid username or password.');
    }
  }





  //navigate to start free trail to signup page
  document.querySelector('#hero button').addEventListener('click', () => {
    window.location.href = 'signup.html';
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





  
