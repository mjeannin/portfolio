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
//     {selector: '#image-test', offset: 500, callback: function(el) { $("#line3").show() } } ];
// Materialize.scrollFire(options);


var options = [
    {selector: '#line1', offset: 1200, callback: function(el) { $("#line3").show() } },
    {selector: '#line1', offset: 2050, callback: function(el) { $("#line4").show() } },
    {selector: '#line1', offset: 2550, callback: function(el) { $("#line5").show() } },
    {selector: '#line1', offset: 3050, callback: function(el) { $("#line6").show() } },
    {selector: '#line1', offset: 3450, callback: function(el) { $("#line7").show() } },
    {selector: '#line1', offset: 3950, callback: function(el) { $("#line8").show() } },
    {selector: '#line1', offset: 4750, callback: function(el) { $("#line9").show() } },
    {selector: '#line1', offset: 5750, callback: function(el) { $("#line10").show() } },
    {selector: '#line1', offset: 6300, callback: function(el) { $("#line11").show() } },
    {selector: '#line1', offset: 6800, callback: function(el) { $("#line12").show() } },
    {selector: '#line1', offset: 7400, callback: function(el) { $("#line13").show() } },
    {selector: '#line1', offset: 8000, callback: function(el) { $("#line14").show() } },
    {selector: '#line1', offset: 8500, callback: function(el) { $("#line15").show() } },
    {selector: '#line1', offset: 9200, callback: function(el) { $("#line16").show() } },
    {selector: '#line1', offset: 9800, callback: function(el) { $("#line17").show() } },
    {selector: '#line1', offset: 10300, callback: function(el) { $("#line18").show() } },
    {selector: '#line1', offset: 10800, callback: function(el) { $("#line19").show() } },
    {selector: '#line1', offset: 11400, callback: function(el) { $("#line20").show() } },
    {selector: '#line1', offset: 12000, callback: function(el) { $("#line21").show() } },
    {selector: '#line1', offset: 12600, callback: function(el) { $("#line22").show() } },
    {selector: '#line1', offset: 13200, callback: function(el) { $("#line23").show() } },
    {selector: '#line1', offset: 13800, callback: function(el) { $("#line24").show() } },
    {selector: '#line1', offset: 14400, callback: function(el) { $("#line25").show() } },
    {selector: '#line1', offset: 15000, callback: function(el) { $("#line26").show() } },
    {selector: '#line1', offset: 15600, callback: function(el) { $("#line27").show() } },
];
Materialize.scrollFire(options);