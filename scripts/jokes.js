$('.forgot').click(function(){
	$('.step0').hide();
	$('.first-screne').show();
});

$('.no').click(function(){
	$('span').hide();
	$('img').hide();
	$(this).parent().parent().hide();
	$(this).parent().parent().next().show();

	$('img').delay('1200').fadeIn();
	$('h2 span').delay('1200').fadeIn();
});




$('#step1').click(function(){

	$('.first-screen').hide();
	$('.something-else').hide();
	$('.option').hide();
	$('.wrap').hide();

	$('h2 span').delay('1200').fadeIn();
	$('.img-wrap').delay('1300').fadeIn();

	$('.step1').show();
	$('#option-1').show();



	
});


$('#step2').click(function(){
	console.log('sup')
	$('#donotshow').hide();

	$('h2 span').hide();
	$('.img-wrap').hide();

	$('.first-screen').hide();
	$('.something-else').hide();
	$('.option').hide();
	$('.wrap').hide();


	$('h2 span').delay('1800').fadeIn();
	$('.img-wrap').delay('1800').fadeIn();

	$('.step2').show();
	$('#option-2').show();
});


$('#step3').click(function(){
	console.log('three')
	$('.first-screen').hide();
	$('.something-else').hide();
	$('.option').hide();
	$('.wrap').hide();

	$('.step3').show();
	$('#option-3').show();

	$('h2 span').delay('1200').fadeIn();
	$('.img-wrap').delay('1300').fadeIn();
});


$('.three-bttn-wrap button').click(function(){
	$(this).find('span').show();
})

$('.three-bttn-wrap button#step1').click(function(){

	$('.something-else').hide();
	$('.wrap').hide();
	
	$('.step1').show();
	$('#option-1').show();

	// $('h2 span').delay('1200').fadeIn();

});

$('.three-bttn-wrap button#step2').click(function(){
	$('.something-else').hide();
	$('.wrap').hide();
	$('.step2').show();
	$('#option-2').show();

	// $('h2 span').delay('1200').fadeIn();
});

$('.three-bttn-wrap button#step3').click(function(){
	$('.something-else').hide();
	$('.wrap').hide();
	$('.step3').show();
	$('#option-3').show();

	// $('h2 span').delay('1200').fadeIn();
});

$('.last').click(function() {
    $('.option').hide();
    $('.wrap').hide();
    $('.mb-wrapper').show();
    $('.mb').show();
});

$('.mb').click(function() {

    $(".loading").show();
    setTimeout(function() {
        $(".loading").remove();
    }, 3000);

    $('.mb').hide();
    $('.mb-wrapper h2').hide();
    $('#masterbate').show();

    // .delay('300').remove();

    // $(this).hide();
    // $('.mb-wrapper h2').hide();
    // $('.mb-img').show();
})

$('.yes').click(function(){
	$('.pop-up').show();
});


$(window).scroll(function(){
	$('.placeholder').remove();
});