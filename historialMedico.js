import { pacientes } from "./pacientes.js";



//(pacientes[0].historialMedico)

for (let index = 0; index < pacientes.length; index++) {
    const pacienteActual = pacientes[index];   
}
/*pacientes.forEach(pacientes => {
    console.table(
        "Paciente: " + pacientes.nombre + ", Historial Médico: " + pacientes.historialMedico
    ); 
});*/ //muestra todos


console.log(pacientes[2].nombre + ": " + pacientes[2].historialMedico)