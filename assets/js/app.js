// any CSS you import will output into a single css file (app.css in this case)
import '../styles/app.scss';

// start the Stimulus application
const $ = require('jquery');
const bootstrap = require('bootstrap');

star();

function star(){
    if(document.getElementById('scrollspy')){
        scrollpsy();
    }

    backToTop();
    tooltip();
}




function backToTop(){
    const btn = $('#backToTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
}

function scrollpsy(){
    // Move to specific section when click on menu link
    $('#scrollspy a.dot').on('click', function (e) {
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

function tooltip(){
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}


