import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
import { doctores } from "./doctores.js";
import { salas } from "./salas.js";

const turnos = [];

function eleccionDeSala(salas) {
    let sala;
    do {
    sala = salas[Math.floor(Math.random() * salas.length)];
        if (!sala.disponibilidad) { 
            console.log("La sala " + sala.id + " no está disponible. Asignando otra...");
        }
    } while (!sala.disponibilidad); 

    console.log("Sala asignada:", sala.id); 
    return sala; 
}
eleccionDeSala(salas);

    export function solicitarTurno(salas){ 
        console.log('BIENVENIDO AL SISTEMA!')
    let nombrePaciente = prompt("Ingrese su nombre: ");
    let motivoConsulta = prompt("Ingrese motivo de su consulta: ")
    let fechaCita = prompt("Ingrese la fecha respetando el formato DD/MM: ");
    let horaCita = prompt("Ingrese la hora respetando  el formato HH:MM: ");
    let nombreDoctor = prompt('Ingrese el nombre de uno de los doctores de nuestra cartilla:\n ' +
            '* Meredith Grey\n '+
            '* Derek Shepherd\n' +
            '* Cristina Yang\n' +
            '* Alex Karev\n' +
            '* Mark Sloan\n' +
            '');

     
            function verificarDisponibilidad(nombreDoctor) {
                const doctor = doctores.find(doc => doc.name === nombreDoctor);
            
                // Verificamos si el doctor fue encontrado
                if (!doctor) {
                    console.log('El doctor no fue encontrado.');
                    return;
                }
            
                // Verificamos la disponibilidad
                if (doctor.disponibilidad) {
                    console.log('El doctor ' + nombreDoctor + ' se encuentra disponible.');
                } else {
                    console.log('Lo sentimos, el doctor ' + nombreDoctor + ' no está disponible.');
                }
            }
    console.log(nombrePaciente + ' tu turno con el doctor ' + nombreDoctor + ' es el día: ' + fechaCita + ' a las ' + horaCita + ' en la sala: ' + salaElegida.id)     

     }
    const salaElegida = eleccionDeSala(salas);           
    const turno = {
        nombrePaciente,
        nombreDoctor,
        fechaCita,
        horaCita,
        sala: salas
        };
        turnos.push(turno) 
     solicitarTurno(salas)
            
    


console.log(solicitarTurno(salas))

