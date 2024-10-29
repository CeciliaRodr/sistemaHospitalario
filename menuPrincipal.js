import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();
import { doctores } from "./doctores.js";
import { pacientes } from "./pacientes.js";
import { salas } from "./salas.js";
import chalk from 'chalk';
import { eliminarPacientePorId } from "./pacientes.js";
import { eliminarDoctorPorId } from './doctores.js';
import { solicitarTurno } from './solicitarTurno.js';

function agregarElemento(elem, arreglo) {
    arreglo.push(elem);   
}

function menuPrincipal() {
    console.log(chalk.blueBright('¡Bienvenidos al Sistema Hospitalario!'));
    console.log("*Ingrese 1 si usted es parte del personal y desea ingresar un médico a la cartilla. \n" +
        "*Ingrese 2 si usted desea eliminar un médico del sistema. \n" +
        "*Ingrese 3 si usted desea ingresar un paciente al sistema. \n" +
        "*Ingrese 4 si usted desea eliminar un paciente del sistema \n");
  }

         agregarElemento (paciente,pacientes)
        console.table(pacientes)

        const eleccionID = Number(prompt('Ingrese el ID del paciente que desea eliminar: '))
        eliminarPacientePorId(eleccionID, pacientes);  
        console.table(pacientesActualizados)    
        
    

const eleccionID = Number(prompt('Ingrese el ID del paciente que desea eliminar: '))

console.log(eliminarPacientePorId(eleccionID,pacientes));


    





const doctorEncontrado = doctores.find(nombreDoctor); 
if (!doctorEncontrado) {
    alert("Intenta nuevamente")
} else {
    if (doctorEncontrado.disponibilidad) {
        
    } else {
        let fechaCita = prompt("Ingrese la fecha de la cita (formato: YYYY-MM-DD):");
    let horaCita = prompt("Ingrese la hora de la cita (formato: HH:MM):");
    }
}

    


//pacientes.forEach(paciente => { motivo.push(paciente)});            //pacientes.forEach(paciente => { motivo.push(paciente)});