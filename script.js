$(document).ready(function () {

//smooth scroll navigation
	$('a').smoothScroll();

//nav bar shrinks after header
	var headerbottom = $('header').height() * .75;

    $(document).on('scroll', function () {
        if ($(document).scrollTop() > headerbottom) {
                $('.navBar').addClass('shrink');
        } else {
            $('.navBar').removeClass('shrink');
        }
    });

    $(document).ready(function(){
        $('.hamburger').on('click', function(){
            $('.navBar').toggleClass('overlay');
            $('.navBar ul').toggleClass('show');
        })
    });

//'squirrel down' button in header
    $('.squirrelDown').click(function() {
        $('html, body').animate({
        scrollTop: $('#about').offset().top},
        'slow');
    });

//squirrel coming out of cup
    //set variables for scroll heights to change position of squirrel
    var bodyheight = $('header').outerHeight() + $('main').outerHeight() - $('footer').outerHeight();
    var scroll1 = bodyheight * .14;
    var scroll2 = bodyheight * .21;
    var scroll3 = bodyheight * .28;
    var scroll4 = bodyheight * .35;
    var scroll5 = bodyheight * .42;
    var scroll6 = bodyheight * .49;
    var scroll7 = bodyheight * .56;
    var scroll8 = bodyheight * .63;
    var scroll9 = bodyheight * .70;

    //change position of squirrel at targeted scroll heights
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll1 && $(document).scrollTop() < scroll2) {
            $('.cupsquirrel').addClass('up1');
        } else {
            $('.cupsquirrel').removeClass('up1');
        }
    });
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll2 && $(document).scrollTop() < scroll3) {
            $('.cupsquirrel').addClass('up2');
        } else {
            $('.cupsquirrel').removeClass('up2');
        }
    });
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll3 && $(document).scrollTop() < scroll4) {
            $('.cupsquirrel').addClass('up3');
        } else {
            $('.cupsquirrel').removeClass('up3');
        }
    });
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll4 && $(document).scrollTop() < scroll5) {
            $('.cupsquirrel').addClass('up4');
        } else {
            $('.cupsquirrel').removeClass('up4');
        }
    });
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll5 && $(document).scrollTop() < scroll6) {
            $('.cupsquirrel').addClass('up5');
        } else {
            $('.cupsquirrel').removeClass('up5');
        }
    });
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll6 && $(document).scrollTop() < scroll7) {
            $('.cupsquirrel').addClass('up6');
        } else {
            $('.cupsquirrel').removeClass('up6');
        }
    });
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll7 && $(document).scrollTop() < scroll8)  {
            $('.cupsquirrel').addClass('up7');
        } else {
            $('.cupsquirrel').removeClass('up7');
        }
    });
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll8 && $(document).scrollTop() < scroll9)  {
            $('.cupsquirrel').addClass('up8');
        } else {
            $('.cupsquirrel').removeClass('up8');
        }
    });
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= scroll9) {
            $('.cupsquirrel').addClass('up9');
        } else {
            $('.cupsquirrel').removeClass('up9');
        }
    });

//meet the squirrels section, click profile picture to open more info
    $('.profile1').click(function() {
        $('.open').removeClass('open');
        $('.info1').addClass('open')
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.profile2').click(function() {
        $('.open').removeClass('open');
        $('.info2').addClass('open');
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.profile3').click(function() {
        $('.open').removeClass('open');
        $('.info3').addClass('open');
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.profile4').click(function() {
        $('.open').removeClass('open');
        $('.info4').addClass('open');
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.profile5').click(function() {
        $('.open').removeClass('open');
        $('.info5').addClass('open');
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    //close button on each squirrel profile
    $('.closebutton').click(function() {
        $('.open').removeClass('open');
        $('.selected').removeClass('selected');
    });
 
//Menu category drops down
    $('.readMore').click(function() {
        var activePanel = $(this).next();
        $('.category').not(activePanel).slideUp();
        activePanel.slideToggle();    
    });
});