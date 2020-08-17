class Estatico{
  constructor(x_, cantPosiciones_){
      this.posiciones = [];
    for (let i = 0; i < cantPosiciones_; i++) {
      this.posiciones.push(new Posicion());
    }
    this.frameActual = 0;
    this.id = x_;
    this.imagen = loadImage ("assets/estatico/MOVER" + this.id + ".png");
    this.enUso = false;
    this.cantUsados = 0;
    this.dibujarEn = 1000;
    this.cantPosiciones = cantPosiciones_;

    this.incializarBoton();
    this.sonido = new Sonido();
    }

    incializarBoton(){
      this.tiempoDeVida = 450;//---- TIEMPO DE ANIMACION
      this.tiempoDeVida_actual = 0;
      this.tamBoton = max(this.imagen.width,this.imagen.height);
    }
  iniciar(x_, y_, inicio_, final_){
    this.enUso = true;
    this.posiciones[this.cantUsados].iniciar(this.cantUsados,x_, y_, inicio_, final_);
    if (this.cantUsados<this.cantPosiciones-1){
      this.cantUsados++;
    }
  }
  revisarClick(){
      this.tamBoton = max(this.imagen.width,this.imagen.height);
      if(dist(this.posiciones[0].posX , this.posiciones[0].posY,mouseX,mouseY)<this.tamBoton/2.0){
          this.tiempoDeVida_actual = this.tiempoDeVida;
          this.frameActual = 0;
          this.sonido.tocar();
      }
  }

  actualizar(){
    var frame_ = this.frameActual;
    if(this.tiempoDeVida_actual>0){
        this.frameActual++;
        this.enUso = true;
        this.tiempoDeVida_actual = this.tiempoDeVida_actual-1;
    }else{
        this.enUso = false;
    }

    this.dibujarEn = 1000;
    if(this.frameActual>this.posiciones[this.posiciones.length-1].frameFinal){
        this.frameActual = 0;
    }
    for ( let i = 0; i < this.cantUsados; i++ ) {
      this.dibujarEn = this.posiciones[i].actualizar(frame_);
      if (this.dibujarEn<1000){
          break;
     }
    }
    this.sonido.actualizar();
  }

  dibujar(){
    if (this.enUso) {
        if (this.dibujarEn<this.posiciones.length) {
            push();
            translate(this.posiciones[this.dibujarEn].posX , this.posiciones[this.dibujarEn].posY);
            imageMode(CENTER);
            image(this.imagen, 0, 0);
            pop();
          }
  }
  /*push();
  translate(this.posiciones[0].posX , this.posiciones[0].posY);
  fill(255,0,0,100);
  ellipse(0,0,10,10);
  pop();*/
}

}
//-----------------------------------------------------
