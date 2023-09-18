document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
            .then(response => {
                // Dado que estamos usando 'no-cors', no podemos verificar realmente la respuesta.
                // Por lo tanto, asumimos que si llegamos a este punto, el formulario se ha enviado correctamente.
                alert('¡Formulario enviado con éxito!');
                form.reset();
            })
            .catch(error => {
                // Este bloque catch manejará errores de red, como problemas de conexión.
                alert(`Ocurrió un error al enviar el formulario: ${error.message}`);
            });
    });
});
