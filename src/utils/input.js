import { updateProductList } from '../utils/Get_Product.js';

document.addEventListener('DOMContentLoaded', async function () {
    const searchInput = document.getElementById('searchInput');
   
    // Ajouter un événement d'écoute pour détecter les changements de valeur
    searchInput.addEventListener('input', function () {
        // Récupérer la valeur de recherche
        const searchTerm = searchInput.value.toLowerCase();
   
        // Sélectionner les lignes de la table
        const rows = document.querySelectorAll('#client-table tbody tr');
   
        // Parcourir toutes les lignes
        rows.forEach(row => {
            // Récupérer le nom d'utilisateur dans le lien de la sixième colonne
            const clientUsername = row.querySelector('td:nth-child(6)').textContent.toLowerCase();
   
            // Afficher ou masquer la ligne en fonction de si le nom du client correspond à la recherche
            if (clientUsername.includes(searchTerm)) {
                row.style.display = 'table-row'; // Afficher la ligne
            } else {
                row.style.display = 'none'; // Masquer la ligne
            }
        });
    });
   });
   
   document.addEventListener('DOMContentLoaded', function () {
       // Sélectionner l'élément de recherche
       const searchInput = document.getElementById('searchInput');
      
       // Ajouter un événement d'écoute pour détecter les changements de valeur
       searchInput.addEventListener('input', function () {
           // Récupérer la valeur de recherche
           const searchTerm = searchInput.value.toLowerCase();
      
           // Sélectionner les lignes de la table
           const rows = document.querySelectorAll('#product-table tbody tr');
      
           // Parcourir toutes les lignes
           rows.forEach(row => {
               // Récupérer le nom d'utilisateur dans le lien de la sixième colonne
               const clientUsername = row.querySelector('td:nth-child(6)').textContent.toLowerCase();
      
               // Afficher ou masquer la ligne en fonction de si le nom du client correspond à la recherche
               if (clientUsername.includes(searchTerm)) {
                   row.style.display = 'table-row'; // Afficher la ligne
               } else {
                   row.style.display = 'none'; // Masquer la ligne
               }
           });
       });
      });