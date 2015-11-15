var app = {};



$('li').click(function(){
	var current_room = $(this).attr('data-room');

	
});

app.eureka = function() {
	var text = $('h1').html().split('');
	console.log(text)
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
