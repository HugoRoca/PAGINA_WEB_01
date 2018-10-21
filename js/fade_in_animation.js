/*CONFIGURACION*/ 
var velocidada= 500;
var velocidadb = 500;
var intermedio = 300;

function paso1(){	
	$('.item1').css('opacity', '0');
	$('.item2').css('opacity', '0');
	$('.item3').css('opacity', '0');
	$('.item4').css('opacity', '0');
	$('.item5').css('opacity', '0');
	$('.item6').css('opacity', '0');
	
	$('.item1m').css('opacity', '0');
	$('.item2m').css('opacity', '0');
	$('.item3m').css('opacity', '0');
	$('.item4m').css('opacity', '0');
	$('.item5m').css('opacity', '0');
	$('.item6m').css('opacity', '0');
	$('.item1m').css('margin-top', '40px');
	$('.item2m').css('margin-top', '40px');
	$('.item3m').css('margin-top', '40px');
	$('.item4m').css('margin-top', '40px');
	$('.item5m').css('margin-top', '40px');
	$('.item6m').css('margin-top', '40px');
	
	$('.item1mn').css('opacity', '0');
	$('.item2mn').css('opacity', '0');
	$('.item3mn').css('opacity', '0');
	$('.item4mn').css('opacity', '0');
	$('.item5mn').css('opacity', '0');
	$('.item6mn').css('opacity', '0');
	$('.item1mn').css('margin-bottom', '-40px');
	$('.item2mn').css('margin-bottom', '-40px');
	$('.item3mn').css('margin-bottom', '-40px');
	$('.item4mn').css('margin-bottom', '-40px');
	$('.item5mn').css('margin-bottom', '-40px');
	$('.item6mn').css('margin-bottom', '-40px');
	
	$('.item1md').css('opacity', '0');
	$('.item2md').css('opacity', '0');
	$('.item3md').css('opacity', '0');
	$('.item4md').css('opacity', '0');
	$('.item5md').css('opacity', '0');
	$('.item6md').css('opacity', '0');
	$('.item1md').css('margin-bottom', '40px');
	$('.item2md').css('margin-bottom', '40px');
	$('.item3md').css('margin-bottom', '40px');
	$('.item4md').css('margin-bottom', '40px');
	$('.item5md').css('margin-bottom', '40px');
	$('.item6md').css('margin-bottom', '40px');
	
	$('.item1mdn').css('opacity', '0');
	$('.item2mdn').css('opacity', '0');
	$('.item3mdn').css('opacity', '0');
	$('.item4mdn').css('opacity', '0');
	$('.item5mdn').css('opacity', '0');
	$('.item6mdn').css('opacity', '0');
	$('.item1mdn').css('margin-top', '-40px');
	$('.item2mdn').css('margin-top', '-40px');
	$('.item3mdn').css('margin-top', '-40px');
	$('.item4mdn').css('margin-top', '-40px');
	$('.item5mdn').css('margin-top', '-40px');
	$('.item6mdn').css('margin-top', '-40px');
}

function paso2(){
	$('.item1').animate({opacity: '1'},velocidadb);
	$('.item2').delay(intermedio).animate({opacity: '1'},velocidadb);
	$('.item3').delay((intermedio*2)).animate({opacity: '1'},velocidadb);
	$('.item4').delay((intermedio*3)).animate({opacity: '1'},velocidadb);
	$('.item5').delay((intermedio*4)).animate({opacity: '1'},velocidadb);
	$('.item6').delay((intermedio*5)).animate({opacity: '1'},velocidadb);
	
	$('.item1m').animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item2m').delay(intermedio).animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item3m').delay((intermedio*2)).animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item4m').delay((intermedio*3)).animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item5m').delay((intermedio*4)).animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item6m').delay((intermedio*5)).animate({marginTop: '0', opacity: '1'},velocidadb);
	
	$('.item1mn').animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item2mn').delay(intermedio).animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item3mn').delay((intermedio*2)).animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item4mn').delay((intermedio*3)).animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item5mn').delay((intermedio*4)).animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item6mn').delay((intermedio*5)).animate({marginBottom: '0', opacity: '1'},velocidadb);
	
	$('.item1md').animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item2md').delay(intermedio).animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item3md').delay((intermedio*2)).animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item4md').delay((intermedio*3)).animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item5md').delay((intermedio*4)).animate({marginBottom: '0', opacity: '1'},velocidadb);
	$('.item6md').delay((intermedio*5)).animate({marginBottom: '0', opacity: '1'},velocidadb);
	
	$('.item1mdn').animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item2mdn').delay(intermedio).animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item3mdn').delay((intermedio*2)).animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item4mdn').delay((intermedio*3)).animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item5mdn').delay((intermedio*4)).animate({marginTop: '0', opacity: '1'},velocidadb);
	$('.item6mdn').delay((intermedio*5)).animate({marginTop: '0', opacity: '1'},velocidadb);
}	

$(document).ready(function() {	
	paso1();
});

$(window).load(function(){
	paso2();
});
