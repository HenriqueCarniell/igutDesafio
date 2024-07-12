document.addEventListener('DOMContentLoaded', () => {
    const productTableBody = document.querySelector('#productTable tbody');
    const searchInput = document.getElementById('search');

    let getProducts = () => {
        fetch('../backend/server.php')
            .then((response) => response.json())
            .then((data) => {
                displayProducts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    let displayProducts = (products) => {
        productTableBody.innerHTML = '';
        products.forEach((product) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.idproduto}</td>
                <td>${product.nome}</td>
                <td>${product.preco}</td>
            `;
            productTableBody.appendChild(row);
        });
    }

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = productTableBody.getElementsByTagName('tr');
        Array.from(rows).forEach((row) => {
            const productName = row.cells[1].textContent.toLowerCase();
            if (productName.indexOf(filter) > -1) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    getProducts();
});
