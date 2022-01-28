// any CSS you import will output into a single css file (app.css in this case)
import '../styles/app.scss';

// start the Stimulus application
const $ = require('jquery');
const bootstrap = require('bootstrap');

const header = require('./header.js');

const scrollpsy = require('./scrollpsy.js');
if(document.getElementById('scrollspy')){
    scrollpsy.start($);
}

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})




