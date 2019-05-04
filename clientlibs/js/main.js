$(function() {
    
    //Page load nav/header animation
    setTimeout(function(){
    $('.content').addClass('active');
    $('.logo').addClass('active');
    }, 750);
    
    
    //Add event listeners for deep link scrolling
    $("#info-scroll").click(function() {
        $('html,body').animate({
            scrollTop: $("#section-2").offset().top -125}, 'slow');
    });
    
    $("#work-scroll").click(function() {
        $('html,body').animate({
            scrollTop: $("#section-3").offset().top -125}, 'slow');
    });
    
    $("#about-scroll").click(function() {
        $('html,body').animate({
            scrollTop: $("#section-4").offset().top -125}, 'slow');
    });
    
    $("#contact-scroll").click(function() {
        $('html,body').animate({
            scrollTop: $("#section-5").offset().top}, 'slow');
    });
    
    //Add event listeners for project hidden content expansion
    
//    $("#pathfound").click(function() {
//        if ($('#pathfound-additional').hasClass('expanded')) {
//            console.info('class found');
//        }
//        else {
//            console.info('class not found');
//        }
//    });
    
});

