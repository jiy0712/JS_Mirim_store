$(function(){
	var $firstMenu = $('.nav_select'),
			$header = $('.header');
	
	$firstMenu.mouseenter(function(){
		$header.stop().animate({height:'300px'});
	})
	.mouseleave(function(){
		$header.stop().animate({height:'140px'});
	});
	
	
	
});