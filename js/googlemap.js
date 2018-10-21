/*//Variables*/
var mi = 0;

function changegmap(){
	if (mi == 0 ){
		$('.mapa_ubicacion img').css('z-index', '100');
		$('.mapa_ubicacion #map_canvas').css('z-index', '200');
		$('.googlemap').css('display', 'block');
		$('.imagen').css('display', 'none');
		mi = 1;
	}else{
		$('.mapa_ubicacion img').css('z-index', '200');
		$('.mapa_ubicacion #map_canvas').css('z-index', '100');
		$('.googlemap').css('display', 'none');
		$('.imagen').css('display', 'block');
		mi = 0;
	}
}

$(document).ready(function() {		
	$('.googlemap').css('display', 'none');
});