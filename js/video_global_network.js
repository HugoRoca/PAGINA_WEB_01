var estadov = 0;

function video_onoff(){
	if (estadov == 0){
		$('.video_global_cont iframe').attr('src', 'http://www.esola.com.pe/global-networks/lex-mundi-video.html')
		$('.video').addClass('select');
		$('.informacion').css('display', 'none');
		$('.video_global').css('display', 'block');
		estadov = 1;
	}else{
		$('.video').removeClass('select');
		$('.informacion').css('display', 'block');
		$('.video_global').css('display', 'none');
		estadov = 0;
		$('.video_global_cont iframe').attr('src', 'blank.html')
	}
}
