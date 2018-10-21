
function idioma(n){
	if(n == 2){
		$('#spanish').removeClass('noticia_full_box');
		$('#spanish').addClass('noticia_disable');
		
		$('#english').removeClass('noticia_disable');
		$('#english').addClass('noticia_full_box');
		
		$('#bt_spanish').removeClass('select');
		$('#bt_english').addClass('select');
	}else if(n == 1) {
		$('#english').removeClass('noticia_full_box');
		$('#english').addClass('noticia_disable');
		
		$('#spanish').removeClass('noticia_disable');
		$('#spanish').addClass('noticia_full_box');
		
		$('#bt_english').removeClass('select');
		$('#bt_spanish').addClass('select');
	}
}


function engtospa(){
	$('.spa').text(function(index, text) {
		return text.replace('January', 'Enero');
	});
	$('.spa').text(function(index, text) {
		return text.replace('january', 'Enero');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('February', 'Febrero');
	});
	$('.spa').text(function(index, text) {
		return text.replace('february', 'Febrero');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('March', 'Marzo');
	});
	$('.spa').text(function(index, text) {
		return text.replace('march', 'Marzo');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('April', 'Abril');
	});
	$('.spa').text(function(index, text) {
		return text.replace('april', 'Abril');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('May', 'Mayo');
	});
	$('.spa').text(function(index, text) {
		return text.replace('may', 'Mayo');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('June', 'Junio');
	});
	$('.spa').text(function(index, text) {
		return text.replace('june', 'Junio');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('July', 'Julio');
	});
	$('.spa').text(function(index, text) {
		return text.replace('july', 'Julio');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('August', 'Agosto');
	});
	$('.spa').text(function(index, text) {
		return text.replace('august', 'Agosto');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('September', 'Septiembre');
	});
	$('.spa').text(function(index, text) {
		return text.replace('september', 'Septiembre');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('October', 'Octubre');
	});
	$('.spa').text(function(index, text) {
		return text.replace('october', 'Octubre');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('November', 'Noviembre');
	});
	$('.spa').text(function(index, text) {
		return text.replace('november', 'Noviembre');
	});
	
	$('.spa').text(function(index, text) {
		return text.replace('December', 'Diciembre');
	});
	$('.spa').text(function(index, text) {
		return text.replace('december', 'Diciembre');
	});

}


$(document).ready(function() {
	engtospa();
});