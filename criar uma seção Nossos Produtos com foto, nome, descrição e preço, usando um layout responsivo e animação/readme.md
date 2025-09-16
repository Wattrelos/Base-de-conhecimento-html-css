Um exemplo completo de HTML e CSS para criar uma seção "Nossos Produtos" com foto, nome, descrição e preço, usando um layout responsivo com CSS Grid
. 
Você pode copiar e colar ambos os códigos em seus respectivos arquivos (index.html e styles.css) para ver o resultado. 


Dois arquivos: Um chamado index.html e outro chamado styles.css.
Copie e cole: Copie o conteúdo do HTML para o teu index.html e o conteúdo do CSS para o styles.css.
Adicione imagens: Substitua <img src="img/"> pelos caminhos de suas próprias imagens de produtos. Se as imagens estiverem na mesma pasta, você pode usar apenas o nome do arquivo, como caminho-para-sua-imagem.jpg.
Personalize: Altere o texto, os preços e as cores para que combinem com a sua marca.
Visualize: Abra o arquivo index.html no seu navegador para ver o resultado.

Bônus: Animar o card de produtos para que possa alternar fotos.
A forma mais comum e recomendada é usar JavaScript para controlar a alternância das imagens. Embora seja possível fazer isso apenas com CSS usando a propriedade @keyframes, a solução com JavaScript é mais flexível e fácil de gerenciar. 
No arquivo styles.css, apresento uma solução completa usando JavaScript para criar um efeito de slideshow na seção de produtos, onde tem o estilo para o slideshow que irá empilhar as imagens e garantir que apenas uma esteja visível por vez.

O arquivo chamado script.js contém o código que será responsável por alternar as imagens e aplicar o efeito de transição.




HTML: A estrutura do cartão de produto é modificada para incluir um div pai (product-images) que envolve todas as imagens que farão parte do slideshow.
CSS:
    O div .product-images é posicionado como relative para servir como contêiner de referência.
    As imagens dentro desse contêiner (.product-images img) são posicionadas como absolute e empilhadas umas sobre as outras.
    Todas as imagens começam com opacity: 0 (invisíveis).
    A classe .active define opacity: 1, tornando a imagem visível.
    A propriedade transition garante que a mudança de opacidade seja suave.
JavaScript:
    Ao carregar a página, o script percorre todos os cartões de produto.
    Para cada cartão, ele verifica se há mais de uma imagem para o slideshow.
    A primeira imagem recebe a classe .active para ser exibida inicialmente.
    A função changeImage remove a classe .active da imagem atual e a adiciona à próxima imagem na sequência, criando o efeito de alternância.
    A função setInterval executa a changeImage a cada 3 segundos, garantindo a alternância automática. 

