import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
import { doctores } from "./doctores.js";
import { eleccionDeSala, salas } from "./salas.js";

export let turnos = [
    {
        nombrePaciente: "Juan Pérez",
        nombreDoctor: "Dr. Rodríguez",
        fechaCita: "2024-11-12",
        horaCita: "10:00",
        idTurno: 1,
        sala: "Sala 1"
    },
    {
        nombrePaciente: "María López",
        nombreDoctor: "Dra. Martínez",
        fechaCita: "2024-11-12",
        horaCita: "11:00",
        idTurno: 2,
        sala: "Sala 2"
    },
    {
        nombrePaciente: "Carlos Ruiz",
        nombreDoctor: "Dr. Fernández",
        fechaCita: "2024-11-13",
        horaCita: "09:30",
        idTurno: 3,
        sala: "Sala 3"
    },
    {
        nombrePaciente: "Ana Gómez",
        nombreDoctor: "Dra. Gutiérrez",
        fechaCita: "2024-11-13",
        horaCita: "10:30",
        idTurno: 4,
        sala: "Sala 4"
    }
];



eleccionDeSala(salas);

export function solicitarTurno(salas) {
    console.log('BIENVENIDO AL SISTEMA!')
    let nombrePaciente = prompt("Ingrese su nombre: ");
    let motivoConsulta = prompt("Ingrese motivo de su consulta: ")
    let fechaCita = prompt("Ingrese la fecha respetando el formato DD/MM: ");
    let horaCita = prompt("Ingrese la hora respetando  el formato HH:MM: ");
    let idTurno = Number(prompt("Ingrese un id: "));

    console.log("Cartilla de doctores disponibles");
    const cartillaDeDoctores = doctores.map(doctor => doctor.name);
    console.log(cartillaDeDoctores);
    let nombreDoctor = prompt('Ingrese el nombre del doctor con el que se quiere atender: ');
    console.log(nombrePaciente + ' tu turno con el doctor ' + nombreDoctor + ' es el día: ' + fechaCita + ' a las ' + horaCita)
    const turno = {
        nombrePaciente,
        nombreDoctor,
        fechaCita,
        horaCita,
        idTurno,
        sala: salas
    };
    turnos.push(turno)
}
const salaElegida = eleccionDeSala(salas);



export function cancelarCitaPorId(turnos) {
    console.table(turnos);
    const id = Number(prompt("Ingrese el id de su turno: "));
    const existeTurno = turnos.some(turno => turno.idTurno === id);
   if (!existeTurno) {
       console.log('El ID ' + id + ' ingresado no corresponde a un turno');

   } else {
       const turnosActualizados = turnos.filter(turno => turno.idTurno !== id);
       turnos = turnosActualizados;
       console.table(turnos);
   }

}


