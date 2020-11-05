const birretes = document.getElementsByClassName("birretes")
const birreteBoton = document.getElementById("birrete-boton")

console.log(birretes)


function quitarBirretes() {
birretes[0].classList.add('birretes1')
}

quitarBirretes()

let control = 0


function ponerBirretes(){
    birretes[0].classList.remove('birretes1')
}


function animarBirretes() {
   if (control===0){
    ponerBirretes()
    birreteBoton.innerHTML = '<i class="far fa-pause-circle"></i>';

    control = 1
}
else{
    birreteBoton.innerHTML = '<i class="far fa-play-circle"></i>';
    quitarBirretes()
    control = 0
}

}