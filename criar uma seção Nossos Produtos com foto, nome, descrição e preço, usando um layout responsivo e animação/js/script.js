// Animação tipo slideshow para card de produto -----------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const images = card.querySelectorAll('.product-images img');
        if (images.length > 1) { // Só aplica o slideshow se houver mais de uma imagem
            let currentImageIndex = 0;

            // Define a primeira imagem como ativa
            images[currentImageIndex].classList.add('active');

            // Função para alternar a imagem
            const changeImage = () => {
                images[currentImageIndex].classList.remove('active');
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].classList.add('active');
            };

            // Alterna a imagem a cada 3 segundos (3000ms)
            setInterval(changeImage, 3000);
        }
    });
});
// --------------------------------------------------------------------------------------------------------------------------------
