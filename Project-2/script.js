document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const displayData = document.getElementById('display-data');
    const displayName = document.getElementById('display-name');
    const displayEmail = document.getElementById('display-email');
    const displayGender = document.getElementById('display-gender');
    const displaySkills = document.getElementById('display-skills');
    const clearBtn = document.getElementById('clear-btn');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const skills = Array.from(document.querySelectorAll('input[name="skill"]:checked')).map(el => el.value);
  
      displayName.textContent = name;
      displayEmail.textContent = email;
      displayGender.textContent = gender;
      displaySkills.textContent = skills.join(', ');
  
      displayData.classList.remove('hidden');
    });
  
    clearBtn.addEventListener('click', () => {
      form.reset();
    });
  });
  