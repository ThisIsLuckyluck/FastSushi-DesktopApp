import {ip} from '../../config.js';

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch(ip + '/product', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            }
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des produits');
        }

        const data = await response.json();

        updateProductList(data);

    } catch (error) {
        console.error('Error:', error);
    }
});

function updateProductList(product) {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error("L'élément avec l'ID 'product-list' n'a pas été trouvé.");
        return;
    }
    productList.innerHTML = '';

    product.forEach((product) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${product.id_product}</td>
            <td>${product.type_product}</td>
            <td>${product.product_name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
        `;
        productList.appendChild(tr);

        const productLink = tr.querySelector('.product-link');
        productLink.addEventListener('click', function(event) {
            event.preventDefault();
            const productId = product.id_user; // Récupérez l'ID du product à partir du lien
            sessionStorage.setItem('selectedProductId', productId);
        });
    });
}
