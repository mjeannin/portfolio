// RESPONSIVE HEADER

$(".button-collapse").sideNav();

// CV MODAL

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

// INFINITE SCROLL

var options = [
    {selector: '#line79', offset: 1200, callback: function() { $("#line77").show() } },
    {selector: '#line79', offset: 2050, callback: function() { $("#line76").show() } },
    {selector: '#line79', offset: 2550, callback: function() { $("#line75").show() } },
    {selector: '#line79', offset: 3050, callback: function() { $("#line74").show() } },
    {selector: '#line79', offset: 3450, callback: function() { $("#line73").show() } },
    {selector: '#line79', offset: 3950, callback: function() { $("#line72").show() } },
    {selector: '#line79', offset: 4750, callback: function() { $("#line71").show() } },
    {selector: '#line79', offset: 5750, callback: function() { $("#line70").show() } },
    {selector: '#line79', offset: 6200, callback: function() { $("#line69").show() } },
    {selector: '#line79', offset: 6700, callback: function() { $("#line68").show() } },
    {selector: '#line79', offset: 7300, callback: function() { $("#line67").show() } },
    {selector: '#line79', offset: 7900, callback: function() { $("#line66").show() } },
    {selector: '#line79', offset: 8500, callback: function() { $("#line65").show() } },
    {selector: '#line79', offset: 9200, callback: function() { $("#line64").show() } },
    {selector: '#line79', offset: 9800, callback: function() { $("#line63").show() } },
    {selector: '#line79', offset: 10300, callback: function() { $("#line62").show() } },
    {selector: '#line79', offset: 10800, callback: function() { $("#line61").show() } },
    {selector: '#line79', offset: 11400, callback: function() { $("#line60").show() } },
    {selector: '#line79', offset: 12000, callback: function() { $("#line59").show() } },
    {selector: '#line79', offset: 12600, callback: function() { $("#line58").show() } },
    {selector: '#line79', offset: 13200, callback: function() { $("#line57").show() } },
    {selector: '#line79', offset: 13800, callback: function() { $("#line56").show() } },
    {selector: '#line79', offset: 14400, callback: function() { $("#line55").show() } },
    {selector: '#line79', offset: 15000, callback: function() { $("#line54").show() } },
    {selector: '#line79', offset: 15600, callback: function() { $("#line53").show() } },
    {selector: '#line79', offset: 15900, callback: function() { $("#line52").show() } },
    {selector: '#line79', offset: 16400, callback: function() { $("#line51").show() } },
    {selector: '#line79', offset: 17000, callback: function() { $("#line50").show() } },
    {selector: '#line79', offset: 17600, callback: function() { $("#line49").show() } },
    {selector: '#line79', offset: 18200, callback: function() { $("#line48").show() } },
    {selector: '#line79', offset: 18800, callback: function() { $("#line47").show() } },
    {selector: '#line79', offset: 19400, callback: function() { $("#line46").show() } },
    {selector: '#line79', offset: 20000, callback: function() { $("#line45").show() } },
    {selector: '#line79', offset: 20600, callback: function() { $("#line44").show() } },
    {selector: '#line79', offset: 21000, callback: function() { $("#line43").show() } },
    {selector: '#line79', offset: 21600, callback: function() { $("#line42").show() } },
    {selector: '#line79', offset: 22200, callback: function() { $("#line41").show() } },
    {selector: '#line79', offset: 22800, callback: function() { $("#line40").show() } },
    {selector: '#line79', offset: 23400, callback: function() { $("#line39").show() } },
    {selector: '#line79', offset: 24000, callback: function() { $("#line38").show() } },
    {selector: '#line79', offset: 24500, callback: function() { $("#line37").show() } },
    {selector: '#line79', offset: 25100, callback: function() { $("#line36").show() } },
    {selector: '#line79', offset: 25700, callback: function() { $("#line35").show() } },
    {selector: '#line79', offset: 26300, callback: function() { $("#line34").show() } },
    {selector: '#line79', offset: 26900, callback: function() { $("#line33").show() } },
    {selector: '#line79', offset: 27500, callback: function() { $("#line32").show() } },
    {selector: '#line79', offset: 28200, callback: function() { $("#line31").show() } },
    {selector: '#line79', offset: 28700, callback: function() { $("#line30").show() } },
    {selector: '#line79', offset: 29300, callback: function() { $("#line29").show() } },
    {selector: '#line79', offset: 29600, callback: function() { $("#line28").show() } },
    {selector: '#line79', offset: 30200, callback: function() { $("#line27").show() } },
    {selector: '#line79', offset: 30800, callback: function() { $("#line26").show() } },
    {selector: '#line79', offset: 31400, callback: function() { $("#line25").show() } },
    {selector: '#line79', offset: 31900, callback: function() { $("#line24").show() } },
    {selector: '#line79', offset: 32500, callback: function() { $("#line23").show() } },
    {selector: '#line79', offset: 33100, callback: function() { $("#line22").show() } },
    {selector: '#line79', offset: 33700, callback: function() { $("#line21").show() } },
    {selector: '#line79', offset: 34300, callback: function() { $("#line20").show() } },
    {selector: '#line79', offset: 34900, callback: function() { $("#line19").show() } },
    {selector: '#line79', offset: 35500, callback: function() { $("#line18").show() } },
    {selector: '#line79', offset: 40000, callback: function() { $("#line17").show() } },
    {selector: '#line79', offset: 40600, callback: function() { $("#line16").show() } },
    {selector: '#line79', offset: 41200, callback: function() { $("#line15").show() } },
    {selector: '#line79', offset: 41800, callback: function() { $("#line14").show() } },
    {selector: '#line79', offset: 42400, callback: function() { $("#line13").show() } },
    {selector: '#line79', offset: 43000, callback: function() { $("#line12").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line11").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line10").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line9").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line8").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line7").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line6").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line5").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line4").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line3").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line2").show() } },
    {selector: '#line79', offset: 43500, callback: function() { $("#line1").show() } }
];
Materialize.scrollFire(options);


// SCROLL TOP

$(document).ready(function() {
    $('a.next').click(function () {
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
    $('a.scrollTop').scrollTop();
});

$(function() {
    $(window).scroll(function() {
        //Position du scroll + moitié de l'écran visible
        var scroll = $(this).scrollTop() + window.innerHeight * 0.8;
        $('.info').each(function() {
            if (scroll > $(this).offset().top) {
                $(this).removeClass('hid')
            } else {
                $(this).addClass('hid')
            }
        });

        $(".footer").toggle($(this).scrollTop() > 280);
    });

    $(".smooth-scroll").click(function(event) {
        //prevent the default action for the click event
        event.preventDefault();

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];

        //get the top offset of the target anchor
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top;

        //goto that anchor by setting the body scroll top to anchor top
        $('html, body').animate({ scrollTop: target_top }, 700);
    });
});

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