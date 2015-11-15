var app = {
    counter: 0,
    random: "",
    jokes1: [],
    jokes2: [],
    jokes3: [],
    jokes4: [],
    jokes5: [],
    jokes6: []
};

function getJson(json) {

    for (var i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];

        app.jokes1.push(entry.gsx$step1.$t);
        app.jokes2.push(entry.gsx$step2.$t);
        app.jokes3.push(entry.gsx$step3.$t);
        app.jokes4.push(entry.gsx$step4.$t);
        app.jokes5.push(entry.gsx$step5.$t);
        app.jokes6.push(entry.gsx$step6.$t);

    }


    $('.next').click(function() {
        app.random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

        app.counter++;
        var steps = "step" + app.counter;

        $("." + steps).show();


        if (steps == 'step1') {
        	console.log('yeah')
        	$('.site').append('<li>' + app.jokes1[app.random] + '</li>');
        } else if (steps == 'step2'){
        	$('.step2 ul.jokes-here').append('<li>' + app.jokes2[app.random] + '</li>');
        } else if (steps == 'step3'){
        	$('.step3 ul.jokes-here').append('<li>' + app.jokes3[app.random] + '</li>');
        } else if (steps == 'step4'){
        	$('.step4 ul.jokes-here').append('<li>' + app.jokes4[app.random] + '</li>');
        } else if (steps == 'step5'){
        	$('.step5 ul.jokes-here').append('<li>' + app.jokes5[app.random] + '</li>');
        } else if (steps == 'step6'){
        	$('.step6 ul.jokes-here').append('<li>' + app.jokes6[app.random] + '</li>');
        };

    });
};



app.init = function() {


    // $('.step1 .site').html(step_1_jokes[random])
};

$(function() {
    app.init();
});
