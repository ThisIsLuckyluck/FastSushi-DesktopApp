import {ip} from '../../config.js';

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch(ip + '/plate', {
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

        updatePlateList(data);

    } catch (error) {
        console.error('Error:', error);
    }
});

function updatePlateList(plate) {
    const plateList = document.getElementById('plate-list');
    if (!plateList) {
        console.error("L'élément avec l'ID 'plate-list' n'a pas été trouvé.");
        return;
    }
    plateList.innerHTML = '';

    plate.forEach((plate) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="plate-link">${plate.id_product}</td>
            <td>${plate.type_product}</td>
            <td>${plate.product_name}</td>
            <td>${plate.description}</td>
            <td>${plate.price}</td>
            <td>${plate.quantity}</td>
        `;
        plateList.appendChild(tr);

        const plateLink = tr.querySelector('.plate-link');
        plateLink.addEventListener('click', function(event) {
            event.preventDefault();
            const plateId = plate.id_user; // Récupérez l'ID du product à partir du lien
            sessionStorage.setItem('selectedPlateId', plateId);
        });
    });
}