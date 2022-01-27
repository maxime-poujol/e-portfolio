// any CSS you import will output into a single css file (app.css in this case)
import '../styles/app.scss';

// start the Stimulus application
const $ = require('jquery');
const bootstrap = require('bootstrap');

import './scrollpsy'

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


const header = document.getElementById('navbar');

//padding-top body
if(document.getElementById('homepage') === null){
    document.body.style.marginTop = header.offsetHeight + "px";
}

window.onscroll = function() {
    const top = window.scrollY;
    if(top <= (header.offsetHeight * 2)) {
        const val = top/(header.offsetHeight*2);
        header.style.backgroundColor = 'rgba(255, 255, 255,'+ val +' )';
        header.style.borderBottom = (val) * 3 + 'px solid';
        header.style.borderImage = 'var(--border-btm-color) 50';
        if(header.classList.contains('border-bottom')){
            header.classList.remove('border-bottom', 'border-3', 'border-bottom-color');
        }
    }else if(!header.classList.contains('border-bottom')){
        header.classList.add('border-bottom', 'border-3', 'border-bottom-color');
    }
}