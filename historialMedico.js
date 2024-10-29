import { pacientes } from "./pacientes.js";
import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();







/*export function eliminarPacientePorId(id, pacientes) {
    const eleccion = Number(prompt('Ingrese el ID del paciente a eliminar: '));
    const existePaciente = pacientes.some(paciente => paciente.id === id);

    if (!existePaciente) {
        console.log(pacientes.id);
   } else {
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
        console.table(pacientesActualizados);
    }

eliminarPacientePorId(eleccion, pacientes);
}*/



/*for (let index = 0; index < pacientes.length; index++) {
    const pacienteActual = pacientes[index];   
}

//console.table(pacientesActualizados)

/*pacientes.forEach(pacientes => {
    console.table(
        "Paciente: " + pacientes.nombre + ", Historial Médico: " + pacientes.historialMedico
    ); 
});*/ //muestra todos
//(pacientes[0].historialMedico)