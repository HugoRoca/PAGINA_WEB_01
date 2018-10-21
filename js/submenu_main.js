var nmain = '';

function nuevomain(nmain){
	$('.inicio_c1').css('display','none');
	$('.inicio_c2').css('display','none');
	$('.inicio_c3').css('display','none');
	$('#main' + nmain).css('display','block');
}

function mainmobile(){
	var mmobile = $( window ).width();
	if( mmobile > 1007 ) {	
		$('.inicio_c1').css('display','block');
		$('.inicio_c2').css('display','block');
		$('.inicio_c3').css('display','none');
	}else{
		$('#submenu_main select').prop('selectedIndex',0);
		nuevomain(1);
	}
}

$( window ).resize(function() {
  mainmobile();
});

$( document ).ready(function() {
	mainmobile();
});
