$('.forgot').click(function(){
	$('.step0').hide();
	$('.first-screne').show();
});

$('.no').click(function(){
	$('span').hide();
	$('img').hide();
	$(this).parent().parent().hide();
	$(this).parent().parent().next().show();

	$('img:not(.mb-img)').delay('600').fadeIn();
	$('h2 span').delay('600').fadeIn();
});

$('#step3').click(function(){
	console.log('three')
	$('.first-screen').hide();
	$('.something-else').hide();
	$('.option').hide();
	$('.wrap').hide();

	$('.step3').show();
	$('#option-3').show();

	$('h2 span').delay('600').fadeIn();
});

$('#step2').click(function(){
	console.log('teo')
	$('.first-screen').hide();
	$('.something-else').hide();
	$('.option').hide();
	$('.wrap').hide();

	$('.step2').show();
	$('#option-2').show();

	$('h2 span').delay('600').fadeIn();
});

$('#step1').click(function(){

	$('.first-screen').hide();
	$('.something-else').hide();
	$('.option').hide();
	$('.wrap').hide();

	$('.step1').show();
	$('#option-1').show();

	$('h2 span').delay('600').fadeIn();
});


$('.three-bttn-wrap button').click(function(){
	$(this).find('span').show();
})

$('.three-bttn-wrap button#step1').click(function(){

	$('.something-else').hide();
	$('.wrap').hide();
	
	$('.step1').show();
	$('#option-1').show();

	// $('h2 span').delay('600').fadeIn();

});

$('.three-bttn-wrap button#step2').click(function(){
	$('.something-else').hide();
	$('.wrap').hide();
	$('.step2').show();
	$('#option-2').show();

	// $('h2 span').delay('600').fadeIn();
});

$('.three-bttn-wrap button#step3').click(function(){
	$('.something-else').hide();
	$('.wrap').hide();
	$('.step3').show();
	$('#option-3').show();

	// $('h2 span').delay('600').fadeIn();
});

$('.last').click(function() {
	$('.option').hide();
	$('.wrap').hide();
	$('.mb-wrapper').show();
	$('.mb').show()
});

$('.mb').click(function(){
	$('.mb-img').show();
})