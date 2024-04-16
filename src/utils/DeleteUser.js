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