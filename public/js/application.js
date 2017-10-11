// RESPONSIVE HEADER

$(".button-collapse").sideNav();

// CV MODAL

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

// INFINITE SCROLL

var options = [
    {selector: '#line1', offset: 1200, callback: function(el) { console.log("hey");$("#line3").show() } },
    {selector: '#line1', offset: 2050, callback: function(el) { console.log("hey1");$("#line4").show() } },
    {selector: '#line1', offset: 2550, callback: function(el) { console.log("hey2");$("#line5").show() } },
    {selector: '#line1', offset: 3050, callback: function(el) { console.log("hey3");$("#line6").show() } },
    {selector: '#line1', offset: 3450, callback: function(el) { console.log("hey4");$("#line7").show() } },
    {selector: '#line1', offset: 3950, callback: function(el) { console.log("hey5");$("#line8").show() } },
    {selector: '#line1', offset: 4750, callback: function(el) { console.log("hey6");$("#line9").show() } },
    {selector: '#line1', offset: 5750, callback: function(el) { console.log("hey7");$("#line10").show() } },
    {selector: '#line1', offset: 6200, callback: function(el) { console.log("hey8");$("#line11").show() } },
    {selector: '#line1', offset: 6700, callback: function(el) { console.log("hey9");$("#line12").show() } },
    {selector: '#line1', offset: 7300, callback: function(el) { $("#line13").show() } },
    {selector: '#line1', offset: 7900, callback: function(el) { $("#line14").show() } },
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
    {selector: '#line1', offset: 15600, callback: function(el) { $("#line27").show() } }
];
Materialize.scrollFire(options);