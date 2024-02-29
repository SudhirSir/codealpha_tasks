document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const socialLogin = document.getElementById('socialLogin');
  
    loginBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  
    // Event listeners for each social media login button
    document.getElementById('fbLogin').addEventListener('click', function() {
      // Handle Facebook login
      console.log('Facebook login clicked');
      // Implement Facebook OAuth logic
    });
  
    document.getElementById('twitterLogin').addEventListener('click', function() {
      // Handle Twitter login
      console.log('Twitter login clicked');
      // Implement Twitter OAuth logic
    });
  
    document.getElementById('instaLogin').addEventListener('click', function() {
      // Handle Instagram login
      console.log('Instagram login clicked');
      // Implement Instagram OAuth logic
    });
  
    document.getElementById('linkedinLogin').addEventListener('click', function() {
      // Handle LinkedIn login
      console.log('LinkedIn login clicked');
      // Implement LinkedIn OAuth logic
    });
  });
  
  