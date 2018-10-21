/*BANNER*/ 
var tiempo = 5500; /*Tiempo de cada imagen en milisegundos*/ 
var cantidad;
var actual;
var cambio;
var siguiente;
var timer;

/*configuracion*/ 
function configuracion(){
	$('#slide div').css('opacity', '0');
	$('#slide div').css('z-index', '1');
	$('.frase_cont').css('opacity', '0');
	$('.frase_cont').css('margin-left', '20px');
	actual = 0;
}

/*FUNCIONES*/ 
function avanzar(){
	timer=setTimeout(function(){banner(siguiente);}, tiempo);
}

function parar(){
	clearTimeout(timer);
}

function banner(numero){
	if (numero == actual){
		return false;	
	}
	if( $('#slide div').is(':animated') ) {	
		return false;	
	}	
	
	cantidad= $('#slide div').length;
	cambio = numero;
	siguiente = numero + 1;

	if (siguiente > cantidad){
		siguiente = 1;
	}

	$('#banner_menu .normal').css('display', 'block');
	$('#banner_menu .over').css('display', 'none');
	$('#bt'+cambio+' .normal').css('display', 'none');
	$('#bt'+cambio+' .over').css('display', 'block');	
	
	$('#slide div').css('z-index', '1');	
	$('#banner'+cambio).css('z-index', '3');
	$('#frase'+cambio).css('opacity', '0');
	$('#frase'+cambio).css('margin-left', '20px');
	$('#frase'+actual).animate({opacity: '0'},'slow');
	$('#banner'+actual).animate({opacity: '0'},'slow');
	$('#banner'+cambio).animate({opacity: '1'},'slow',
		function (){		
			$('#slide div').css('opacity', '0');
			$('#slide div').css('z-index', '1');	
			$('#banner'+cambio).css('opacity', '1');	
			$('#banner'+cambio).css('z-index', '3');	
			$('#frase'+cambio).animate({opacity: '1',marginLeft:'0'},'slow');
			actual = numero;	
			avanzar();	
		}					
	)
}

function imagen(n){
	if( $('#slide div').is(':animated') ) {	
		return false;	
	}	
	parar();
	banner(n);
}

function next(){
	if( $('#slide div').is(':animated') ) {	
		return false;	
	}
	parar();
	nextimage= actual + 1
	if (nextimage > cantidad){
		nextimage = 1;
	}
	imagen(nextimage);
}

function prev(){
	if( $('#slide div').is(':animated') ) {	
		return false;	
	}	
	parar();
	previmage= actual - 1
	if (previmage < 1){
		previmage = cantidad;
	}
	imagen(previmage);
}

$(window).load(function(){
	imagen(1);
});

	