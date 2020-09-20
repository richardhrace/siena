jQuery(document).ready(function($) {

    $('#mobile-menu-button, #mobile-menu-text').click(function() {
        $('#overlay-for-menu, .menu-toggle').toggleClass('opened');
        $('body').toggleClass('mobile-menu-open');
        $('#mobile-menu, #mobile-overlay').toggleClass('opened');
    });

});