//solicitud de turno
/*function solicitarTurno() {
    let usuario = prompt('Ingrese su nombre y apellido');
    let doctor = prompt('Nuestra cartilla está conformada por: *Meredith Grey  *Derek Sheperd  *Cristina Yang   *Alex Karev   *Mark Sloan')*/
   

    
/*



//seleccion de sala
//const eleccionDeSala = doctores[Math.floor(Math.random()* doctores.length)]
//console.log(eleccionDeSala);
/*if (eleccionDeSala.disponibilidad == false) {
    console.log('El doctor no está disponible');
} else {
    console.log(eleccionDeSala);
    
}*/


// Definición de los médicos y su disponibilidad
/*const doctores = [
    { nombre: "Meredith Grey", disponibilidad: true },
    { nombre: "Derek Shepherd", disponibilidad: false },
    { nombre: "Cristina Yang", disponibilidad: true },
    { nombre: "Alex Karev", disponibilidad: true },
    { nombre: "Mark Sloan", disponibilidad: false }
];*/

function solicitarTurno() {
    // Solicitar al usuario que seleccione un médico

    let ingresarNombre = prompt('Ingrese su nombre')
    let doctorSeleccionado = prompt('Nuestra cartilla esta conformada por:\n' +
        '* Meredith Grey\n' +
        '* Derek Shepherd\n' +
        '* Cristina Yang\n' +
        '* Alex Karev\n' +
        '* Mark Sloan\n\n' +
        'Ingrese el nombre del medico que desea consultar:');
    
    // Validar si el médico está en la lista!!!!!!!!!!!!!!!!
    const doctorEncontrado = doctores.find(doctor => doctor.nombre.toLowerCase() === doctorSeleccionado.toLowerCase());
    
    if (!doctorEncontrado) {
        alert("El médico ingresado no está en nuestra cartilla. Por favor, inténtelo de nuevo.");
        return; // Termina la función si el médico no está en la lista
    }


    // Solicitar fecha y hora de la cita
    let fechaCita = prompt("Ingrese la fecha de la cita (formato: YYYY-MM-DD):");
    let horaCita = prompt("Ingrese la hora de la cita (formato: HH:MM):");

    // Verificar disponibilidad del médico
    if (doctorEncontrado.disponibilidad) {
        alert(`Cita solicitada:\nMédico: ${doctorEncontrado.nombre}\nFecha: ${fechaCita}\nHora: ${horaCita}`);
    } else {
        alert(`Lo sentimos, ${doctorEncontrado.nombre} no está disponible en este momento.`);
    }
}

// Llama a la función al cargar la página
window.onload = solicitarTurno;