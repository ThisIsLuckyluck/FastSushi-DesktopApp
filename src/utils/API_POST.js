import {url} from '../../config.js';


export async function getLogin(username, password) {
    let response;
    try {
        const response = await fetch(url ,+ '/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        // Vérifiez si la requête a réussi
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        // Extrait les données de la réponse
        const responseData = await response.json();
        return responseData.token;
    } catch (error) {
        return;
    }
}