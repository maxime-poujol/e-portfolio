$(function () {

    // Move to specific section when click on menu link
    $('#navbar a.dot').on('click', function (e) {
        const target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on('scroll', function () {
        const sTop = $(window).scrollTop();
        $('section').each(function () {
            const id = $(this).attr('id')
            const offset = $(this).offset().top - 1
            const height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                $('#navbar a').removeClass('active');
                $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    });

});