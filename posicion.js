class Posicion{

  constructor(){
  }

  iniciar(id_ , x_ , y_ , ini_ , fin_ ){
    this.id = id_;
    this.enUso = true;
    this.posX = x_;
    this.posY = y_;
    this.frameInicial = ini_;
    this.frameFinal = fin_;
    }
  actualizar(frame_){
    this.vuelve = 1000;
    if(frame_ >= this.frameInicial && frame_ <= this.frameFinal){
       this.vuelve = this.id;
     }
    return this.vuelve;
  }

  getX(){
    return this.posX;
  }
  getY(){
    return this.posY;
  }
}
