import promptSync from "prompt-sync";
const prompt = promptSync();

const pacientes = [
    {
        nombre:"Lisa Simpson",
        id: 1,
        historialMedico: ["15/10 cita por Migrañas", " 13/01 cita por Vómitos", " 05/02 cita por Esguince"] //FECHAS DE CITAS
    },

    {
        nombre:"Olga perez",
        id: 2,
        historialMedico: ["08/06 cita por Migrañas", " 07/12 cita por Fiebre", " 07/08 cita por Mareos"]
    },

    {
        nombre:"Juan Sosa",
        id: 3,
        historialMedico: ["25/12 cita por Bronquitis", " 13/01 cita por Vómitos", " 04/05 cita por Gastritis"]
    },

    {
        nombre:"Milena Garcia",
        id: 4,
        historialMedico: ["02/05 cita por chequeo de embarazo", " 06/01 Agitacion", " 19/09 Esguince"]
    },

    {
        nombre:"Maggie Simpson",
        id: 5,
        historialMedico: ["14/08 cita por Cefalea", " 18/11 cita por Vómitos", " 09/06 cita por Dolor de oidos "]
    },
    
//console.table(pacientes)
]

export function eliminarPacientePorId(id, pacientes) {
    const existePaciente = pacientes.some(paciente => paciente.id === id);
   if (!existePaciente) {
       console.log('El ID ' + id + ' ingresado no corresponde a un paciente');
   } else {
       const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
       console.table(pacientesActualizados);
   }
const eleccionID = Number(prompt('Ingrese el ID del paciente que desea eliminar: '))
eliminarPacientePorId(eleccionID, pacientes);  
}

export {pacientes}
