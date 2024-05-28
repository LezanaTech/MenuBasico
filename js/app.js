document.addEventListener('DOMContentLoaded', function() {
    const cuadrados = document.querySelectorAll('.cuadrado-uno, .cuadrado-dos, .cuadrado-tres');

    cuadrados.forEach(cuadrado => {
        cuadrado.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg)';
        });

        cuadrado.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });
});
