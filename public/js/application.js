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
    {selector: '#line3', offset: 1250, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line4', offset: 2100, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line5', offset: 2600, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line6', offset: 3100, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line7', offset: 3500, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line8', offset: 4000, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line9', offset: 4800, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line10', offset: 5800, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line11', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line12', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line13', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line14', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line15', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line16', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line17', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line18', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line19', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line20', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line21', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line22', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line23', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line24', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line25', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line26', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
    {selector: '#line27', offset: 0, callback: function(el) { Materialize.fadeInImage($(el)); } },
];
Materialize.scrollFire(options);