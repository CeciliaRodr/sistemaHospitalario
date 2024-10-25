//Archivo principal
//Sistema de Hospital: Dise-a una aplicacion para gestionar un hospital, donde se puedan:
//cargar medicos, pacientes y salas de atencion. 
//Ademas de asignar medicos y pacientes a las salas, implementa un sistema de citas.
// Los pacientes deben poder solicitar citas con medicos para una fecha y hora especifica, y el sistema debe verificar la disponibilidad del medico. 
//Permite ver el historial de citas de un paciente y los medicos con mas consultas.*/
import prompt_sync from 'prompt-sync';
import { doctores } from "./doctores.js";
import { pacientes } from "./pacientes.js";
import { salas } from "./salas.js";

const prompt = prompt_sync();


//ingresamos doctores a la cartilla
function agregarElemento(elem, arreglo) {
    arreglo.push(elem);
    
}

function menuPrincipal() {

    console.log("*Ingrese 1 si usted es parte del personal y desea ingresar un médico a la cartilla. \n" +
        "*Ingrese 2 si usted desea ingresar un paciente al sistema. \n")
  }
let eleccion = 1;
while (eleccion !=0) {
    menuPrincipal();
    eleccion = Number(prompt());
    if (eleccion === 1) {
        const doctor = {
            name: prompt("Ingrese nombre: "),
            especialidad: prompt('Ingrese especialidad: '),
            disponibilidad: Boolean(prompt("Ingrese disponibilidad: "))
        }

        agregarElemento(doctor, doctores)

        console.table(doctores);

    } else { 
        const paciente = {
            name: prompt("Ingresa el nombre del paciente: "),
            motivo: prompt("Ingrese el motivo de la asistencia del paciente: "),
            historialMedico: [],
        }
    
    agregarElemento (paciente,pacientes)
console.table(pacientes)
}
}
pacientes.forEach(paciente => { motivo.push(paciente)});
    
for (let index = 0; index < pacientes.length; index++) {
    const element = historialMedico[index];
    
}




/*const doctorEncontrado = doctores.find(nombreDoctor); 
if (!doctorEncontrado) {
    alert("Intenta nuevamente")
} else {
    if (doctorEncontrado.disponibilidad) {
        
    } else {
        let fechaCita = prompt("Ingrese la fecha de la cita (formato: YYYY-MM-DD):");
    let horaCita = prompt("Ingrese la hora de la cita (formato: HH:MM):");
    }
}/*

    }
}






alert('El archivo main.js se ha cargado correctamente');
console.log('Archivo main.js cargado');*/


//alert(nombrePaciente, nombreDoctor);

//el usuario saca turno
/*function solicitarTurno() {
    let nombrePaciente = prompt("Ingrese su nombre");
    let motivoConsulta = prompt("Ingrese motivo de su consulta")
    let nombreDoctor = prompt('Ingrese el nombre de uno de los doctores de nuestra cartilla:\n ' +
            '* Meredith Grey\n '+
            '* Derek Shepherd\n' +
            '* Cristina Yang\n' +
            '* Alex Karev\n' +
            '* Mark Sloan\n' +
            '');*/