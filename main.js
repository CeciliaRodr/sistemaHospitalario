//Archivo principal
/*Sistema de Hospital: Dise-a una aplicacion para gestionar un hospital, donde se
puedan cargar meicos, pacientes y salas de atencion. Ademas de asignar medicos y
pacientes a las salas, implementa un sistema de citas. Los pacientes deben poder
solicitar citas con medicos para una fecha y hora especifica, y el sistema debe verificar
la disponibilidad del medico. Permite ver el historial de citas de un paciente y los
medicos con mas consultas.*/
const prompt = require('prompt-sync')();

import { doctores } from "./doctores.js";
import { pacientes } from "./pacientes.js";
import { salas } from "./salas.js";

function solicitarTurno() {
    let nombrePaciente = prompt("Ingrese su nombre");
    let motivoConsulta = prompt("Ingrese motivo de su consulta")
    let nombreDoctor = prompt('Ingrese el nombre de uno de los doctores de nuestra cartilla:\n ' +
            '* Meredith Grey\n '+
            '* Derek Shepherd\n' +
            '* Cristina Yang\n' +
            '* Alex Karev\n' +
            '* Mark Sloan\n' +
            '');

}
const nuevoPaciente = {
    nombre: nombrePaciente,
    consulta: motivoConsulta
};

pacientes.push(nuevoPaciente)

const doctorEncontrado = doctores.find(nombreDoctor); 

//si se necesita el prompt, y sino como solicitaria el turno
//por qué no lo puedo ver en el navegador
//si es importante la mayuscula
//orden 
//disponibilidad del doctor está indicada en el arreglo, en el objeto



//alert(nombrePaciente, nombreDoctor)

