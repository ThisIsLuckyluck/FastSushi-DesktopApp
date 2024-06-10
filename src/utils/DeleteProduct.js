import {ip} from '../conf.js';

export async function deleteProduct(id_product) {
    try {
        const response = await fetch(ip + '/product/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({id_product})
        });

        const statusCode = response.status; // Récupérer le code HTTP

        return statusCode;
    } catch (error) {
        console.error('Erreur lors de la suppression du produit:', error);
        throw error; // Propager l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
}