// login navigation, no backend handling
const form = document.getElementById('authForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'profile/index.html';
});
