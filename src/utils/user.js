import {config} from '../../config.js';
const url = config.url;

export async function getAllClient() {
    try {
        const response = await fetch(url + '/user/client', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
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
        return null;
    }
}