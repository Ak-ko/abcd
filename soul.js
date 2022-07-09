"use strict";

const navbar = document.querySelector('.navbars');
const degree_section = document.querySelector('.degree_sections');
const navbar_container = document.querySelector('.navbar_container');

let preLoaderContainer = document.getElementById('preloader_container');


window.addEventListener('scroll', () => {   
    if(window.scrollY > navbar.getBoundingClientRect().height){
        navbar.classList.add('navbars_top');        
    }else {
        navbar.classList.remove('navbars_top');
    }
});

// unhide the preloader
function showPreloader() {
    preLoaderContainer.hidden = false;
}

function hidePreloader() {
    preLoaderContainer.hidden = true;
}

showPreloader();
// whiel loaded end -> hide that
window.addEventListener('load', hidePreloader);
