import {ip} from '../../config.js';

export async function deleteUser(id_user) {
    try {
        const response = await fetch(ip + '/user/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({id_user})
        });

        const statusCode = response.status; // Récupérer le code HTTP

        if (statusCode == 200) {
            return "User supprimé";
        } else {
            if (statusCode == 401) {
                return "User inexistant";
            } else {
                return "Error";
            }
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        throw error; // Propager l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('id');

    try {
        // Votre code pour récupérer les données du client

        // Ajouter l'écouteur d'événements au formulaire
        document.getElementById('updateUserForm').addEventListener('submit', async function (event) {
            event.preventDefault(); // Empêche le rechargement de la page

            const last_name = document.getElementById('client-last-name').textContent;
            const first_name = document.getElementById('client-first-name').textContent;
            const username = document.getElementById('client-username').textContent;
            const email = document.getElementById('client-email').textContent;
            const tel = document.getElementById('client-tel').textContent;

            const response = await updateUser(clientId, last_name, first_name, username, email, tel);

            alert("Changement effectué");
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
