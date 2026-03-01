document.addEventListener('DOMContentLoaded', () => {
    // 1. Modal Dialog
    const dialog = document.getElementById('dialog');
    const showBtn = document.getElementById('show');
    const hideBtn = document.getElementById('hide');

    if (showBtn) {
        showBtn.addEventListener('click', () => dialog.showModal());
    }
    if (hideBtn) {
        hideBtn.addEventListener('click', () => dialog.close());
    }

    // Cerrar al hacer click fuera
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close();
    });

    // 2. Animación de Scroll Suave para las secciones
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('article, section, h2, #photo-image').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        observer.observe(el);
    });
});