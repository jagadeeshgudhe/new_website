//sign up and login 

function signup(event) {
  event.preventDefault();

  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.username === username);

  if (userExists) {
    alert('Username or password is already taken  Please choose a different one.');
  } else {
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! You can now log in.');
    window.location.href = 'login.html';
  }
}

function login(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert('Login successful!');
    window.location.href = 'welcome.html';
  } else {
    alert('Invalid username or password.');
  }
}




//image changing 
  const images = [
    "images/hero-image1.jpg",
    "images/hero-image2.jpg",
    "images/hero-image3.jpg"
  ];
  let currentIndex = 0;
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-image").src = images[currentIndex];
  }
  setInterval(changeImage, 3000);
  


  //stats numbers counting 
  const counters = document.querySelectorAll('.counter');
  const speed = 500; 
  
  counters.forEach(counter => {
    function updateCount() {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed; //here increment is calculate
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } 
      else {
        counter.innerText = target; 
      }
    }
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter); 
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
  
  


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





  
