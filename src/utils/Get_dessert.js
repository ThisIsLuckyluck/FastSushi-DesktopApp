import {ip} from '../../config.js';

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch(ip + '/dessert', {
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

        updateDessertList(data);

    } catch (error) {
        console.error('Error:', error);
    }
});
function updateDessertList(dessert) {
    const dessertList = document.getElementById('dessert-list');
    if (!dessertList) {
        console.error("L'élément avec l'ID 'dessert-list' n'a pas été trouvé.");
        return;
    }
    dessertList.innerHTML = '';

    dessert.forEach((dessert) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="dessert-link">${dessert.id_product}</td>
            <td>${dessert.type_product}</td>
            <td>${dessert.product_name}</td>
            <td>${dessert.description}</td>
            <td>${dessert.price}</td>
            <td>${dessert.quantity}</td>
        `;
        dessertList.appendChild(tr);

        const dessertLink = tr.querySelector('.dessert-link');
        dessertLink.addEventListener('click', function(event) {
            event.preventDefault();
            const dessertId = dessert.id_user; // Récupérez l'ID du product à partir du lien
            sessionStorage.setItem('selectedDessertId', dessertId);
        });
    });
}
