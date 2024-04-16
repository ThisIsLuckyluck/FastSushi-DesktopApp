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
    // Récupérer les éléments des champs de formulaire
    const clientIdInput = document.getElementById('client-id');
    const clientLastNameInput = document.getElementById('client-last-name');
    const clientFirstNameInput = document.getElementById('client-first-name');
    const clientEmailInput = document.getElementById('client-email');
    const clientTelInput = document.getElementById('client-tel');
    const clientPermissionInput = document.getElementById('client-permission');
    const clientUsernameInput = document.getElementById('client-username');

    // Mettre à jour les valeurs des champs de formulaire avec les données du client
    clientIdInput.value = clientData.id_user;
    clientLastNameInput.value = clientData.last_name;
    clientFirstNameInput.value = clientData.first_name;
    clientEmailInput.value = clientData.email;
    clientTelInput.value = clientData.tel;
    clientPermissionInput.value = clientData.permission;
    clientUsernameInput.value = clientData.username;
}