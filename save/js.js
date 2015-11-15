var app = {
	current_room: "",
	selected_activity: "",
	active_array: []
};

// show/hide sections based on button 

$('main button').click(function(){
	var selected_category = $(this).attr('data-category');
	$('main button').removeClass('button-active');
	$(this).addClass('button-active');

	$('section.wrap').each(function(){
		if ($(this).attr('data-category') === selected_category) {
			$(this).show();
		} else{
			$(this).hide();
		};
	});
});



$('.step1 ul li').click(function(){
	app.current_room = $(this).attr('data-room');
	$('.step1 ul li').removeClass('active-step');
	$(this).addClass('active-step');
	$(this).siblings().unbind();
	$('.step2').css('opacity','1');

});

$('.step2 ul li').click(function(){
	app.selected_activity = $(this).attr('data-activity');

	app.active_array.push(app.selected_activity);

	$(this).addClass('active-step');
	$('.step3').css('opacity','1');

});

$('.step3 button.submit').click(function(){
	console.log(app.selected_activity);
	console.log(app.active_array.join(" and "));

	
	$('.step2 ul li').siblings().unbind();
	$('.step4').css('opacity','1');

	$('.step4 ul').append('<li>' + "masterbate " + "h" + '</li>') 
});



app.eureka = function() {
	var text = $('h1').html().split('');
	// console.log(text)
	// $('h1').fadeIn('slow', function () {
	//   $(this).delay(5000).fadeOut('slow');
	// });
}

app.init = function() {
	app.eureka();

};

$(function() {
    app.init();
});
