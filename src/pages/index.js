import { checkIfLoggedIn } from '../utils/APIRequest.js';


function logout() {
  sessionStorage.removeItem('token');
  window.close();
}
window.addEventListener('click', (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    history.pushState('', '', location);
  } else if (e.target.matches('#logout')) {
    e.preventDefault();
    logout();
  }
});