var w = 922;
var h = 768;
let fondo;

let linea = [];
var cantLinea = 7;

let pendulo = [];
var cantPendulos = 7;

let girador = [];
var cantGiradores = 6;

let estatico = [];;
var cantEstaticos = 13;

var video;
var ejectandoVideo = false;
var r = 255;
var g = 255;
var b = 255;
/*let posiciones = [];
var cantPosiciones = 100;*/

var contFrame = 0;
var tinturar =  false;
function setup() {
	createCanvas(w, h);
	video = createVideo("assets/proceso.mp4",empezarVideo);
	video.hide();
	cargarLineas();
	cargarPendulos();
	cargarGiradores();
	cargarEstaticos();
}
function empezarVideo(){
	video.loop();
}

function draw() {
	//background(255);
	if(ejectandoVideo){
		image(video,0,0);
	}else{
		if(tinturar){
			push();
			tint(r, g, b);
	 		image(fondo, 0, 0);
			pop();
		}else{
			image(fondo, 0, 0);
		}
		actualizarLineas();
		actualizarPendulos();
		actualizarGiradores();
		actualizarEstaticos();
	}
	/* if (contFrame > 480) {
	contFrame = 0;
}*/
}

function mousePressed(){
	mousePressedPendulos();
	mousePressedGiradores();
	mousePressedLineas();
	mousePressedEstaticos();
}

function keyPressed(){
	if(key == ' '){
		if(!ejectandoVideo){
			empezarVideo();
			ejectandoVideo = true;

		}else{
			video.stop();
			ejectandoVideo = false;

		}
	}else if(key == 'C'){
		console.log('pasa');
		tinturar = !tinturar;
		r = random(255);
		g = random(255);
		b = random(255);
	}
}







//----------------------------------
