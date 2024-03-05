document.addEventListener('DOMContentLoaded', function () {
    // Fetch les données des clients depuis le serveur
    fetch('../../config.js')
      .then(response => response.json())
      .then(config => {
        fetch(`${config.url + "/user/client"}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${config.token}`,
          }
        })
        .then(response => response.json())
        .then(data => {
          const clientList = document.getElementById('client-list');
  
          // Ajoutez les clients à la table
          data.forEach((client) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${client.id_user}</td>
              <td><a href="#" class="client-link" data-client-id="${client.id_user}">${client.last_name}</a></td>
              <td>${client.first_name}</td>
              <td>${client.tel}</td>
              <td>${client.email}</td>
              <td>${client.username}</td>
            `;
            clientList.appendChild(tr);
          });
  
          // Ajoutez un gestionnaire d'événements pour les liens dans la liste des clients
          clientList.addEventListener('click', function (event) {
  if (event.target.classList.contains('client-link')) {
  event.preventDefault();
  const clientId = event.target.getAttribute('data-client-id');
  // Store the selected client ID in localStorage
  localStorage.setItem('selectedClientId', clientId);
  // Redirect the user to the fiche-client.html page
  window.location.href = 'fiche-client.html';
  }
  });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  
  fetch('../../config.js')
    .then(response => response.json())
    .then(config => {
      fetch(`${config.url + "/order"}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${config.token}`,
        }
      })
      .then(response => response.json())
      .then(data => {
        const orderList = document.getElementById('order-list');
        data.forEach((order) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
          <td>${order.id_order}</td>
          <td>${order.id_client}</td>
          <td>${order.id_picker}</td>
          <td>${order.order_state}</td>
          <td>${order.date}</td>
          `;
          orderList.appendChild(tr);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
    fetch('../../config.js')
    .then(response => response.json())
    .then(config => {
      fetch(`${config.url + "/user/client"}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${config.token}`,
        }
      })
      .then(response => response.json())
      .then(data => {
        const orderList = document.getElementById('order-list');
        data.forEach((order) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
          <td>${order.id_order}</td>
          <td>${order.id_client}</td>
          <td>${order.id_picker}</td>
          <td>${order.order_state}</td>
          <td>${order.date}</td>
          `;
          orderList.appendChild(tr);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  document.addEventListener('DOMContentLoaded', function () {
      // Fetch les données des clients depuis le serveur
      fetch('../../config.js')
        .then(response => response.json())
        .then(config => {
          fetch(`${config.url_client}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${config.token}`,
            }
          })
          .then(response => response.json())
          .then(data => {
            // Retrieve the selected client ID from localStorage
            const selectedClientId = localStorage.getItem('selectedClientId');
            // Find the selected client
            const selectedClient = data.find(client => client.id_user === parseInt(selectedClientId));
            // Update the client details
            showClientDetails(selectedClient);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
      // fonction pour voir le détails des client
      function showClientDetails(client) {
      const clientDetailsContainer = document.getElementById('client-details-content');
      clientDetailsContainer.innerHTML = `
        <p><strong>Nom d'utilisateur:</strong> ${client.username}</p>
        <p><strong>ID:</strong> ${client.id_user}</p>
        <p><strong>Nom:</strong> ${client.last_name}</p>
        <p><strong>Prénom:</strong> ${client.first_name}</p>
        <p><strong>Téléphone:</strong> ${client.tel}</p>
        <p><strong>Email:</strong> ${client.email}</p>
        <p><strong>Mots de passe:</strong> ${client.password}</p>
        <!-- Ajoutez d'autres mises à jour selon les besoins -->
      `;
    }
    });
  
  document.addEventListener('DOMContentLoaded', function () {
      // Fetch les données des clients depuis le serveur
      fetch('../../config.js')
        .then(response => response.json())
        .then(config => {
          fetch(`${config.url + "/user/client"}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${config.token}`,
            }
          })
          .then(response => response.json())
          .then(data => {
            const clientList = document.getElementById('client-list');
  
            // Ajoutez les clients à la table
            data.forEach((client) => {
              const tr = document.createElement('tr');
              tr.innerHTML = `
                <td>${client.id_user}</td>
                <td><a href="#" class="client-link" data-client-id="${client.id_user}">${client.last_name}</a></td>
                <td>${client.first_name}</td>
                <td>${client.tel}</td>
                <td>${client.email}</td>
                <td>${client.username}</td>
              `;
              clientList.appendChild(tr);
            });
  
            // Ajoutez un gestionnaire d'événements pour les liens dans la liste des clients
            clientList.addEventListener('click', function (event) {
              if (event.target.classList.contains('client-link')) {
                event.preventDefault();
                const clientId = event.target.getAttribute('data-client-id');
                // Store the selected client ID in localStorage
                localStorage.setItem('selectedClientId', clientId);
                // Redirect the user to the fiche-client.html page
                window.location.href = 'fiche-client.html';
              }
            });
  
            // Sélection de l'élément d'entrée de recherche
            const searchInput = document.getElementById('searchInput');
  
            // Ajoutez un gestionnaire d'événements pour l'événement "input" sur la barre de recherche
            searchInput.addEventListener('input', function () {
              // Récupérez la valeur saisie dans la barre de recherche
              const searchTerm = this.value.trim().toLowerCase();
              // Filtrer les données des clients en fonction du terme de recherche
              const filteredClients = data.filter(client =>
                client.id_user.toString().toLowerCase().includes(searchTerm) || // Recherche par ID utilisateur
                client.last_name.toLowerCase().includes(searchTerm) ||
                client.first_name.toLowerCase().includes(searchTerm)
              );
              // Mettez à jour l'affichage de la liste des clients avec les résultats filtrés
              updateClientList(filteredClients);
            });
  
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  
    // Fonction pour mettre à jour la liste des clients dans le DOM
    function updateClientList(filteredClients) {
      const clientList = document.getElementById('client-list');
      clientList.innerHTML = ''; // Effacer le contenu actuel de la liste des clients
  
      // Ajoutez les clients filtrés à la table
      filteredClients.forEach((client) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${client.id_user}</td>
          <td><a href="#" class="client-link" data-client-id="${client.id_user}">${client.last_name}</a></td>
          <td>${client.first_name}</td>
          <td>${client.tel}</td>
          <td>${client.email}</td>
          <td>${client.username}</td>
        `;
        clientList.appendChild(tr);
      });
    }