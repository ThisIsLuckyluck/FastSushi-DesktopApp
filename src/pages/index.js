import settings from '../views/settings.js';
import gestionMenus from '../views/gestion-menus.js';
import gestionEntrees from '../views/gestion-entrees.js';
import gestionPlats from '../views/gestion-plats.js';
import gestionDesserts from '../views/gestion-desserts.js';
import listeClients from '../views/liste-client.js';

const routes = {
  'settings': { title: 'Page de paramètrage', render: settings },
  'liste-clients': { title: 'Liste des clients', render: listeClients },
  'gestion-menus': {
    title: 'Gestion des menus',
    render: gestionMenus,
  },
  'gestion-entrees': { title: 'Gestion des entrees', render: gestionEntrees },
  'gestion-plats': { title: 'Gestion des plats', render: gestionPlats },
  'gestion-desserts': { title: 'Gestion des desserts', render: gestionDesserts },
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
