//Archivo principal
/*Sistema de Hospital: Diseña una aplicación para gestionar un hospital, donde se
puedan cargar médicos, pacientes y salas de atención. Además de asignar médicos y
pacientes a las salas, implementa un sistema de citas. Los pacientes deben poder
solicitar citas con médicos para una fecha y hora específica, y el sistema debe verificar
la disponibilidad del médico. Permite ver el historial de citas de un paciente y los
médicos con más consultas.*/
//const prompt = require('prompt-sync')();

import { doctores } from "./doctores.js";
import { pacientes } from "./pacientes.js";
import { salas } from "./salas.js";


const eleccionDeSala = doctores[Math.floor(Math.random()* doctores.length)]
//console.log(eleccionDeSala);
if (eleccionDeSala.disponibilidad == false) {
    console.log('El doctor no está disponible');
} else {
    console.log(eleccionDeSala);
    
}

