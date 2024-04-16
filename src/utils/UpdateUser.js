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