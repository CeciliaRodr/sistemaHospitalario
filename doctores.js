import prompt_sync from 'prompt-sync';
const prompt = prompt_sync();

export const doctores = [
   {
        name: "Meredith Grey",
        id: 1,
        especialidad: "Medicina general",
        cantDeCitas: 15,
        disponibilidad: true
},
    {
        name: "Alex Karev",
        id: 2,
        especialidad: "Pediatría",
        cantDeCitas: 10,
        disponibilidad: true
},
    {
        name: "Derek Sheperd",  
        id: 3,
        especialidad: "Neurología",
        cantDeCitas: 8,
        disponibilidad: false
},
    {
        name: "Cristina Yang", 
        id: 4,
        especialidad: "Cardiología",
        cantDeCitas: 12,
        disponibilidad: false
}, 
    {
        name: "Mark Sloan",
        id: 5,
        especialidad: "Cirugía",
        cantDeCitas: 5,
        disponibilidad: false
}, 
]

export function doctorConMasCitas(doctores) {
    let doctorConMasCitas = doctores[0]; 

    for (let i = 1; i < doctores.length; i++) {
        if (doctores[i].cantDeCitas > doctorConMasCitas.cantDeCitas) {
            doctorConMasCitas = doctores[i];
        }
    }

    console.log(doctorConMasCitas.name, "tuvo un total de", doctorConMasCitas.cantDeCitas, "citas.");
}
console.log(doctorConMasCitas(doctores)); //solo está para que funcione.

export function eliminarDoctorPorId(id, doctores) {
    const existeDoctor = doctores.some(doctor => doctor.id === id);

   if (!existeDoctor) {
      console.log('El ID ' + id + ' ingresado no corresponde a un doctor.');
   } else {
       const doctoresActualizados = doctores.filter(doctor => doctor.id !== id);
       console.table(doctoresActualizados);
   }
}
const eleccionPorID = Number(prompt('Ingrese el ID del doctor que desea eliminar: '))
eliminarDoctorPorId(eleccionPorID, doctores); 


