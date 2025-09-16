Descrição do código:

    HTML: Cria a estrutura de duas colunas usando <div> com a propriedade flexbox no CSS. O formulário de filtro usa caixas de seleção (<input type="checkbox">) agrupadas em fieldset para cada critério (categoria, marca, cor). Cada produto tem atributos data-* para armazenar seus dados (ex: data-categoria="ferramentas").
    CSS: A classe .container usa display: flex para colocar a barra lateral e o conteúdo lado a lado. O CSS também estiliza a barra lateral, os grupos de filtro e os produtos. A classe .hidden é usada para ocultar os produtos que não correspondem aos critérios.
    JavaScript:
        O código espera o DOM ser carregado (DOMContentLoaded).
        Ele seleciona todas as caixas de seleção e todos os produtos.
        A função applyFilters coleta todos os valores dos filtros ativos (marcados).
        Em seguida, ela itera sobre cada produto e verifica se ele corresponde a todos os filtros selecionados.
        Por fim, adiciona ou remove a classe .hidden de cada produto, dependendo se ele deve ser exibido ou não.
        Um event listener é adicionado a cada caixa de seleção para que a função applyFilters seja executada sempre que uma opção for marcada ou desmarcada.