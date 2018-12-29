$(document).ready(function(){

	opener_html();
	openre_main({
		openSpeed: 300,
	});
	
});

function opener_html(){
	
		
	
		$('body').prepend('<div class="opener_overlay"><div class="opener_left_half"></div><div class="opener_right_half"></div></div>');
		
		var notice = $(".opener_notice");
		
		$('.opener_overlay').prepend(notice);
}

function openre_main(openSpeed){
	
	$("#opener_agree").click(function(){
		$('.opener_notice').hide();
		$('.opener_left_half').animate({width:'0'}, openSpeed);
		$('.opener_right_half').animate({width:'0'}, openSpeed);
		console.log(openSpeed);
		
	});
}