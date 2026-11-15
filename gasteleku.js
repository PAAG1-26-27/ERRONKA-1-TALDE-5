document.addEventListener("DOMContentLoaded", () => {
    const botonAbrir = document.getElementById("openModalButton");
    const modal = document.getElementById("registrationModal");
    const botonCerrar = document.getElementById("closeModalButton");
    const botonCerrarExito = document.getElementById("successCloseButton");
    const formulario = document.getElementById("registrationForm");
    const mensajeExito = document.getElementById("successMessage");
    const textoExito = document.getElementById("successText");

    if (!botonAbrir || !modal) {
        console.error("No se encuentran openModalButton o registrationModal.");
        return;
    }

    botonAbrir.addEventListener("click", () => {
        if (formulario && mensajeExito) {
            formulario.hidden = false;
            mensajeExito.hidden = true;
        }
        modal.hidden = false;
    });

    function cerrarModal() {
        modal.hidden = true;
    }

    botonCerrar?.addEventListener("click", cerrarModal);
    botonCerrarExito?.addEventListener("click", cerrarModal);

    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) cerrarModal();
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") cerrarModal();
    });

    formulario?.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const nombre = document.getElementById("name").value.trim();
        const lang = document.documentElement.lang === "en" ? "en" : "eu";

        if (textoExito) {
            textoExito.textContent = lang === "en"
                ? `${nombre}, your registration for Ermua Gazteleku has been received!`
                : `${nombre}, Ermuko Gaztelekurako zure izen-ematea ondo jaso da!`;
        }

        formulario.hidden = true;
        if (mensajeExito) mensajeExito.hidden = false;
        formulario.reset();
    });
});
