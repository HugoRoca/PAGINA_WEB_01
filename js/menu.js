/*MENU*/ 
var mm = 0;


function mmobile(){
	if(mm == 0){
		$('.slide-menu-movil .main_menu').css('display','block')	
		$('.slide-menu-movil .logo_mobileb').css('display','block')		
		$('.slide-menu-movil .logo_mobile').css('display','none')			
		$('.slide-menu-movil .barra').css('background-color','#fff')				
		$('.slide-menu-movil').css('background-color','#fff')	
		$('.slide-menu-movil').css('position','fixed');	
		$('.slide-menu-movil').css('height','100%');	
		$('.slide-menu-movil').css('overflow-y','auto');	
		mm = 1;
	}
	else {
		$('.slide-menu-movil .main_menu').css('display','none')	
		$('.slide-menu-movil .logo_mobileb').css('display','none')		
		$('.slide-menu-movil .logo_mobile').css('display','block')				
		$('.slide-menu-movil .barra').css('background-color','#fff')				
		$('.slide-menu-movil').css('background-color','#fff')	
		$('.slide-menu-movil').css('position','absolute');	
		$('.slide-menu-movil').css('height','auto');	
		$('.slide-menu-movil').css('overflow','hidden');	
		mm = 0;
	}
}
