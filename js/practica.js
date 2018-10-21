var actualp = 1;

/*FUNCIONES*/ 
function nuevomain(nmain){
	$('.practica_c1a').css('opacity', '1');
	$('.practica_c1a').css('display', 'none');
	$('.practica_c1b').css('opacity', '1');
	$('.practica_c1b').css('display', 'none');
	$('.prac'+nmain).css('display', 'block');
	actualp = nmain;
}

function showpractica(np){
	if (np == actualp){
		return false;	
	}
	if( $('.practica_c1 div').is(':animated') ) {	
		return false;	
	}	
	
	$('.practica_menu ul li a').removeClass('select');
	$('#btpractica-'+np).addClass('select');
	
	$('.prac'+actualp).animate({opacity: '0'},150);
	
	$('.prac'+actualp).css('display', 'none');
	$('.prac'+np).css('display', 'block');
	
	$('.prac'+np).animate({opacity: '1'},150,
		function (){	
			actualp = np;
		}
	);
}

function primerop(){
	$('.practica_menu ul li a').removeClass('select');
	$('#btpractica-1').addClass('select');
	$('.prac1').css('display', 'block');
	$('.prac1').animate({opacity: '1'},300);
	actualp = 1;
}

/*configuracion*/ 
function conf_prac(){
	var mmobile = $( window ).width();
	if( mmobile > 721 ) {	
		$('.practica_c1a').css('opacity', '0');
		$('.practica_c1a').css('display', 'none');
		$('.practica_c1b').css('opacity', '0');
		$('.practica_c1b').css('display', 'none');
		primerop();
	}else{
		$('#submenu_main select').prop('selectedIndex',0);
		nuevomain(1);
	}
}

$(document).ready(function() {	
	conf_prac();
});

$( window ).resize(function() {
	conf_prac();
});
