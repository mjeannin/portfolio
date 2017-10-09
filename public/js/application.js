$(".button-collapse").sideNav();

// var options = [
//     {selector: '.class', offset: 200, callback: customCallbackFunc },
//     {selector: '.other-class', offset: 200, callback: function() {
//         customCallbackFunc();
//     } }
// ];
// Materialize.scrollFire(options);

// var options = [
//     {selector: '#staggered-test', offset: 50, callback: function(el) { Materialize.toast("This is our ScrollFire Demo!", 1500 ); } },
//     {selector: '#staggered-test', offset: 205, callback: function(el) { Materialize.toast("Please continue scrolling!", 1500 ); } },
//     {selector: '#staggered-test', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); } },
//     {selector: '#image-test', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } } ];
// Materialize.scrollFire(options);


var options = [
    {selector: '#line3', offset: 400, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line4', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } }
];
Materialize.scrollFire(options);