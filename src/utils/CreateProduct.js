import {ip} from '../../config.js';

export async function createProduct(type_product, product_name, description, price, quantity) {
    try {
        const response = await fetch(ip + '/product/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({type_product, product_name, description, price, quantity})
        });

        const statusCode = response.status;

        return statusCode;
    } catch (error) {
        console.error('Erreur lors de la création du produit :', error);
        throw error;
    }
}