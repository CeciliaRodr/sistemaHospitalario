import { doctores } from "./doctores.js";
import prompt_sync from 'prompt-sync';

const prompt = prompt_sync();

const turnos = []

function solicitarTurno()
 {
    let nombrePaciente = prompt("Ingrese su nombre: ");
    let motivoConsulta = prompt("Ingrese motivo de su consulta: ")
    let nombreDoctor = prompt('Ingrese el nombre de uno de los doctores de nuestra cartilla:\n ' +
            '* Meredith Grey\n '+
            '* Derek Shepherd\n' +
            '* Cristina Yang\n' +
            '* Alex Karev\n' +
            '* Mark Sloan\n' +
            '')
    
         if (doctores.disponibilidad === true) {
            let fechaCita = prompt("Ingrese la fecha respetando el formato DD/MM:");
            let horaCita = prompt("Ingrese la hora respetando  el formato HH:MM: ");
            
         }   else { console.log('Lo sentimos, el doctor ' + nombreDoctor + ' no está disponible. ')}

    const turno = {
        nombrePaciente,
        motivoConsulta,
        nombreDoctor,
        fechaCita,
        horaCita
        } 
        turnos.push(turno) 
        console.log('Turno agregado')
       

       
        console.log(nombrePaciente + ' tu turno con el doctor ' + nombreDoctor + ' es el día: ' + fechaCita + ' a las ' + horaCita)     
}


console.log(solicitarTurno("Luisa","Meredith Grey","Embarazo"))
