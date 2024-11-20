const usuarios = [];

class Usuario {
    constructor() {
        this.nombre = "";
        this.correo = "";
        this.contraseña = "";
    }

    registrarse(nombre, correo, contraseña) {
        const verificar = usuarios.some(usuario => usuario.correo === correo);
        if (verificar) {
            alert("El correo electrónico ya está registrado.");
            return;
        }
        const nuevo_usuario = { nombre, correo, contraseña };
        usuarios.push(nuevo_usuario);
        console.log("Usuarios registrados:", usuarios);
        alert("Usuario registrado con éxito.");
    }

    iniciar_sesion(nombre, correo, contraseña) {
        const usuario = usuarios.find(
            usuario =>
                usuario.nombre === nombre &&
                usuario.correo === correo &&
                usuario.contraseña === contraseña
        );
        if (usuario) {
            alert(`Bienvenido, ${usuario.nombre}!`);
            mostrar_juego();
        } else {
            alert("Nombre, correo o contraseña incorrectos.");
        }
    }
}

class Juego {
    constructor() {
        this.opciones = ["Papel", "Tijera", "Piedra", "Lagarto", "Spock"];
    }

    jugar(opcion_jugador) {
        let opcion_sistema = this.opciones[Math.floor(Math.random() * this.opciones.length)];
        let mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = "";

        if (opcion_jugador === opcion_sistema) {
            mensaje.innerHTML = `Empate. Ambos eligieron ${opcion_jugador}.`;
        } else if (
            (opcion_jugador === "Papel" && ["Piedra", "Spock"].includes(opcion_sistema)) ||
            (opcion_jugador === "Tijera" && ["Papel", "Lagarto"].includes(opcion_sistema)) ||
            (opcion_jugador === "Piedra" && ["Tijera", "Lagarto"].includes(opcion_sistema)) ||
            (opcion_jugador === "Lagarto" && ["Papel", "Spock"].includes(opcion_sistema)) ||
            (opcion_jugador === "Spock" && ["Tijera", "Piedra"].includes(opcion_sistema))
        ) {
            mensaje.innerHTML = `¡Ganaste! Elegiste ${opcion_jugador} y la computadora eligió ${opcion_sistema}.`;
        } else {
            mensaje.innerHTML = `Perdiste. Elegiste ${opcion_jugador} y la computadora eligió ${opcion_sistema}.`;
        }
    }
}

const usuario = new Usuario();
const juego = new Juego();

function registrar() {
    const nombre = document.getElementById("registrar_nombre").value;
    const correo = document.getElementById("registrar_correo").value;
    const contraseña = document.getElementById("registrar_contraseña").value;

    if (nombre && correo && contraseña) {
        usuario.registrarse(nombre, correo, contraseña);
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function iniciar_sesion() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (nombre && correo && contraseña) {
        usuario.iniciar_sesion(nombre, correo, contraseña);
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function mostrar_juego() {
    document.getElementById("inicio_sesion").style.display = "none";
    document.getElementById("inicio_registro").style.display = "none";
    document.getElementById("juego").style.display = "block";
}

function mostrar_registro() {
    document.getElementById("inicio_sesion").style.display = "none";
    document.getElementById("inicio_registro").style.display = "block";
    document.getElementById("juego").style.display = "none";
}

function mostrar_inicio() {
    document.getElementById("inicio_sesion").style.display = "block";
    document.getElementById("inicio_registro").style.display = "none";
    document.getElementById("juego").style.display = "none";
}
