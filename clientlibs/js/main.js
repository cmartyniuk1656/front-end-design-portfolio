$(function() {
    
    //Page load nav/header animation -------------------------------------------------->
    setTimeout(function(){
    $('.content').addClass('active');
    $('.logo').addClass('active');
    }, 750);
    
    
    //Add event listeners for deep link scrolling ------------------------------------->
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
    
    //Add event listeners for project hidden content expansion ------------------------->
    
    $("#view-pf-features").click(function() {
        if (!$('#pathfound-features').hasClass('expanded')) {
            $('#pathfound-active-video').removeClass('expanded');
            $('#pathfound-features').addClass('expanded');
        }
    });
    
    $("#pf-create-account").click(function() {
        pfExpandContent();
        setVideoSrc('assets/videos/interacting-with-gameroom.mp4');
    });
    
    $("#pf-create-join").click(function() {
        pfExpandContent();
        setVideoSrc('assets/videos/create-join-game.mp4');
    });
    
    $("#pf-create-import").click(function() {
        pfExpandContent();
        setVideoSrc('assets/videos/create-import-character.mp4');
    });
    
    $("#pf-gameroom").click(function() {
        pfExpandContent();
        setVideoSrc('assets/videos/interacting-with-gameroom.mp4');
    });
    
    $("#pf-uploading").click(function() {
        pfExpandContent();
        setVideoSrc('assets/videos/uploading-assets.mp4');
    });
    
});

// Contact form submit ------------------------------------------------------------------>


$("#contact-submit").click(function() { 
    
    var name = $('#contact #name').val();
    var email = $('#contact #email').val();
    var message = $('#contact textarea').val();
    var emailRef = 'mailto:cmartyniuk1@gmail.com?subject=' + name + ' (' + email + ')' + '&body=' + message;
    console.info(emailRef);
    window.open(emailRef);

});


// Utility functions -------------------------------------------------------------------->

function pfExpandContent() {
    if (!$('#pathfound-active-video').hasClass('expanded')) {
            $('#pathfound-active-video').addClass('expanded');
            $('#pathfound-features').removeClass('expanded');
    }
}

function setVideoSrc(srcStr) {
    if ($('#pathfound-active-video').attr('src') !== srcStr) {
            $('#pathfound-active-video').attr('src', srcStr);
        }
}
