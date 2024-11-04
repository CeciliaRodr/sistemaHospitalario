const salas = [

{
        id: "1",
        disponibilidad: true
    },

    {
        id: "2",
        disponibilidad: true
    },

    {
        id: "3",
        disponibilidad: false
    },

    {
        id: "4",
        disponibilidad: true
    },

    {
        id: "5",
        disponibilidad: false
    }
]

export function eleccionDeSala(salas) {
    let sala;
    do {
        sala = salas[Math.floor(Math.random() * salas.length)];
        if (!sala.disponibilidad) {
            console.log("La sala " + sala.id + " no está disponible. Asignando otra...");
        }
    } while (!sala.disponibilidad);

    console.log("Sala asignada:", sala.id);
    return sala;
}
        
export {salas}
