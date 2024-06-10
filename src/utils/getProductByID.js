import {ip} from '../../config.js';

export async function getProductByID(id) {
    const id_products = [id];
    try {
        const response = await fetch(ip + '/product/id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id_products})
        });

        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        const data = await response.json();
        return (data);
    } catch (error) {
        alert(error);
        console.log(error);
        return null; // Renvoie null en cas d'erreur
    }
}