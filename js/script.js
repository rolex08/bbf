$('document').ready(function(){
    var $playButton = $('.video-play-button'),
        $popup      = $('.video-popup'),
        $popupHide  = $('.video-popup-close');
    $popup.detach();
    $popupHide.click(function(){
        $popup.slideUp(function(){
            $(this).detach();
        });
    });
    $playButton.click(function(){
        $popup.appendTo('body').slideDown();
    });


    var $menuButton = $('#menu-button'),
        $menuPopup      = $('.menu-popup'),
        $popupMenuHide  = $('#menu-button-close');
    $menuPopup.detach();
    $popupMenuHide.click(function(){
        $menuPopup.slideUp(function(){
            $(this).detach();
        });
    });
    $menuButton.click(function(){
        $menuPopup.appendTo('body').slideDown();
    });

$('body').delegate('.portfolio-item','hover', function( event ) {
    if( event.type === 'mouseenter' )
        $(this).find('img').stop(true,true).fadeTo( 500, 0.7 );
    else
    if ( ! $(this).hasClass('et_active_item') ) $(this).find('img').stop(true,true).fadeTo( 500, 1 );
} );


});
