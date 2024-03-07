import { checkIfLoggedIn } from '../utils/APIRequest.js';


function logout() {
  localStorage.removeItem('token');
  window.close();
}

if (!checkIfLoggedIn()) {
  window.location.href = './index.html';
}

// Handle navigation
window.addEventListener('click', (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    const href = e.target.href;
    const location = href.split('/').pop();
    history.pushState('', '', location);
    router();
  } else if (e.target.matches('#logout')) {
    e.preventDefault();
    logout();
  }
});