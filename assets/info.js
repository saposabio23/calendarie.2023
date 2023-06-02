/*//////////////// CHECKBOX /////////////*/
const mensajes = document.querySelector('#mensajes');
const mensajesBox = document.querySelector('#mensajesBox');
const mensajesText = document.querySelector('#mensajesInput');
const cumpleanos = document.querySelector('#cumpleanos');
const cumpleanosBox = document.querySelector('#cumpleanosBox');
const cumpleanosText = document.querySelector('#cumpleanosInput');

const selectDay = document.querySelector('#selectDay');
const selectMonth = document.querySelector('#selectMonth');



mensajesText.addEventListener('click', () => {
    mensajesText.classList.add ("checked");
});
