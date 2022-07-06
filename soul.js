const city = document.getElementById('city');
const year = document.getElementById('year');
const navbar = document.querySelector('.navbars');
const degree_section = document.querySelector('.degree_sections');
const navbar_container = document.querySelector('.navbar_container');

city.textContent = 'Myanmar';
year.textContent = new Date().getUTCFullYear();


window.addEventListener('scroll', () => {   
    if(window.scrollY > navbar.getBoundingClientRect().height){
        navbar.classList.add('navbars_top');        
    }else {
        navbar.classList.remove('navbars_top');
    }
});

