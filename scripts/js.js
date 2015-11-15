var app = {
	current_room: "",
	selected_activity: "",
	active_array: []
};

var data = {
	"step1" : {
		"joke": "lorem joke one",
		"joke1": "lorem joke two",
		"joke2": "lorem joke three"
	},
	"step2" : {
		"joke": "lorem joke one",
		"joke1": "lorem joke two",
		"joke2": "lorem joke three"
	}
}


console.log(data.step1.joke)



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
