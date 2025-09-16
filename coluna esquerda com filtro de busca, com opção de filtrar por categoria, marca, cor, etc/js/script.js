document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.sidebar input[type="checkbox"]');
    const products = document.querySelectorAll('#product-list .product');

    function applyFilters() {
        // Objeto para armazenar os filtros selecionados
        const activeFilters = {
            categoria: [],
            marca: [],
            cor: []
        };

        // Coleta todos os filtros ativos
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const filterType = checkbox.name;
                const filterValue = checkbox.value;
                activeFilters[filterType].push(filterValue);
            }
        });

        // Itera sobre cada produto para aplicar a filtragem
        products.forEach(product => {
            const productCategory = product.getAttribute('data-categoria');
            const productMarca = product.getAttribute('data-marca');
            const productColor = product.getAttribute('data-cor');

            // Verifica se o produto corresponde a todos os filtros ativos
            const matchesCategory = activeFilters.categoria.length === 0 || activeFilters.categoria.includes(productCategory);
            const matchesMarca = activeFilters.marca.length === 0 || activeFilters.marca.includes(productMarca);
            const matchesColor = activeFilters.cor.length === 0 || activeFilters.cor.includes(productColor);

            // Mostra ou esconde o produto
            if (matchesCategory && matchesMarca && matchesColor) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    }

    // Adiciona o evento de 'change' a todas as caixas de seleção
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Aplica os filtros na carga inicial da página
    applyFilters();
});

