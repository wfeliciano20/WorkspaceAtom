$("h1").addClass("big-title margin-50");

$("h1").removeClass("big-title margin-50");

$("button").text("Dont Click Me");

$("button").html("<em>hey</em>");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function() {

    $("h1").css("color", "purple");

});

// Once a user press a key inside the website change the h1 to the value of the key

$(document).keypress(function(e) {
    $("h1").text(e.key);
});

// Another way to add listeners

$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
});

/* 
    Adding html elements during runtime

    before() puts the element before the desired html element

    after() puts the element after the desired html element

    prepend() puts the element before the content already inside the desired html element
    
    append() puts the element after the content already inside the desired html element
        
    });

*/

/*
    To hide and show HTML elements we can use the method

    toggle()

    to make the hide and show animated use the following methods:

    fadeIn() / fadeOut

    There is also a method to toggle this fades:

    fadeToggle()
    
*/

/*

    To hide and show items using animations use:

    slideUp()

    slideDown()

    slideTogggle()

*/