//Archivo principal
/*Sistema de Hospital: Dise-a una aplicacion para gestionar un hospital, donde se
puedan cargar meicos, pacientes y salas de atencion. Ademas de asignar medicos y
pacientes a las salas, implementa un sistema de citas. Los pacientes deben poder
solicitar citas con medicos para una fecha y hora especifica, y el sistema debe verificar
la disponibilidad del medico. Permite ver el historial de citas de un paciente y los
medicos con mas consultas.*/
import prompt_sync from 'prompt-sync';
import { doctores } from "./doctores.js";
import { pacientes } from "./pacientes.js";
import { salas } from "./salas.js";

const prompt = prompt_sync();

function agregarElemento(elem, arreglo) {
    arreglo.push(elem);
    
}

function menuDoctor() {

    console.log("Ingrese 1 si desea ingresar un médico");
  
}

let eleccion = 1;
while (eleccion !=0) {
    menuDoctor();
    eleccion = Number(prompt());
    if (eleccion === 1) {
        const doctor = {
            name: prompt("Ingrese nombre: "),
            especialidad: prompt('Ingrese especialidad: '),
            disponibilidad: Boolean(prompt("Ingrese disponibilidad: "))
        }

        agregarElemento(doctor, doctores)
        
    }
    
}





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
/*if (!doctorEncontrado) {
    alert("Intenta nuevamente")
} else {
    if (doctorEncontrado.disponibilidad) {
        
    } else {
        
    } ()
}*/





//alert(nombrePaciente, nombreDoctor)

