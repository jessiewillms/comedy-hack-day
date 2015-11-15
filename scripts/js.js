var app = {
	current_room: "",
	selected_activity: ""
};

$('.step1 ul li').click(function(){
	app.current_room = $(this).attr('data-room');

});

$('.step2 ul li').click(function(){
	app.selected_activity = $(this).attr('data-activity');
});

$('.step3 button.submit').click(function(){
	console.log(app.selected_activity);
	console.log(app.current_room)
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
