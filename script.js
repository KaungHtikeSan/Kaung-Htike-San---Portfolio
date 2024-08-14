$(document).ready(function() {
    // Smooth scrolling for nav links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 500);
    });
});
