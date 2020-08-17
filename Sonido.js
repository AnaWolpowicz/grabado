var sonidos = [];
sonidos.push("Botones.mp3");
sonidos.push("Disipador 1.mp3");
sonidos.push("Disipador.mp3");
sonidos.push("Engranaje.mp3");
sonidos.push("Ganchitos.mp3");
sonidos.push("Martillo.mp3");
sonidos.push("Rozamiento.mp3");
sonidos.push("Viejo Timbre.mp3");
class Sonido{
    constructor(){
        let alguno = parseInt(random(sonidos.length));
        this.sonido = loadSound('assets/sonidos/'+sonidos[alguno]);
        this.tiempoDeVida = 0;
        this.ejecutandose = false;
    }

    tocar(){
        this.sonido.play();
        this.tiempoDeVida = 90;//------ cantidad de frames de duracion
        this.ejecutandose = true;
    }

    actualizar(){
        if(this.tiempoDeVida<=0 && this.ejecutandose){
            this.sonido.stop();
            this.ejecutandose = false;
        }else{
            this.tiempoDeVida--;
        }


    }
}
