class Animal{

    constructor(raza, numPatas, color, esSalvaje, tipoDieta, sonido){
        this.raza = raza;
        this.numPatas = numPatas;
        this.color = color;
        this.esSalvaje = esSalvaje;
        this.tipoDieta = tipoDieta;
        this.sonido = sonido;
    }

    comer(kilosDeComida){
        console.log(`Soy un ${this.raza} y voy a comer ${kilosDeComida} kg de comida`);
    }

    comunicarse(){
        console.log(`¡${this.sonido}!`);
    }

    dormir(horasDeSuenio){

    }

    hacerDelBanio(){

    }

}

let perro = new Animal("Perro", 4, "Cafe", false, "Carnívoro", "woooof");

perro.comer(1);
perro.comunicarse();


console.log(`Mi animal es: ${perro.tipoDieta}`);
perro.tipoDieta = 'Hervíboro';
console.log(`Mi animal es: ${perro.tipoDieta}`);
