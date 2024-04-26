import estudiantes from '../estudiantes.js';

const $ = selector => document.querySelector(selector);

const $redes = $('.redes');
const $eventos = $('.eventos');
const $tesoreros = $('.tesoreros');
const $secretarios = $('.secretarios');


estudiantes.redes.forEach(e => {
    $redes.innerHTML += `<p>${e.nombre} - ${e.curso}</p>`;
})
estudiantes.eventos.forEach(e => {
    $eventos.innerHTML += `<p>${e.nombre} - ${e.curso}</p>`;
});

estudiantes.tesoreros.forEach(e => {
    $tesoreros.innerHTML += `<p>${e.nombre} - ${e.curso}</p>`;
});

estudiantes.secretarios.forEach(e => {
    $secretarios.innerHTML += `<p>${e.nombre} - ${e.curso}</p>`;
});