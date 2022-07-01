const city = document.getElementById('city');
const year = document.getElementById('year');
const navbar = document.querySelector('.navbars');

city.textContent = 'Yangon, Myanmar';
year.textContent = new Date().getUTCFullYear();


window.addEventListener('scroll', () => {   
    if(window.scrollY > navbar.getBoundingClientRect().height){
        navbar.classList.add('navbars_top');
    }else {
        navbar.classList.remove('navbars_top');
    }
})