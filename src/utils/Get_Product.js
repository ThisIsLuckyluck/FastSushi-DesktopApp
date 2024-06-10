import {ip} from '../../config.js';

export async function getAllProduct() {
    try {
        const response = await fetch(ip + '/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        const data = await response.json();
        return (data);
    } catch (error) {
        alert("catch getAllClient");
        alert(error);
        console.log(error);
        return null; // Renvoie null en cas d'erreur
    }
}
