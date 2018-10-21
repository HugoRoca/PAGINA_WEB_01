/*//Variables*/
var vequipo = 300;
var newtext =  '';
var sg = 0;


/*//Funciones*/
function equipo_confi(){
	$('#abogado_resultado .abogado').css('display', 'none');
	$('#abogado_resultado .primerperfil').css('display', 'block');
	$('#abogados_grupo a').css('display', 'none');
	$('#abogados_grupo .alfa1').css('display', 'block');
	$('#abogados_grupo #btab101').addClass('select');
}

function alfa(lt){
	$('#abogado_resultado .abogado').css('display', 'none');	
	$('#abogado_resultado #abogado'+lt+'01').css('display', 'block');
	$('#abogados_grupo a').css('display', 'none');
	$('#abogados_grupo .alfa'+lt).css('display', 'block');
	$('#menu_alfabetico_abogados a').removeClass('lselect')
	$('#menu_alfabetico_abogados #bte'+lt).addClass('lselect');
	$('#abogados_grupo a').removeClass('select');
	$('#abogados_grupo #btab'+lt+'01').addClass('select');
	
	newtext = $('#abogados_grupo #btab'+lt+'01').html();
	$( '#nabogado' ).text(newtext);
	
	$('#abogados_grupo').css('z-index', '100');
	$('#nabogado').removeClass('bt_up');
	sg = 0;
}

function abogado(ab){
	$('#abogado_resultado .abogado').css('display', 'none');
	$('#abogado_resultado #abogado'+ab).css('display', 'block');
	newtext = $('#abogados_grupo #btab'+ab).html();
	$( '#nabogado' ).text(newtext);
	$('#abogados_grupo').css('z-index', '100');
	$('#nabogado').removeClass('bt_up');
	$('#abogados_grupo a').removeClass('select');
	$('#abogados_grupo #btab'+ab).addClass('select');
	
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


$(document).ready(function() {		
	equipo_confi();
});
