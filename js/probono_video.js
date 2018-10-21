var actualnv = 0;

function provideo(nv){
	if (nv == actualnv){
		return false;	
	}
	if( $('.video_box').is(':animated') ) {	
		return false;	
	}	
	
	$('.video_previo_box').removeClass('vb_select');
	$('#btvideo' + nv).addClass('vb_select');
	
	$('#probono_text').animate({opacity: '0'},300,
		function (){
			$('#probono_text').css('display', 'none');
			$('.video_box').css('display', 'block');
			actualnv = nv;
			
		
		    if (nv == 1){$('.video_box iframe').attr('src', 'http://www.esola.com.pe/videos-pro-bono/Ciudad_saludable.mp4')}
			if (nv == 2){$('.video_box iframe').attr('src', 'http://www.esola.com.pe/videos-pro-bono/Ciudad_de_Jesus.mp4')}
			if (nv == 3){$('.video_box iframe').attr('src', 'http://www.esola.com.pe/videos-pro-bono/nuestro_futuro.mp4')}
			if (nv == 4){$('.video_box iframe').attr('src', 'http://www.esola.com.pe/videos-pro-bono/ballet_municipal.mp4')}
				
				
			
			/*	
			if (nv == 1){$('.video_box iframe').attr('src', 'http://www.esola.com.pe/videos-pro-bono/ciudad_saludable.html')}
			if (nv == 2){$('.video_box iframe').attr('src', 'http://www.esola.com.pe/videos-pro-bono/ciudad_de_jesus.html')}
			if (nv == 3){$('.video_box iframe').attr('src', 'http://www.esola.com.pe/videos-pro-bono/nuestro_futuro.html')}
			if (nv == 4){$('.video_box iframe').attr('src', 'http://www.esola.com.pe/videos-pro-bono/ballet_municipal.html')}
			*/
		}					
	)
}

function closeprovideo(){
	if( $('.video_box').is(':animated') ) {	
		return false;	
	}
	$('.video_previo_box').removeClass('vb_select');
	$('.video_box').css('display', 'none');
	$('#probono_text').css('display', 'block');
	actualnv = 0;
	$('#probono_text').animate({opacity: '1'},300)
}