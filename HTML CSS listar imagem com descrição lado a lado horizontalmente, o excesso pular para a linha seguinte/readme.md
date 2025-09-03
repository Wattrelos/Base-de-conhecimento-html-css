Para exibir imagens com legendas lado a lado que "quebram" para a linha seguinte, use um container com display: flex e adicione a propriedade flex-wrap: wrap a ele, permitindo que os itens se organizem horizontalmente até o espaço acabar, e depois saltem para a próxima linha. 
Exemplo de HTML e CSS:

index.HTML
css/estilo


Como funciona:

    1. display: flex; no container:
Transforma o container em um flex container, e seus filhos (as divs com a classe item) tornam-se flex items, tentando se alinhar em uma linha. 

    2. flex-wrap: wrap; no container:
É a propriedade chave aqui. Se houver muitos items para caber na linha atual, eles serão "enrolados" para a próxima linha. 
    3. flex: 1 1 200px; no item:
Esta é uma abreviação para flex-grow, flex-shrink e flex-basis.

    flex-grow: 1: Permite que o item cresça para ocupar o espaço disponível.
    flex-shrink: 1: Permite que o item encolha se não houver espaço.
    flex-basis: 200px: Define uma largura base para o item. Se a largura total da tela for suficiente para acomodar múltiplos itens de 200px, eles ficarão em linha. Se não, o flex-wrap: wrap atuará. 

4. max-width: 100%; na img:
Garante que as imagens se ajustem ao container, mesmo quando estiverem na linha seguinte. 

