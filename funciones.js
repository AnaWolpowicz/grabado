function preload() {
  fondo = loadImage('assets/fondocompleto.jpg');
}

//---------------------------------
function cargarLineas(){
	for (let i = 0; i < cantLinea; i++) {
		linea.push(new Linea(i));
	}


   //manito central
  linea[0].iniciar(384, 392, 0.006, -20);
  //ojo
  linea[1].iniciar(178, 565, 0.003, -30);
  //Pajarito
  linea[2].iniciar(348, 645, 0.007, 45);
  //ojoderecha
  linea[3].iniciar(680, 230, 0.004, 35);
  //Ventana pajaro
  linea[4].iniciar(251, 477, 0.002, 20);
  //ojo bajo
  linea[5].iniciar(318, 743, 0.005, -30);
  //mano izq arriba
  linea[6].iniciar(63, 337, 0.006, -25);

}

function actualizarLineas(){
	for (let i = 0; i < linea.length; i++) {
	    linea[i].actualizar();
	    linea[i].dibuja();
	  }
}

function mousePressedLineas(){
	for (let i = 0; i < linea.length; i++) {
	    linea[i].revisarClick();
	  }
}
//-----------------------------------------------
function cargarPendulos(){
	for (let i = 0; i < cantPendulos; i++) {
		pendulo.push(new Pendulo(i));
	}
	 pendulo[0].iniciar(65, 218, 0.001);
	 pendulo[1].iniciar(176, 502, 0.001);
	 pendulo[2].iniciar(821, 502, 0.001);
	 pendulo[3].iniciar(693, 196, 0.001);
	 pendulo[4].iniciar(348, 511, 0.002);
	 pendulo[5].iniciar(557, 616, 0.0005);
	 pendulo[6].iniciar(356, 289, 0.003);

}

function actualizarPendulos(){
	for (let i = 0; i < pendulo.length; i++) {
	    pendulo[i].actualizar();
	    pendulo[i].dibujar();
	  }
}
function mousePressedPendulos(){
	for (let i = 0; i < pendulo.length; i++) {
	    pendulo[i].revisarClick();
	  }
}
//-----------------------------------------------
function cargarGiradores(){
	for (let i = 0; i < cantGiradores; i++) {
		girador.push(new Girador(i));
	}
	 girador[0].iniciar(662, 419, 0.01);
	 girador[1].iniciar(75, 511, 0.008);
	 girador[2].iniciar(613, 561, 0.001);
	 girador[3].iniciar(873, 402, 0.001);
	 girador[4].iniciar(891, 377, 0.001);
	 girador[5].iniciar(221, 626, 0.01);

}

function actualizarGiradores(){
	for (let i = 0; i < girador.length; i++) {
	    girador[i].actualizar();
	    girador[i].dibujar();
	  }
}
function mousePressedGiradores(){
	for (let i = 0; i < girador.length; i++) {
	    girador[i].revisarClick();
	  }
}
//-----------------------------------------------
function cargarEstaticos(){

  for (let i = 0; i < cantEstaticos; i++) {
		estatico.push(new Estatico( i , 100));
	}
  // puerta
  estatico[0].iniciar(837, 609, 0, 10);
  estatico[0].iniciar(839, 609, 10, 20);
  estatico[0].iniciar(841, 609, 20, 30);
  estatico[0].iniciar(843, 609, 30, 40);
  estatico[0].iniciar(845, 609, 40, 50);
  estatico[0].iniciar(847, 609, 50, 60);

  // OJO bajo intermitente a oscuro
  estatico[1].iniciar(293, 565, 0, 10);
  estatico[1].iniciar(293, 567, 10, 20);
  estatico[1].iniciar(293, 566, 20, 30);
  estatico[1].iniciar(293, 568, 30, 40);
  estatico[1].iniciar(293, 566, 40, 50);
  estatico[1].iniciar(293, 567, 50, 60);
  estatico[2].iniciar(293, 565, 60, 70);
  estatico[1].iniciar(293, 566, 70, 80);
  estatico[2].iniciar(293, 565, 80, 90);
  estatico[2].iniciar(293, 567, 90, 100);

  // ojo centro
  estatico[3].iniciar(368, 192, 0, 10);
  estatico[3].iniciar(368, 197, 10, 20);
  estatico[3].iniciar(368, 192, 20, 30);
  estatico[3].iniciar(368, 197, 30, 40);
  estatico[3].iniciar(368, 192, 40, 50);
  estatico[3].iniciar(368, 197, 50, 60);
  estatico[3].iniciar(368, 192, 60, 70);
  estatico[3].iniciar(368, 197, 70, 80);

  //dado
  estatico[4].iniciar(662, 419, 0, 10);
  estatico[5].iniciar(662, 420, 10, 20);
  estatico[6].iniciar(662, 421, 20, 30);
  estatico[7].iniciar(662, 422, 30, 40);

  //personaje
  estatico[8].iniciar(829, 318, 0, 10);
  estatico[8].iniciar(815, 326, 10, 20);
  estatico[8].iniciar(800, 334, 20, 30);
  estatico[8].iniciar(775, 342, 30, 40);
  estatico[8].iniciar(773, 350, 40, 50);
  estatico[8].iniciar(772, 358, 50, 60);
  estatico[8].iniciar(771, 366, 60, 70);
  estatico[8].iniciar(770, 374, 70, 80);
  estatico[8].iniciar(769, 382, 80, 90);
  estatico[8].iniciar(768, 390, 90, 100);
  estatico[8].iniciar(767, 398, 100, 110);
  estatico[8].iniciar(766, 406, 110, 120);
  estatico[8].iniciar(765, 414, 120, 130);
  estatico[8].iniciar(765, 423, 130, 140);
  estatico[8].iniciar(764, 432, 140, 150);
  estatico[8].iniciar(763, 441, 150, 160);
  estatico[8].iniciar(763, 450, 160, 170);
  estatico[8].iniciar(762, 459, 170, 180);
  estatico[8].iniciar(761, 468, 180, 190);
  estatico[8].iniciar(761, 477, 190, 200);
  estatico[8].iniciar(760, 486, 200, 210);
  estatico[8].iniciar(760, 494, 210, 220);
  estatico[8].iniciar(759, 495, 220, 230);
  estatico[8].iniciar(758, 496, 230, 240);
  estatico[8].iniciar(757, 497, 240, 250);
  estatico[8].iniciar(756, 500, 250, 260);
  estatico[8].iniciar(755, 510, 260, 270);
  estatico[8].iniciar(754, 520, 270, 280);
  estatico[8].iniciar(753, 530, 280, 290);
  estatico[8].iniciar(752, 540, 290, 300);
  estatico[8].iniciar(751, 550, 300, 310);
  estatico[8].iniciar(750, 560, 310, 320);
  estatico[8].iniciar(749, 570, 320, 330);
  estatico[8].iniciar(748, 580, 330, 340);
  estatico[8].iniciar(747, 590, 340, 350);
  estatico[8].iniciar(746, 600, 350, 360);
  estatico[8].iniciar(745, 610, 360, 370);
  estatico[8].iniciar(744, 620, 370, 380);
  estatico[8].iniciar(743, 630, 380, 390);
  estatico[8].iniciar(742, 640, 390, 400);
  estatico[8].iniciar(741, 650, 400, 410);
  estatico[8].iniciar(740, 660, 410, 420);
  estatico[8].iniciar(739, 670, 420, 430);
  estatico[8].iniciar(738, 679, 430, 440);

// Pajaro Alas

  estatico[9].iniciar(611, 460, 0, 10);
  estatico[10].iniciar(611,443, 10, 20);
  estatico[9].iniciar(611, 460, 20, 30);
  estatico[10].iniciar(611,443, 30, 40);
  estatico[9].iniciar(611, 460, 40, 50);
  estatico[10].iniciar(611,443, 50, 60);

// Damero
  estatico[11].iniciar(185, 678, 0, 10);
  estatico[12].iniciar(185, 679, 10, 20);
  estatico[11].iniciar(185, 678, 20, 30);
  estatico[12].iniciar(185, 679, 30, 40);
  estatico[11].iniciar(185, 678, 40, 50);
  estatico[12].iniciar(185, 679, 50, 60);

}

function actualizarEstaticos(){

  contFrame ++;
	for (let i = 0; i < estatico.length; i++) {
	    estatico[i].actualizar(contFrame);
	    estatico[i].dibujar();
	  }
}

function mousePressedEstaticos(){
	for (let i = 0; i < estatico.length; i++) {
	    estatico[i].revisarClick();
	  }
}
