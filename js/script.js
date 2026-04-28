// Para móviles: toggle del modal al tocar la tarjeta
document.querySelectorAll('.tarjeta-curso').forEach(tarjeta => {
    tarjeta.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' || e.target.classList.contains('modal-cerrar')) return;
        if (window.innerWidth <= 768) {
            const wrapper = this.closest('.curso-wrapper');
            wrapper.classList.toggle('modal-abierto');
        }
    });
});

// Cerrar modal al hacer clic en el botón X
document.querySelectorAll('.modal-cerrar').forEach(boton => {
    boton.addEventListener('click', function (e) {
        e.stopPropagation();
        const wrapper = this.closest('.curso-wrapper');
        wrapper.classList.remove('modal-abierto');
    });
});