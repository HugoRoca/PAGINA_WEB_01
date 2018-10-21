/*//Variables*/
var sg = 0;
var ntipo;


/* FUNCIONES */
function tipoabogado(){
	$('#abogado_resultado li').filter('[data-tipo="asociado"]').remove();
	$('#abogado_resultado li').filter('[data-tipo="socio"]').remove();
}

function tiposocio(){
	$('#socio_resultado li').remove('.abogado');
}
/*
function tipoasociado(){
	$('#abogado_resultado li').filter('[data-tipo="socio"]').remove();
	$('#abogado_resultado li').filter('[data-tipo="abogado"]').remove();
}
*/
function seleccionartipo(){
	if(ntipo == 1){
		tipoabogado();
		setid()
	}
	
	if(ntipo == 2){
		tiposocio();
		setid()
	}
	
	if(ntipo == 3){
		tipoasociado();
		setid()
	}
}

function setid(){
	$('#abogado_resultado li').each(function() {
		/* PERFILES */
		var na = $(this).data('nombrecompleto');
		var nb = na.replace(/\Á/g, 'a')
		.replace(/\á/g, 'a')
		.replace(/\É/g, 'e')
		.replace(/\é/g, 'e')
		.replace(/\Í/g, 'i')
		.replace(/\í/g, 'i')
		.replace(/\Ó/g, 'o')
		.replace(/\ó/g, 'o')
		.replace(/\Ú/g, 'u')
		.replace(/\ú/g, 'u')
		.replace(/\Ñ/g, 'nz')
		.replace(/\ñ/g, 'nz')
		.replace(/\ /g, '_');
		
		$(this).attr('id', 'perfil_'+(nb.toLowerCase()));
		var especial = (nb.toLowerCase()).substring(0, 2);
		var nc;
		
		if(especial == 'nz'){
			nc = (nb.toLowerCase()).substring(0, 2);
		}else{
			nc = (nb.toLowerCase()).substring(0, 1);
		}
		
		$(this).addClass('grupo_'+nc);
		
		/* BOTONES */
		var napellido = $(this).data('apellido');
		var nnombre = $(this).data('nombre');
		var textonombrecompleto = napellido + ' ' + nnombre;
		var newbt = document.createElement('a');
		$(newbt).attr('id', 'bt_'+(nb.toLowerCase()))
			.attr('href', '#')
			.html(textonombrecompleto)
			.addClass('grupo_'+nc)
			.appendTo('#abogados_grupo .botones');
	});
	
	var $newbutton = $('#abogados_grupo .botones a').clone();
	$('#todos').html($newbutton);
	
	sortbt();
}


function sortbt(){
	$.fn.sortList = function() {
		var mylist = $(this);
		var listitems = $('a', mylist).get();
		listitems.sort(function(a, b) {
			var compA = $(a).attr('id');
			var compB = $(b).attr('id');
			return (compA < compB) ? -1 : 1;
		});
		$.each(listitems, function(i, itm) {
			mylist.append(itm);
		});
   }
   
	$('#todos').sortList();
    $('#abogados_grupo .botones').sortList();
	
	$('#abogados_grupo .botones a').click(function() {	
		$('#abogado_resultado li').css('display', 'none');	
		$('#abogados_grupo .botones a').removeClass('select');	
			
		var idbt = $(this).attr('id');	
		var getname = idbt.substr(3);	
		var setperfil = '#perfil_'+getname;	
		var newtext = $(this).html();	
			
		$(setperfil).css('display', 'block');	
		$( '#nabogado' ).text(newtext);	
		$(this).addClass('select');	
		sg = 1;	
		subgrupo();	
	});
	
	$('#todos a').click(function() {		
		$('#abogado_resultado li').css('display', 'none');	
			
		var clone_idbt = $(this).attr('id');	
		var clone_getname = clone_idbt.substr(3);	
		var clone_setperfil = '#perfil_'+clone_getname;	
		var clone_newtext = $(this).html();	
			
		$(clone_setperfil).css('display', 'block');	
	});
	
	primerperfil();
}


function filtrarletras(){
	if ( $( ".grupo_a" ).length ) {}else{$('#menu_alfabetico_abogados #bte1').addClass('inactivo');}
	if ( $( ".grupo_b" ).length ) {}else{$('#menu_alfabetico_abogados #bte2').addClass('inactivo');}
	if ( $( ".grupo_c" ).length ) {}else{$('#menu_alfabetico_abogados #bte3').addClass('inactivo');}
	if ( $( ".grupo_d" ).length ) {}else{$('#menu_alfabetico_abogados #bte4').addClass('inactivo');}
	if ( $( ".grupo_e" ).length ) {}else{$('#menu_alfabetico_abogados #bte5').addClass('inactivo');}
	if ( $( ".grupo_f" ).length ) {}else{$('#menu_alfabetico_abogados #bte6').addClass('inactivo');}
	if ( $( ".grupo_g" ).length ) {}else{$('#menu_alfabetico_abogados #bte7').addClass('inactivo');}
	if ( $( ".grupo_h" ).length ) {}else{$('#menu_alfabetico_abogados #bte8').addClass('inactivo');}
	if ( $( ".grupo_i" ).length ) {}else{$('#menu_alfabetico_abogados #bte9').addClass('inactivo');}
	if ( $( ".grupo_j" ).length ) {}else{$('#menu_alfabetico_abogados #bte10').addClass('inactivo');}
	if ( $( ".grupo_k" ).length ) {}else{$('#menu_alfabetico_abogados #bte11').addClass('inactivo');}
	if ( $( ".grupo_l" ).length ) {}else{$('#menu_alfabetico_abogados #bte12').addClass('inactivo');}
	if ( $( ".grupo_m" ).length ) {}else{$('#menu_alfabetico_abogados #bte13').addClass('inactivo');}
	if ( $( ".grupo_n" ).length ) {}else{$('#menu_alfabetico_abogados #bte14').addClass('inactivo');}
	if ( $( ".grupo_nz" ).length ) {}else{$('#menu_alfabetico_abogados #bte15').addClass('inactivo');}
	if ( $( ".grupo_o" ).length ) {}else{$('#menu_alfabetico_abogados #bte16').addClass('inactivo');}
	if ( $( ".grupo_p" ).length ) {}else{$('#menu_alfabetico_abogados #bte17').addClass('inactivo');}
	if ( $( ".grupo_q" ).length ) {}else{$('#menu_alfabetico_abogados #bte18').addClass('inactivo');}
	if ( $( ".grupo_r" ).length ) {}else{$('#menu_alfabetico_abogados #bte19').addClass('inactivo');}
	if ( $( ".grupo_s" ).length ) {}else{$('#menu_alfabetico_abogados #bte20').addClass('inactivo');}
	if ( $( ".grupo_t" ).length ) {}else{$('#menu_alfabetico_abogados #bte21').addClass('inactivo');}
	if ( $( ".grupo_u" ).length ) {}else{$('#menu_alfabetico_abogados #bte22').addClass('inactivo');}
	if ( $( ".grupo_v" ).length ) {}else{$('#menu_alfabetico_abogados #bte23').addClass('inactivo');}
	if ( $( ".grupo_w" ).length ) {}else{$('#menu_alfabetico_abogados #bte24').addClass('inactivo');}
	if ( $( ".grupo_x" ).length ) {}else{$('#menu_alfabetico_abogados #bte25').addClass('inactivo');}
	if ( $( ".grupo_y" ).length ) {}else{$('#menu_alfabetico_abogados #bte26').addClass('inactivo');}
	if ( $( ".grupo_z" ).length ) {}else{$('#menu_alfabetico_abogados #bte27').addClass('inactivo');}
}


function primerperfil(){
	/* BUSCANDO PRIMER PERFIL*/
	var pbt = $('#abogados_grupo .botones .grupo_a:first').attr('id');
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_b:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_c:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_d:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_e:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_f:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_g:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_h:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_i:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_j:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_k:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_l:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_m:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_n:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_nz:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_o:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_p:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_q:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_r:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_s:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_t:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_u:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_v:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_w:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_x:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_y:first').attr('id');};
	if(typeof pbt === 'undefined'){pbt = $('#abogados_grupo .botones .grupo_z:first').attr('id');};
	/*////*/
	
	var pname = pbt.substr(3);
	var ptperfil = '#perfil_'+pname;
	var ptext = $('#'+pbt).html();
	var pgrupo = $('#'+pbt).attr('class');
	var pletra = ''+(pgrupo.substr(6));
	if(pletra == 'a'){pletra = 1;}
	if(pletra == 'b'){pletra = 2;}
	if(pletra == 'c'){pletra = 3;}
	if(pletra == 'd'){pletra = 4;}
	if(pletra == 'e'){pletra = 5;}
	if(pletra == 'f'){pletra = 6;}
	if(pletra == 'g'){pletra = 7;}
	if(pletra == 'h'){pletra = 8;}
	if(pletra == 'i'){pletra = 9;}
	if(pletra == 'j'){pletra = 10;}
	if(pletra == 'k'){pletra = 11;}
	if(pletra == 'l'){pletra = 12;}
	if(pletra == 'm'){pletra = 13;}
	if(pletra == 'n'){pletra = 14;}
	if(pletra == 'nz'){pletra = 15;}
	if(pletra == 'o'){pletra = 16;}
	if(pletra == 'p'){pletra = 17;}
	if(pletra == 'q'){pletra = 18;}
	if(pletra == 'r'){pletra = 19;}
	if(pletra == 's'){pletra = 20;}
	if(pletra == 't'){pletra = 21;}
	if(pletra == 'u'){pletra = 22;}
	if(pletra == 'v'){pletra = 23;}
	if(pletra == 'w'){pletra = 24;}
	if(pletra == 'x'){pletra = 25;}
	if(pletra == 'y'){pletra = 26;}
	if(pletra == 'z'){pletra = 27;}
	
	$('#bte'+pletra).addClass('lselect');
	$(ptperfil).css('display', 'block');
	$('#abogados_grupo .botones .' + pgrupo).css('display', 'block');
	$('#'+pbt).addClass('select');	
	$( '#nabogado').text(ptext);
	
	filtrarletras();
}


function subgrupo(){
	if (sg == 0 ){
		$('#abogados_grupo').css('z-index', '300');
		$('#nabogado').addClass('bt_up');
		sg = 1;
	}else{
		$('#abogados_grupo').css('z-index', '100');
		$('#nabogado').removeClass('bt_up');
		sg = 0;
	}
}


function alfa(g){
	var ng = g;
	if(ng == 1){ng = 'a';}
	if(ng == 2){ng = 'b';}
	if(ng == 3){ng = 'c';}
	if(ng == 4){ng = 'd';}
	if(ng == 5){ng = 'e';}
	if(ng == 6){ng = 'f';}
	if(ng == 7){ng = 'g';}
	if(ng == 8){ng = 'h';}
	if(ng == 9){ng = 'i';}
	if(ng == 10){ng = 'j';}
	if(ng == 11){ng = 'k';}
	if(ng == 12){ng = 'l';}
	if(ng == 13){ng = 'm';}
	if(ng == 14){ng = 'n';}
	if(ng == 15){ng = 'nz';}
	if(ng == 16){ng = 'o';}
	if(ng == 17){ng = 'p';}
	if(ng == 18){ng = 'q';}
	if(ng == 19){ng = 'r';}
	if(ng == 20){ng = 's';}
	if(ng == 21){ng = 't';}
	if(ng == 22){ng = 'u';}
	if(ng == 23){ng = 'v';}
	if(ng == 24){ng = 'w';}
	if(ng == 25){ng = 'x';}
	if(ng == 26){ng = 'y';}
	if(ng == 27){ng = 'z';}
	
	var alfagrupo = '.grupo_' + ng;
	var alfagettext = $('#abogados_grupo .botones .grupo_'+ng+':first').attr('id');
	var alfaperfil = '#perfil_'+(alfagettext.substr(3));
	var alfatext = $('#'+alfagettext).html();
	
	$('#abogado_resultado li').css('display', 'none');
	$(alfaperfil).css('display', 'block');	
	
	$('#abogados_grupo .botones a').css('display', 'none');
	$('#abogados_grupo .botones ' + alfagrupo).css('display', 'block');
	$('#menu_alfabetico_abogados a').removeClass('lselect');
	$('#bte'+g).addClass('lselect');
	$( '#nabogado').text(alfatext);
	sg = 1;
	subgrupo();
}

function activartodos(){
	$('#abogado_grupo').css('display', 'none');
	$('#abogado_grupo .botones').css('display', 'none');
	$('#nabogado').css('display', 'none');		
	$('#abogado_resultado li').css('display', 'none');	
	$('#bt_todos').css('display', 'none');	
	$('#lista_alfabetica').css('display', 'none');	
	
	$('#bt_todos_back').css('display', 'block');
	$('#todos').css('display', 'block');	
	primerperfil();
}

function desactivartodos(){
	$('#abogado_grupo').css('display', 'block');
	$('#abogado_grupo .botones').css('display', 'block');
	$('#nabogado').css('display', 'block');		
	$('#abogado_resultado li').css('display', 'none');	
	$('#bt_todos').css('display', 'block');	
	$('#lista_alfabetica').css('display', 'block');	
	
	$('#bt_todos_back').css('display', 'none');
	$('#todos').css('display', 'none');	
	primerperfil();
}

/* ////////////////////////////////// */
$(document).ready(function() {	

});

$(window).load(function(){
	seleccionartipo();
	
});