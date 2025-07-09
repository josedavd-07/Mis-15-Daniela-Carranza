const codigos = {
    "LS": { nombre: "Sara y Luisa", tipo: "pareja", imagen: "/Assets/img/Invitacion.png" },
    "YT": { nombre: "Yurladys Torrado", tipo: "mujer", imagen: "/Assets/img/Invitacion.png" },
    "CA": { nombre: "Camila", tipo: "mujer", imagen: "/Assets/img/Invitacion.png" },
    "LI": { nombre: "Limey", tipo: "mujer", imagen: "/Assets/img/Invitacion.png" },
    "LM": { nombre: "Laura Mora", tipo: "mujer", imagen: "/Assets/img/Invitacion.png" },
    "AN": { nombre: "Agusto y Norfe", tipo: "pareja", imagen: "/Assets/img/Invitacion.png" },
    "FV": { nombre: "Familia Villaruel", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "FAA": { nombre: "Familia Ascanio Angarita", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "FFA": { nombre: "Familia Franco Angarita", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "FCA": { nombre: "Familia Cárdenas Angarita", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "FCL": { nombre: "Familia Clavijo Angarita", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "FCC": { nombre: "Familia Clavijo Colmenares", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "FRS": { nombre: "Familia Rojas Salazar", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "NA": { nombre: "Natalia", tipo: "mujer", imagen: "/Assets/img/Invitacion.png" },
    "FL": { nombre: "Florenz", tipo: "mujer", imagen: "/Assets/img/Invitacion.png" },
    "FVA": { nombre: "Familia Varela Angarita", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "KA": { nombre: "Kelly y Andres", tipo: "pareja", imagen: "/Assets/img/Invitacion.png" },
    "KMD": { nombre: "Kelly, Michel y Deiver", tipo: "grupo", imagen: "/Assets/img/Invitacion.png" },
    "LP": { nombre: "Liceth", tipo: "mujer", imagen: "/Assets/img/Invitacion.png" },
    "FVR": { nombre: "Familia VERGEL Ramos", tipo: "familia", imagen: "/Assets/img/Invitacion.png" },
    "FBA": { nombre: "Familia Becerra Arengas", tipo: "familia", imagen: "/Assets/img/Invitacion.png" }
};

// Reproduce música cuando el usuario da clic en el input
document.addEventListener("DOMContentLoaded", function () {
    const inputCodigo = document.getElementById("codigo");
    const musica = document.getElementById("musicaFondo");

    inputCodigo.addEventListener("focus", function () {
        musica.play().catch(e => {
            console.log("Autoplay bloqueado por el navegador: ", e);
        });
    });
});

function verificarCodigo() {
    const codigo = document.getElementById("codigo").value.trim().toUpperCase();
    if (codigos[codigo]) {
        const { nombre, tipo, imagen } = codigos[codigo];
        let mensaje = "";

        switch (tipo) {
            case "mujer":
                mensaje = "Estás cordialmente invitada a celebrar mis quince años";
                break;
            case "hombre":
                mensaje = "Estás cordialmente invitado a celebrar mis quince años";
                break;
            case "familia":
                mensaje = "Están cordialmente invitados a celebrar mis quince años";
                break;
            case "pareja":
                mensaje = "Están cordialmente invitadas a celebrar mis quince años";
                break;
            case "grupo":
                mensaje = "Están cordialmente invitados a celebrar mis quince años";
                break;
            default:
                // Deducción por nombre si no hay tipo definido
                const ultimaLetra = nombre.trim().slice(-1).toLowerCase();
                if (nombre.toLowerCase().startsWith("familia") || nombre.includes(" y ") || nombre.includes(",")) {
                    mensaje = "Están cordialmente invitados a celebrar mis quince años";
                } else if (ultimaLetra === "a") {
                    mensaje = "Estás cordialmente invitada a celebrar mis quince años";
                } else {
                    mensaje = "Estás cordialmente invitado a celebrar mis quince años";
                }
                break;
        }

        // Mostrar resultados en la tarjeta
        document.getElementById("nombreInvitada").textContent = nombre;
        document.getElementById("mensajeInvitacion").textContent = mensaje;
        document.getElementById("imagenVestido").src = imagen;
        document.getElementById("inicio").style.display = "none";
        document.getElementById("tarjeta").style.display = "block";
    } else {
        alert("Código inválido. Intenta nuevamente.");
    }
}

function volverAlInicio() {
    document.getElementById("tarjeta").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    document.getElementById("codigo").value = "";
}

function descargarTarjeta() {
    const codigo = document.getElementById("codigo").value.trim().toUpperCase();
    const datos = codigos[codigo];

    if (datos && datos.imagen) {
        const link = document.createElement("a");
        link.href = datos.imagen;
        link.download = "Invitacion15.png"; // Nombre del archivo descargado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Primero ingresa un código válido y genera la tarjeta.");
    }
}