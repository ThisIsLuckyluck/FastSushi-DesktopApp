import { ip } from '../../config.js';

export async function updateUser(user_id, last_name, first_name, username, email, tel) {
    try {
        const response = await fetch(ip + '/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({ user_id, last_name, first_name, username, email, tel })
        });

        const statusCode = response.status;

        if (statusCode == 200) {
            return "Utilisateur mis à jour";
        } else {
            if (statusCode == 401) {
                return "Utilisateur inexistant";
            } else {
                const responseBody = await response.json();
                return `Erreur lors de la mise à jour de l'utilisateur : ${responseBody.message}`;
            }
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
        throw error; // Propager l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('id');

    try {
        // Ajouter l'écouteur d'événements au formulaire
        const updateUserForm = document.getElementById('updateUserForm');
        updateUserForm.addEventListener('submit', async function (event) {
            event.preventDefault(); // Empêche le rechargement de la page

            const last_name = document.getElementById('client-last-name').value;
            const first_name = document.getElementById('client-first-name').value;
            const username = document.getElementById('client-username').value;
            const email = document.getElementById('client-email').value;
            const tel = document.getElementById('client-tel').value;

            const response = await updateUser(clientId, last_name, first_name, username, email, tel);

            alert(response); // Affichez le message retourné par la fonction updateUser

            // Assurez-vous que les champs restent éditables
            document.getElementById('client-last-name').disabled = false;
            document.getElementById('client-first-name').disabled = false;
            document.getElementById('client-username').disabled = false;
            document.getElementById('client-email').disabled = false;
            document.getElementById('client-tel').disabled = false;
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
