function Carro (modelo, fabricante, anoModelo, anoFabricação) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricação = anoFabricação;
}

Carro.prototype.acelerar = function() {
    console.log("vrum");
}

function CarroEsportivo(modelo, fabricante, anoModelo, anoFabricação, velocidadeMaxima) {
    Carro.call(this, modelo, fabricante, anoModelo, anoFabricação);
    this.velocidadeMaxima = velocidadeMaxima;
}

CarroEsportivo.prototype = Object.create(Carro.prototype);
CarroEsportivo.prototype.constructor = CarroEsportivo;

CarroEsportivo.prototype.acelerar = function() {
    console.log("Vrumm vrummmmm");
}

function CarroEletrico(modelo, fabricante, anoModelo, anoFabricação, velocidadeMaxima) {
    Carro.call(this, modelo, fabricante, anoModelo, anoFabricação);
    this.velocidadeMaxima = velocidadeMaxima;
}

CarroEletrico.prototype = Object.create(Carro.prototype);
CarroEletrico.prototype.constructor = CarroEletrico;

CarroEletrico.prototype.acelerar = function() {
    console.log("vrumm vrumm");
}

const carroJoaquim = new Carro("Compass", "Jeep", 2018, 2016);
const carroMarina = new Carro ("Fiesta", "Ford", 2020, 2019);
const carroEsportivo = new CarroEsportivo("Ferrari", "Ferrari", 2021, 2020, 300);
const carroEletrico = new CarroEletrico("Caoa Chery iCar", "Chery", 2022, 2017, 100);

console.log(carroJoaquim);
carroJoaquim.acelerar();
console.log(carroMarina);
carroMarina.acelerar();
console.log(carroEsportivo);
carroEsportivo.acelerar();
console.log(carroEletrico);
carroEletrico.acelerar();
