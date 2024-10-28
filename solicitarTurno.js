import { doctores } from "./doctores.js";
import prompt_sync from 'prompt-sync';

const prompt = prompt_sync();

const turnos = []

function solicitarTurno() {
    let nombrePaciente = prompt("Ingrese su nombre: ");
    let motivoConsulta = prompt("Ingrese motivo de su consulta: ")
    let nombreDoctor = prompt('Ingrese el nombre de uno de los doctores de nuestra cartilla:\n ' +
            '* Meredith Grey\n '+
            '* Derek Shepherd\n' +
            '* Cristina Yang\n' +
            '* Alex Karev\n' +
            '* Mark Sloan\n' +
            '')

           const turno = {
                nombrePaciente,
                motivoConsulta,
                nombreDoctor
            }
            turnos.push(turno) 

        }
    
        const doctorSeleccionado = doctores.find(doctor => doctor === nombreDoctor);
 (!doctorSeleccionado) {
    console.log('El nombre ingresado no es correcto, ingrese nuevamente');
    }       


//console.log(solicitarTurno('Luis Gomez', 'Meredith Grey', 'tumor'))
//console.log()