class Girador{
    constructor(id_){
        this.id = id_;
        this.enUso = false;
        this.seno = 0;
        this.angulo = 0;
        this.sonido = new Sonido();
    }

    iniciar(x_, y_, v_){
        this.enUso = true;
        this.imagen = loadImage ("assets/girador/GIRAR" + this.id + ".png");
        this.x = x_;
        this.y = y_;
        this.v = v_;
        this.incializarBoton();
    }

    incializarBoton(){
        this.tiempoDeVida = 180;//---- TIEMPO DE ANIMACION
        this.tiempoDeVida_actual = 0;
        this.tamBoton = max(this.imagen.width,this.imagen.height);
    }
    revisarClick(){
        this.tamBoton = max(this.imagen.width,this.imagen.height);
        if(dist(this.x , this.y,mouseX,mouseY)<this.tamBoton/2.0){
            this.tiempoDeVida_actual = this.tiempoDeVida;
            this.sonido.tocar();
        }
    }
    actualizar(){
        if(this.tiempoDeVida_actual>0){
            this.enUso = true;
            this.tiempoDeVida_actual = this.tiempoDeVida_actual-1;
        }else{
            this.enUso = false;
        }
        if (this.enUso) {
            this.angulo +=  this.v;
        }
        this.sonido.actualizar();
    }

    dibujar(){
        if (this.enUso) {
            push();
            translate(this.x , this.y);
            rotate(this.angulo);
            imageMode(CENTER);
            image(this.imagen, 0, 0);
            pop();
        }
        /*push();
        translate(this.x , this.y);
        fill(0,255,0,50);
        ellipse(0,0,10,10);
        pop();*/
    }



}
