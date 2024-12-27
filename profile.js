function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.addEventListener('DOMContentLoaded', function() {
    const profileUsername = document.getElementById('profile-username');
    const lastTestScoreElement = document.getElementById('last-test-score');
    const profileDob = document.getElementById('profile-dob');
    const profileGender = document.getElementById('profile-gender');
       const profileAge = document.getElementById('profile-age');
    const urlParams = new URLSearchParams(window.location.search);
    const usernameFromUrl = urlParams.get('username');
    
   
    if (usernameFromUrl) {
         profileUsername.textContent = usernameFromUrl;
           if (testScore) {
           lastTestScoreElement.textContent = `${testScore} баллов`;
           }
    } else {
         profileUsername.textContent = "Гость";
          lastTestScoreElement.textContent = "Не пройдено";
    }
    if (dob && profileDob) {
        profileDob.textContent = dob;
      }
       if (dob && profileAge) {
        profileAge.textContent = calculateAge(dob);
    }
    if (gender && profileGender){
       profileGender.textContent = gender;
     }
    const content = document.getElementById('content');
      if (usernameFromUrl){
           content.style.display = 'block';
      }
});

function logout() {
    username = null;
         dob = null;
         gender = null;
    const content = document.getElementById('content');
    const logoutButton = document.getElementById('logout-btn');
    if (content) {
        content.style.display = 'none';
    }
    if (logoutButton) {
        logoutButton.style.display = 'none';
    }
    const registerModal = document.getElementById('register-modal');
    if (registerModal) {
        registerModal.style.display = 'flex';
    }
    window.location.href = 'index.html'
}