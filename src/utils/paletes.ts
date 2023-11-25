

interface Paleta{
    nombre:string;
    color:string[];
}

interface PaletasCromaticas{
    colores : Paleta[]
} 


export const allPaletas: PaletasCromaticas = {
    colores:[
        {
            nombre: "paleta1",
            color: ["#0A1128","#280657","#001F54","#034078","#1282A2"]
        }
    ]
}