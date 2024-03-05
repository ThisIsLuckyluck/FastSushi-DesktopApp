import settings from '../views/settings.js';
import gestionIngredients from '../views/gestion-ingredients.js';
import historique from '../views/historique.js';
import listeClients from '../views/liste-client.js';
import menuSushi from '../views/menu-sushi.js';
import ticket from '../views/ticket.js';
import { checkIfLoggedIn } from '../utils/APIRequest.js';

const routes = {
  'settings': { title: 'Settings page', render: settings },
  'liste-clients': { title: 'Liste des clients', render: listeClients },
  'gestion-ingredients': {
    title: 'Gestion des ingrédients',
    render: gestionIngredients,
  },
  'commandes-cours': { title: 'Historique des commandes', render: historique },
  'admin-menus': { title: 'Menu Sushi', render: menuSushi },
  'ticket': { title: 'Ticket', render: ticket },
};

function router() {
  let view = routes[location.pathname.split('/').pop()];
  if (view) {
    document.title = view.title;
    app.innerHTML = view.render();
  } else {
    history.replaceState('', '', '/');
    app.innerHTML = ``;
  }
}

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

// Update router
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);
