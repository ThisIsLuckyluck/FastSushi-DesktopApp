import {ip} from '../../config.js';

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch(ip + '/appetizer', {
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
function updateDessertList(appetizer) {
    const appetizerList = document.getElementById('appetizer-list');
    if (!appetizerList) {
        console.error("L'élément avec l'ID 'appetizer-list' n'a pas été trouvé.");
        return;
    }
    appetizerList.innerHTML = '';

    appetizer.forEach((appetizer) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="appetizer-link">${appetizer.id_product}</td>
        <td>${appetizer.type_product}</td>
        <td>${appetizer.product_name}</td>
        <td>${appetizer.description}</td>
        <td>${appetizer.price}</td>
        <td>${appetizer.quantity}</td>
        <td><span class="material-symbols-outlined">delete</span></td> <!-- Utilisation de l'icône -->
    `;
        appetizerList.appendChild(tr);

        const appetizerLink = tr.querySelector('.appetizer-link');
        appetizerLink.addEventListener('click', function(event) {
            event.preventDefault();
            const appetizerId = appetizer.id_user; // Récupérez l'ID du product à partir du lien
            sessionStorage.setItem('selectedappetizerId', appetizerId);
        });
    });
}

