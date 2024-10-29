export const doctores = [
   {
        name: "Meredith Grey",
        especialidad: "Medicina general",
        cantDeCitas: 15,
        disponibilidad: true
},

    
    {
        name: "Alex Karev",
        especialidad: "Pediatría",
        cantDeCitas: 10,
        disponibilidad: true
},

    
    {
        name: "Derek Sheperd",
        especialidad: "Neurología",
        cantDeCitas: 8,
        disponibilidad: false
},

    
    {
        name: "Cristina Yang",
        especialidad: "Cardiología",
        cantDeCitas: 12,
        disponibilidad: false
}, 


    {
        name: "Mark Sloan",
        especialidad: "Cirugía",
        cantDeCitas: 5,
        disponibilidad: false
}, 

]

let doctorConMasCitas = doctores[0];

for (let i = 1; i < doctores.length; i++) {
    if (doctores[i].cantDeCitas > doctorConMasCitas.citas) {
        doctorConMasCitas = doctores[i];
    }
}

console.log(doctorConMasCitas.name, " tuvo un total de ", doctorConMasCitas.cantDeCitas, "citas.");

