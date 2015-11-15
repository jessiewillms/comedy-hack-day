var app = {
	current_room: "",
	selected_activity: "",
	active_array: [],
	counter: 0
};

var data = {
	"step1" : {
		"joke": "step1 joke 1 lorem joke one",
		"joke1": "lorem joke two",
		"joke2": "lorem joke three"
	},
	"step2" : {
		"joke": "step2 joke 1 lorem joke one",
		"joke1": "lorem joke two",
		"joke2": "lorem joke three"
	}
}


console.log(data.step1.joke)


$('.next').click(function(){
	app.counter++;
	var steps = ".step" + app.counter;
	$(steps).show();


	$(steps).append('<li>' + data.step1.joke + '</li>')
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
