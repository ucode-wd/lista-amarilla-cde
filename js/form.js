const form = document.querySelector('.contact__form');

form.addEventListener('submit', ()=>
    Swal.fire({
        title: "Muchas gracias!",
        text: "Tu propuesta ha sido enviada",
        icon: "success"
        })
);