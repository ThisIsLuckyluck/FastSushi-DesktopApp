import { ip } from '../../config.js';

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch(ip + '/user/client', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            }
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des clients');
        }

        const data = await response.json();
        updateClientList(data);

        // Add search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', function () {
            const filteredClients = data.filter(client =>
                client.username.toLowerCase().includes(searchInput.value.toLowerCase())
            );
            updateClientList(filteredClients);
        });

    } catch (error) {
        console.error('Error:', error);
    }
});

function updateClientList(clients) {
    const clientList = document.getElementById('client-list');
    if (!clientList) {
        console.error("L'élément avec l'ID 'client-list' n'a pas été trouvé.");
        return;
    }
    clientList.innerHTML = '';

    clients.forEach((client) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="client-link">${client.id_user}</td>
            <td>${client.last_name}</td>
            <td>${client.first_name}</td>
            <td>${client.tel}</td>
            <td>${client.email}</td>
            <td><a href="./userfile.html?id=${client.id_user}" class="client-link">${client.username}</a></td>
        `;
        clientList.appendChild(tr);

        const clientLink = tr.querySelector('.client-link');
        clientLink.addEventListener('click', function(event) {
            event.preventDefault();
            const clientId = client.id_user; // Récupérez l'ID du client à partir du lien
            localStorage.setItem('selectedClientId', clientId);
            window.location.href = './user.html?id=' + clientId; // Ajoutez l'ID du client au lien
        });
    });
}
