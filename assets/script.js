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
        time = setTimeout(logout, 10000)
    }
};



/*//////////////// CHECKBOX /////////////*/
const mensajes = document.querySelector('#mensajes');
const mensajesBox = document.querySelector('#mensajesBox');
const mensajesText = document.querySelector('#mensajesInput');
mensajesText.style.display = 'none';
const cumpleanos = document.querySelector('#cumpleanos');
const cumpleanosBox = document.querySelector('#cumpleanosBox');
const cumpleanosText = document.querySelector('#cumpleanosInput');
cumpleanosText.style.display = 'none';


mensajes.addEventListener('change', () => {
    if (mensajes.checked) {
        mensajesText.style.display = 'block';
        mensajesText.value = '';
        mensajesBox.classList.add ("checked");
        cumpleanosBox.classList.remove ("checked");
        cumpleanosText.style.display = 'none';
        cumpleanos.checked = false;
    } else {
        mensajesText.style.display = 'none';
        mensajesBox.classList.remove ("checked");
    }
});''

cumpleanos.addEventListener('change', () => {
    if (cumpleanos.checked) {
        cumpleanosText.style.display = 'block';
        cumpleanosText.value = '';
        cumpleanosBox.classList.add ("checked");
        mensajesBox.classList.remove ("checked");
        
        mensajesText.style.display = 'none';
        mensajes.checked = false;

    } else {
        cumpleanosText.style.display = 'none';
        cumpleanosBox.classList.remove ("checked");

    }
});

function disableEmptyInputs(form) {
    var controls = form.input;
    for (var i=0, iLen=controls.length; i<iLen; i++) {
      controls[i].disabled = controls[i].value == '';
    }
  }


