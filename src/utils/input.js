document.addEventListener('DOMContentLoaded', async function () {
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('product-list');

    searchInput.addEventListener('input', async function () {
        const searchValue = searchInput.value.trim().toLowerCase();
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

            const filteredProducts = data.filter(product => {
                return product.product_name.toLowerCase().includes(searchValue);
            });

            updateProductList(filteredProducts);

            // Afficher la liste des produits filtrés si des résultats sont trouvés
            if (filteredProducts.length > 0) {
                productList.style.display = 'table-row-group';
            } else {
                // Cacher la liste des produits si aucun résultat n'est trouvé
                productList.style.display = 'none';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
