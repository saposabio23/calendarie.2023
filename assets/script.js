/* -----------------------------------
IPHONE HEIGHT
-------------------------------------- */
window.onload = mobileWindow();

function mobileWindow() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  console.log("VH on mobiles", vh);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);


var fechaHoy = new Date().toLocaleDateString('fr-FR');
console.log(fechaHoy)

/*//////////////// DAILY INFOS /////////////*/
var $fecha = document.getElementById("fecha");

var diaHoy = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
var mesHoy = new Date().toLocaleDateString('es-ES', { month: 'long' });
var numeroHoy = new Date().toLocaleDateString('es-ES', { day: 'numeric' });

function diaDeHoy() {

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
        inactivityTime();
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


/*//////////////// DATA APPEND /////////////*/
function appendData(data) {
    var $pfrase = document.getElementById("frase");
    var $psanto = document.getElementById("santo");
    var $pcelebracion = document.getElementById("celebracion");
    var $pcumpleanos = document.getElementById("cumpleanos");

    for (var i = 0; i < data.calendario.length; i++) {
        var calendario = data.calendario[i];

        if (calendario.date === fechaHoy) {
            var enumero = document.createElement("div");
            enumero.className = 'enumero';
            enumero.innerHTML = calendario.enumero;
            $fecha.appendChild(enumero);

            var frase = document.createElement("div");
            frase.className = 'info frase';
            frase.innerHTML = calendario.frase;
            $pfrase.appendChild(frase);

            var santo = document.createElement("div");
            santo.className = 'info santo';
            santo.innerHTML = calendario.santo;
            $psanto.appendChild(santo);

            var celebracion = document.createElement("div");
            celebracion.className = 'info celebracion';
            celebracion.innerHTML = calendario.celebracion;
            $pcelebracion.appendChild(celebracion);

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


/*//////////////// INFOS /////////////*/
const corner = document.querySelector('#esquina');
const content = document.querySelector('.content');


function showInfo() {
    content.classList.toggle ("shows");
  }

  corner.addEventListener("click", showInfo, false);



/*//////////////// CHECKBOX /////////////*/
const mensajes = document.querySelector('#mensajesbtn');
const mensajesBox = document.querySelector('#mensajesBox');
const mensajesText = document.querySelector('#mensajesInput');
const cumpleanos = document.querySelector('#cumpleanosbtn');
const cumpleanosBox = document.querySelector('#cumpleanosBox');
const cumpleanosText = document.querySelector('#cumpleanosInput');

const selectDay = document.querySelector('#selectDay');
const selectMonth = document.querySelector('#selectMonth');



mensajes.addEventListener('change', () => {
    if (mensajes.checked) {
        mensajesText.style.display = 'block';
        mensajesText.value = '';
        mensajesBox.classList.add ("checked1");
        cumpleanosBox.classList.remove ("checked2");
        cumpleanosText.style.display = 'none';
        cumpleanos.checked = false;
    } else {
        mensajesText.style.display = 'none';
        mensajesBox.classList.remove ("checked1");
    }
});

cumpleanos.addEventListener('change', () => {
    if (cumpleanos.checked) {
        cumpleanosText.style.display = 'block';
        cumpleanosText.value = '';
        cumpleanosBox.classList.add ("checked2");
        mensajesBox.classList.remove ("checked1");
        mensajesText.style.display = 'none';
        mensajes.checked = false;

    } else {
        cumpleanosText.style.display = 'none';
        cumpleanosBox.classList.remove ("checked2");

    }
});

selectDay.addEventListener('click', () => {
    selectDay.classList.add ("checked3");
});

selectMonth.addEventListener('click', () => {
    selectMonth.classList.add ("checked3");
});