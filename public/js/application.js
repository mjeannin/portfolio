// RESPONSIVE HEADER

$(".button-collapse").sideNav();

// CV MODAL

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

// INFINITE SCROLL

var options = [
    {selector: '#line1', offset: 1200, callback: function(el) { $("#line3").show() } },
    {selector: '#line1', offset: 2050, callback: function(el) { $("#line4").show() } },
    {selector: '#line1', offset: 2550, callback: function(el) { $("#line5").show() } },
    {selector: '#line1', offset: 3050, callback: function(el) { $("#line6").show() } },
    {selector: '#line1', offset: 3450, callback: function(el) { $("#line7").show() } },
    {selector: '#line1', offset: 3950, callback: function(el) { $("#line8").show() } },
    {selector: '#line1', offset: 4750, callback: function(el) { $("#line9").show() } },
    {selector: '#line1', offset: 5750, callback: function(el) { $("#line10").show() } },
    {selector: '#line1', offset: 6200, callback: function(el) { $("#line11").show() } },
    {selector: '#line1', offset: 6700, callback: function(el) { $("#line12").show() } },
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

// SEARCH BAR
var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

$( "#search" ).keyup(function() {
    delay(function () {
        var str = document.getElementById("search").value;
        if (str == "") {
            // alert ("Please enter some text to search!");
            return;
        }

        var supported = false;
        var found = false;
        if (window.find) {        // Firefox, Google Chrome, Safari
            supported = true;
            // if some content is selected, the start position of the search
            // will be the end position of the selection
            found = window.find(str);
        }
        else {
            if (document.selection && document.selection.createRange) { // Internet Explorer, Opera before version 10.5
                var textRange = document.selection.createRange();
                if (textRange.findText) {   // Internet Explorer
                    supported = true;
                    // if some content is selected, the start position of the search
                    // will be the position after the start position of the selection
                    if (textRange.text.length > 0) {
                        textRange.collapse(true);
                        textRange.move("character", 1);
                    }

                    found = textRange.findText(str);
                    if (found) {
                        textRange.select();
                    }
                }
            }
        }

        if (supported) {
            if (!found) {
                // alert ("The following text was not found:\n" + str);
            }
        }
        else {
            // alert ("Your browser does not support this example!");
        }
    }, 500);
});