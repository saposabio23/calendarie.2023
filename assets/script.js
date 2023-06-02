
var fechaHoy = new Date().toLocaleDateString('fr-FR');
console.log(fechaHoy)

/*//////////////// DAILY INFOS /////////////*/
var $fecha = document.getElementById("fecha");

var diaHoy = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
var mesHoy = new Date().toLocaleDateString('es-ES', { month: 'long' });
var numeroHoy = new Date().toLocaleDateString('es-ES', { day: 'numeric' });

function diaDeHoy() {

    document.title = 'Bienvenid@ al ' + numeroHoy + ' de ' + mesHoy +' de 2023!';

    var mes = document.createElement("div");
    mes.className = 'mes';
    mes.innerHTML = mesHoy;
    $fecha.appendChild(mes);

    var numero = document.createElement("div");
    numero.className = 'numero';
    numero.innerHTML = numeroHoy;
    $fecha.appendChild(numero);

    var dia = document.createElement("div");
    dia.className = 'dia';
    dia.innerHTML = diaHoy;
    $fecha.appendChild(dia);

}

/*//////////////// DATA FETCH /////////////*/
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        diaDeHoy();
        // inactivityTime();
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


/*//////////////// DATA APPEND /////////////*/
function appendData(data) {

    cosas = ['Que se cuece hoy?', 'Que pasa hoy?', 'Que se trama hoy?', 'Y hoy?']

    const $pfrase = document.getElementById("frase");
    const $psanto = document.getElementById("santo");
    const $pcelebracion = document.getElementById("celebracion");
    const $pcumpleanos = document.getElementById("cumpleanos");

    const content = document.querySelector('.content');


    for (var i = 0; i < data.calendario.length; i++) {
        var calendario = data.calendario[i];

        if (calendario.date === fechaHoy) {
            var enumero = document.createElement("div");
            enumero.className = 'enumero';
            enumero.innerHTML = calendario.enumero;
            content.prepend(enumero);

            var frase = document.createElement("div");
            frase.className = 'info frase';
            frase.innerHTML = calendario.frase;
            $pfrase.appendChild(frase);

            var santo = document.createElement("div");
            santo.className = 'info santo';
            santo.innerHTML = calendario.santo;
            $psanto.appendChild(santo);

            var celebracion = document.createElement("a");
            celebracion.className = 'info celebracion';
            celebracion.innerHTML = calendario.celebracion1;
            celebracion.href = calendario.celebracionurl1;
            celebracion.target = "_blank";
            $pcelebracion.appendChild(celebracion);


            var celebracion2 = document.createElement("a");
            celebracion2.className = 'info celebracion';
            celebracion2.innerHTML = calendario.celebracion2;
            celebracion2.href = calendario.celebracionurl2;
            celebracion2.target = "_blank";
            $pcelebracion.appendChild(celebracion2);

            var celebracion3 = document.createElement("a");
            celebracion3.className = 'info celebracion';
            celebracion3.innerHTML = calendario.celebracion3;
            celebracion3.href = calendario.celebracionurl3;
            celebracion3.target = "_blank";
            $pcelebracion.appendChild(celebracion3);

            var cumpleanos = document.createElement("div");
            cumpleanos.className = 'info cumpleanos';
            cumpleanos.innerHTML = calendario.cumpleanos;
            $pcumpleanos.appendChild(cumpleanos);

            var imagen = document.createElement("img");
            imagen.className = 'imagen';
            imagen.src = "img/image_" + calendario.imagen + ".jpg";
            console.log(imagen.src)
            document.body.appendChild(imagen);
        }
    }
}

const msanto = document.querySelector('#msanto');
const mfrase = document.querySelector('#mfrase');
const mcelebracion = document.querySelector('#mcelebracion');
const mcumpleanos = document.querySelector('#mcumpleanos');

msanto.addEventListener('click', () => {
    msanto.classList.add ("selected1");
    mfrase.classList.remove ("selected2");
    mcelebracion.classList.remove ("selected3");
});

mfrase.addEventListener('click', () => {
    msanto.classList.remove ("selected1");
    mfrase.classList.add ("selected2");
    mcelebracion.classList.remove ("selected3");
});

mcelebracion.addEventListener('click', () => {
    msanto.classList.remove ("selected1");
    mfrase.classList.remove ("selected2");
    mcelebracion.classList.add ("selected3");
});




/* -----------------------------------
IMAGE INACTIVE
-------------------------------------- */
// let inactivityTime = function () {
//     let time;
//     window.onload = resetTimer;
//     document.onmousemove = resetTimer;
//     document.touchstart = resetTimer;
//     var $imagen = document.querySelector(".imagen");

//     function logout() {
//         $imagen.classList.add("showImage");
//     }
//     function resetTimer() {
//         clearTimeout(time);
//         $imagen.classList.remove("showImage");
//         time = setTimeout(logout, 10000)
//     }
// };


