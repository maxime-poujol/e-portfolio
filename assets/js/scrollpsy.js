function start($) {

    // Move to specific section when click on menu link
    $('#scrollspy a.dot').on('click', function (e) {
        const target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - (document.getElementById("navbar").offsetHeight /2)
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on('scroll', function () {
        const sTop = $(window).scrollTop() + document.getElementById("navbar").offsetHeight;
        $('section').each(function () {
            const id = $(this).attr('id');
            const offset = $(this).offset().top;
            const height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                $('#scrollspy a').removeClass('active');
                $('#scrollspy').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    });

}

module.exports = {
    start
}