const juegos = document.getElementById('juegos');
const menuInicio = document.getElementById('menuInicio');
const piedraPapelTijeras = document.getElementById('piedraPapelTijeras');
const adivinaNumero = document.getElementById('adivinaNumero');
const adivinaColor = document.getElementById('adivinaColor');
const intentosAdivinaColor = 3;
let intentosRestantesAdivinaColor = intentosAdivinaColor;
let colorAdivinaColor;

menuInicio.addEventListener('click', () => {
    menuInicio.style.display = 'none';
    
});

piedraPapelTijeras.addEventListener('click', () => {
    ocultarJuegos();
    const juegoPPT = document.getElementById('juegoPiedraPapelTijeras');
    juegoPPT.style.display = 'block';
});

adivinaNumero.addEventListener('click', () => {
    ocultarJuegos();
    const juegoNumero = document.getElementById('juegoAdivinaNumero');
    juegoNumero.style.display = 'block';
});

adivinaColor.addEventListener('click', () => {
    ocultarJuegos();
    const juegoColor = document.getElementById('juegoAdivinaColor');
    juegoColor.style.display = 'block';
    iniciarAdivinaColor();
});

function ocultarJuegos() {
    juegos.style.display = 'none';
    document.getElementById('juegoPiedraPapelTijeras').style.display = 'none';
    document.getElementById('juegoAdivinaNumero').style.display = 'none';
    document.getElementById('juegoAdivinaColor').style.display = 'none';
}

function iniciarAdivinaColor() {
    const colores = ["rojo", "verde", "azul", "amarillo", "naranja", "rosa", "morado", "marrón", "gris"];
    colorAdivinaColor = colores[Math.floor(Math.random() * colores.length)];
    intentosRestantesAdivinaColor = intentosAdivinaColor;
    document.getElementById('intentosRestantesColor').textContent = intentosRestantesAdivinaColor;
    document.getElementById('resultadoAdivinaColor').textContent = "";
    document.getElementById('colorUsuario').value = "";
}

document.getElementById('adivinaColorBoton').addEventListener('click', () => {
    const colorUsuario = document.getElementById('colorUsuario').value.toLowerCase();
    if (colorUsuario === colorAdivinaColor) {
        Swal.fire("¡Adivinaste el color!");
        iniciarAdivinaColor();
    } else {
        intentosRestantesAdivinaColor--;
        document.getElementById('intentosRestantesColor').textContent = intentosRestantesAdivinaColor;
        if (intentosRestantesAdivinaColor === 0) {
            Swal.fire(`Perdiste. El color era ${colorAdivinaColor}.`);
            iniciarAdivinaColor();
        } else {
            Swal.fire(`Intenta de nuevo. Te quedan ${intentosRestantesAdivinaColor} intentos.`);
        }
    }
});
