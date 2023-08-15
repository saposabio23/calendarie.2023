/*//////////////// DAILY INFOS /////////////*/
var $fecha = document.getElementById("fecha");

var fechaHoy = new Date().toLocaleDateString('fr-FR');

var diaHoy = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
var mesHoy = new Date().toLocaleDateString('es-ES', { month: 'long' });
var numeroHoy = new Date().toLocaleDateString('es-ES', { day: 'numeric' });


function diaDeHoy() {
    document.title = 'Feliz ' + numeroHoy + ' de ' + mesHoy + '!';

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
        fraseDeHoy();
        inactivityTime();
        console.log(fechaHoy)
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


/*
// DATA RANDOM
*/
function appendData(data) {

    const $pfrase = document.getElementById("frase");
    const $psanto = document.getElementById("santo");
    const $pcelebracion = document.getElementById("celebracion");

    const content = document.querySelector('.content');

    for (var i = 0; i < data.calendario.length; i++) {
        var calendario = data.calendario[i];

        if (calendario.date === fechaHoy) {
            var enumero = document.createElement("a");
            enumero.className = 'enumero';
            enumero.innerHTML = calendario.enumero;
            enumero.href = '';
            content.prepend(enumero);

            var frase = document.createElement("span");
            frase.className = 'info frase';
            frase.innerHTML = '"' + calendario.frase + '"';
            $pfrase.appendChild(frase);

            var autore = document.createElement("a");
            autore.innerHTML = calendario.autore;
            if (calendario.autoreurl.length > 0) {
                autore.className = 'info autore url';
                autore.href = calendario.autoreurl;
                autore.target = "_blank";
             }
             else {
                autore.className = 'info autore';
             }
            $pfrase.appendChild(autore);

            var santo = document.createElement("span");
            santo.className = 'info santo';
            santo.innerHTML = calendario.santo;
            $psanto.appendChild(santo);

            var celebracion = document.createElement("span");
            celebracion.className = 'info celebracion';
            celebracion.innerHTML = calendario.celebracion1;
            $pcelebracion.appendChild(celebracion);


            var celebracion2 = document.createElement("span");
            celebracion2.className = 'info celebracion';
            celebracion2.innerHTML = calendario.celebracion2;
            $pcelebracion.appendChild(celebracion2);

            var celebracion3 = document.createElement("span");
            celebracion3.className = 'info celebracion';
            celebracion3.innerHTML = calendario.celebracion3;
            $pcelebracion.appendChild(celebracion3);

            var imagen = document.createElement("img");
            imagen.className = 'imagen';
            imagen.src = "img/image_" + calendario.imagen + ".jpg";
            console.log(imagen.src)
            document.body.appendChild(imagen);


        }
    }
}

/*
// RANDOM SENTENCES ON EACH LOAD
*/
function fraseDeHoy() {
    var frases = Array(
        'Que se cuece hoy?', 
        'Que pasa hoy?', 
        'Que se trama hoy?', 
        'Eta hoy?', 
        'Nuevo día, nueva cosas',
        )

    const queHay = document.getElementById("queHay");

    var frase = frases[Math.floor(Math.random() * frases.length)];

    console.log(frase)

    queHay.innerHTML = frase;
}

/*
// SELECTOR OF MENU
*/
const msanto = document.querySelector('#msanto');
const mfrase = document.querySelector('#mfrase');
const mcelebracion = document.querySelector('#mcelebracion');

msanto.addEventListener('click', () => {
    msanto.classList.add("selected1");
    mfrase.classList.remove("selected2");
    mcelebracion.classList.remove("selected3");
});

mfrase.addEventListener('click', () => {
    msanto.classList.remove("selected1");
    mfrase.classList.add("selected2");
    mcelebracion.classList.remove("selected3");
});

mcelebracion.addEventListener('click', () => {
    msanto.classList.remove("selected1");
    mfrase.classList.remove("selected2");
    mcelebracion.classList.add("selected3");
});


/* -----------------------------------
IMAGE INACTIVE
-------------------------------------- */
let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.touchstart = resetTimer;
    var $imagen = document.querySelector(".imagen");

    function logout() {
        $imagen.classList.add("showImage");
    }
    function resetTimer() {
        clearTimeout(time);
        $imagen.classList.remove("showImage");
        time = setTimeout(logout, 7000)
    }
};
