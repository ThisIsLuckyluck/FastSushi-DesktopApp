import { ip } from '../../config.js';

document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('id');

    try {
        const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in sessionStorage.');
        }

        const response = await fetch(ip + '/user/id', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify({ id_user: clientId }) // inclure l'ID du client dans le corps de la requête
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données du client');
        }

        // Analyser la réponse JSON
        const clientData = await response.json();

        // Afficher les détails du client
        displayClientDetails(clientData[0]);

    } catch (error) {
        console.error('Error:', error);
    }
});

// Fonction pour afficher les détails du client
function displayClientDetails(clientData) {
    // Récupérer l'élément parent pour les détails du client
    const clientDetailsDiv = document.getElementById('client-details-content');
    if (!clientDetailsDiv) {
        console.error("L'élément avec l'ID 'client-details-content' n'a pas été trouvé.");
        return;
    }

    // Mettre à jour les éléments HTML avec les données du client
    document.getElementById('client-id').textContent = clientData.id_user;console.log(clientData.id_user)
    document.getElementById('client-last-name').textContent = clientData.last_name;console.log(clientData.last_name);
    document.getElementById('client-first-name').textContent = clientData.first_name;console.log(clientData.first_name);
    document.getElementById('client-email').textContent = clientData.email;console.log(clientData.email);
    document.getElementById('client-tel').textContent = clientData.tel;console.log(clientData.tel);
    document.getElementById('client-permission').textContent = clientData.permission;console.log(clientData.permission);
    document.getElementById('client-username').textContent = clientData.username;console.log(clientData.username);
}