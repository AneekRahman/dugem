$(".helpDiv").hide()
$(document).ready(function(){
    /* THE EXPLORE SECTION SLIDE IN/OUT HERE */
    $("#helpBtn").click(function(){
        $(".helpDiv").slideToggle()
        $('html, body').animate({ scrollTop:100 }, 300);
    })
    /* THE JUMBOTRON BG FADE IN ANIMATION HERE */
    $('.jumbotron').hide();
    $('.jumbotron').fadeIn(2000)
});