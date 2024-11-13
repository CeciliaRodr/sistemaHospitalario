import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
import { doctores, eliminarDoctorPorId, doctorConMasCitas, modificarDoctorPorId, verificarDisponibilidadDoctor } from "./doctores.js";
import { pacientes } from "./pacientes.js";
import { salas, eleccionDeSala } from "./salas.js";
import chalk from 'chalk';
import { solicitarTurno, cancelarCitaPorId, turnos } from "./solicitarTurno.js";

//PROBLEMAS CON LAS IMPORTACIONES
eleccionDeSala(salas);

function agregarDoctor() {
    const name = prompt("Ingrese el nombre del doctor: ");
    const id = Number(prompt('Ingrese el ID del doctor: '));
    const especialidad = prompt("Ingrese la especialidad: ");
    const cantDeCitas = Number(prompt("Ingrese la cantidad de citas: "));
    const disponibilidad = prompt("Está disponible? (true/false): ") === 'true';
    doctores.push({ name, id, especialidad, cantDeCitas, disponibilidad });
    console.log("El dato ha sido agregado correctamente.");
    console.table(doctores);

}



function agregarPaciente() {
    const nombre = prompt("Ingrese el nombre del paciente: ");
    const id = prompt("Ingrese el ID del paciente: ");
    const historialMedico = prompt("Ingrese el historial médico: ");
    pacientes.push({ nombre, id, historialMedico });
    console.log("El paciente fue agregado correctamente.");
    console.table(doctores);
}

function eliminarPacientePorId() {
    const id = prompt("Ingrese el ID del paciente a eliminar: ");
    const nuevoArrayPacientes = pacientes.filter(pac => pac.id !== id);
    if (nuevoArrayPacientes.length === pacientes.length) {
        console.log("El ID ingresado no existe.");
    } else {
        console.log("El dato ha sido eliminado.");
        pacientes.length = 0;
        pacientes.push(...nuevoArrayPacientes);
        console.table(pacientes);
    }
}

function mostrarDoctores() {
    console.table(doctores);
}

function mostrarPacientes() {
    console.table(pacientes);
}


function menu() {
    console.log("\n--- Sistema Hospitalario ---");
    console.log("1. Agregar un doctor");
    console.log("2. Eliminar un doctor");
    console.log("3. Mostrar doctores");
    console.log("4. Agregar un paciente");
    console.log("5. Eliminar un paciente");
    console.log("6. Mostrar pacientes");
    console.log("7. Solicitar un turno");
    console.log("8. Modificar un médico");
    console.log("9. Comprobar disponibilidad de un médico");
    console.log("10. Si desea cancelar su turno");
    console.log("0. Salir");
    const opcion = Number(prompt("Seleccione una opción: "));
    return opcion;
}

let opcion;
do {
    opcion = menu();
    switch (opcion) {
        case 1:
            agregarDoctor();
            break;
        case 2:
            eliminarDoctorPorId();
            break;
        case 3:
            mostrarDoctores();
            break;
        case 4:
            agregarPaciente();
            break;
        case 5:
            eliminarPacientePorId();
            break;
        case 6:
            mostrarPacientes();
            break;
        case 7:
            solicitarTurno();
            break;
        case 8:
            modificarDoctorPorId();
            break;
        case 9:
            verificarDisponibilidadDoctor();
            break;
        case 10:
            cancelarCitaPorId(turnos);
            break;
        case 0:
            console.log("Adiós.");
            break;
        default:
            console.log("Opción no disponible.");
    }
} while (opcion !== 0);


