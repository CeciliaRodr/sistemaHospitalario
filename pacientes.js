const pacientes = [
    {
        name:"Lisa Simpson",
        
        historialMedico: ["Migrañas", "Vómitos", "Esguince"]
    },

    {
        name:"Olga perez",
        
        historialMedico: ["Migrañas", "fiebre", "mareos"]
    },

    {
        name:"Juan sosa",
        historialMedico: ["bronquitis", "Vómitos", "gastritis"]
    },

    {
        name:"Milena garcia",
        historialMedico: ["dolor de estomago", "agitacion", "Esguince"]
    },

    {
        name:"Magui Simpson",
        historialMedico: ["cefalea", "Vómitos", "dolor de oidos "]
    },
    
]

//console.log(pacientes[0].historialMedico)
//iterar para mostrar todo
for (let index = 0; index < pacientes.length; index++) {
    const element = array[index];   
}
pacientes.forEach(paciente => {
    console.log(
        "Paciente: " + paciente.name + ", Historial Médico: " + paciente.historialMedico //.join(', ')
    ); 
});

export {pacientes}