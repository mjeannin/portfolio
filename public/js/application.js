$(".button-collapse").sideNav();

// var options = [
//     {selector: '.class', offset: 200, callback: customCallbackFunc },
//     {selector: '.other-class', offset: 200, callback: function() {
//         customCallbackFunc();
//     } }
// ];
// Materialize.scrollFire(options);

var options = [
    {selector: '#line1', offset: 1000, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line2', offset: 1500, callback: function(el) { Materialize.fadeInImage($(el)); } }
];
Materialize.scrollFire(options);