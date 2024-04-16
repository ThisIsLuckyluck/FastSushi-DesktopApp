import {ip} from '../../config.js';

export async function updateUser(user_id, last_name, first_name, username, email, tel) {
    try {
        const response = await fetch(ip + '/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({user_id, last_name, first_name, username, email, tel})
        });

        const statusCode = response.status; // Récupérer le code HTTP

        if (statusCode == 200) {
            return "User mis à jour";
        } else {
            if (statusCode == 401) {
                return "User inexistant";
            } else {
                // Récupérer le corps de la réponse pour obtenir plus d'informations sur l'erreur
                const responseBody = await response.json();
                return `Erreur lors de la mise à jour de l'utilisateur : ${responseBody.message}`;
            }
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
        throw error; // Propager l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
}
// Récupérer les paramètres de l'URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

let clientId; // Déclarez clientId en dehors de la fonction DOMContentLoaded

document.addEventListener('DOMContentLoaded', async function () {
  const urlParams = new URLSearchParams(window.location.search);
  clientId = urlParams.get('id'); // Affectez la valeur à clientId ici

  try {
      // Votre code pour récupérer les données du client
  } catch (error) {
      console.error('Error:', error);
  }
});

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