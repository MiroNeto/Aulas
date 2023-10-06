document.addEventListener('DOMContentLoaded', function () {
    const pandaImage = document.getElementById('panda');

    // Adiciona efeito de fade-in na imagem do panda
    pandaImage.style.opacity = '0';
    setTimeout(() => {
        pandaImage.style.transition = 'opacity 1s ease-in-out';
        pandaImage.style.opacity = '1';
    }, 300);

    // Adiciona efeito de rotação no hover da imagem do panda
    pandaImage.addEventListener('mouseenter', () => {
        pandaImage.style.transform = 'rotate(360deg)';
        pandaImage.style.transition = 'transform 0.5s ease-in-out';
    });

    pandaImage.addEventListener('mouseleave', () => {
        pandaImage.style.transform = 'rotate(0deg)';
    });
});
