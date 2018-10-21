
/* ////////////////////////////////// */
$(document).ready(function() {	
	$('#socio_resultado li').remove('.abogado');
	$('#socio_resultado li').remove('.socio');
	setid();
});

function setid(){
	$('#socio_resultado li').each(function() {
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
		.replace(/\Ñ/g, '0')
		.replace(/\ñ/g, 'n')
		.replace(/\ /g, '_');
		
		$(this).attr('id', 'perfil_'+(nb.toLowerCase()));
	});
	sortli();
}

function sortli(){
	$.fn.sortList = function() {
		var mylist = $(this);
		var listitems = $('li', mylist).get();
		listitems.sort(function(a, b) {
			var compA = $(a).attr('id');
			var compB = $(b).attr('id');
			return (compA < compB) ? -1 : 1;
		});
		$.each(listitems, function(i, itm) {
			mylist.append(itm);
		});
   }

   $('#socio_resultado').sortList();
}

$(window).load(function(){

});