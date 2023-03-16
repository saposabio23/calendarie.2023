var fechaHoy = new Date().toLocaleDateString('fr-FR');
console.log(fechaHoy)

var diaHoy = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
var mesHoy = new Date().toLocaleDateString('es-ES', { month: 'long' });
var numeroHoy = new Date().toLocaleDateString('es-ES', { day: 'numeric' });


function diaDeHoy() {

    var $fecha = document.getElementById("fecha");

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


function appendData(data) {
    
    document.getElementById("hoyNada").style.display = ("none"); 
    var $infos = document.getElementById("infos");

    for (var i = 0; i < data.calendario.length; i++) {
        var calendario = data.calendario[i];

        if (calendario.date === fechaHoy) {
            var enumero = document.createElement("div");
            enumero.className = 'enumero';
            enumero.innerHTML = calendario.enumero;
            $infos.appendChild(enumero);

            var frase = document.createElement("div");
            frase.className = 'frase';
            frase.innerHTML = calendario.frase;
            $infos.appendChild(frase);

            var santo = document.createElement("div");
            santo.className = 'santo';
            santo.innerHTML = calendario.santo;
            $infos.appendChild(santo);

            var celebracion = document.createElement("div");
            celebracion.className = 'celebracion';
            celebracion.innerHTML = calendario.celebracion;
            $infos.appendChild(celebracion);

            var imagen = document.createElement("img");
            imagen.className = 'imagen';
            imagen.src = "img/image_" + calendario.imagen + ".jpg";
            console.log(imagen.src)
            document.body.appendChild(imagen);
        }
    }
}


let inactivityTime = function() {
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
      time = setTimeout(logout, 5000)
    }
  };