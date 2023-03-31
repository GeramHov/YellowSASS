// CAROUSSEL

const left = document.querySelector('.leftarrow');
const right = document.querySelector('.rightarrow');
const images = document.querySelector('.images');
const arrow = document.querySelector('.arrow');
const page = document.querySelector('body');
let currentPosition = 0;

let timeoutId;

images.addEventListener('mouseover', function(){
    arrow.style.visibility = 'visible';
    arrow.style.transition = '0.5s ease';
});

images.addEventListener('mouseout', function(){
    timeoutId = setTimeout(function() {
        arrow.style.visibility = 'hidden';
        arrow.style.transition = '0.4s ease';
    }, 4000);
});


left.addEventListener('click', function(){
    currentPosition += 25;
    if(currentPosition <= 50){
        images.style.transform = `translateX(${currentPosition}vw)`;
        images.style.transition = '0.3s ease';
        clearTimeout(timeoutId);
    } else {
        currentPosition = 25;
    }
})

right.addEventListener('click', function(){
    currentPosition -= 25;
    if(currentPosition >= -50) {
        images.style.transform = `translateX(${currentPosition}vw)`;
        images.style.transition = '0.3s ease';
        clearTimeout(timeoutId);
    }
    else {
        currentPosition = -25;
    }
})


// REDIRECT TO THE SECTION

const btns = document.querySelectorAll('#btnlink');

const sectionAbout = document.querySelector('#about');
const sectionProjects = document.querySelector('#projects');
const sectionTestimonials = document.querySelector('#testimonials')
const sectionService = document.querySelector('#services');
const sectionNews = document.querySelector('#news');
const sectionTeam = document.querySelector('#team');
const sectionContact = document.querySelector('#contact');

let sections = [sectionAbout, sectionProjects, sectionTestimonials, sectionService, sectionNews, sectionTeam, sectionContact]

btns.forEach((btn) => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        let index = Array.from(btns).indexOf(btn);
        sections[index].scrollIntoView();
    });
});


// SCROLL TO TOP

const scroller = document.getElementById('scroll');

window.addEventListener('scroll', function(){
    if (window.scrollY === 0) {
        scroller.style.visibility = 'hidden';
    } else {
        scroller.style.visibility = 'visible';
    } 
})

scroller.addEventListener('click', function(){
    window.scrollTo(0,0);
})

// PARAGRAPH CHARACTERS APPEAR ONE-BY-ONE 

function showText() {
    const text = document.getElementById("text");

    const chars = text.innerHTML.split("");
    text.innerHTML = "";
    let i = 0;
    const interval = setInterval(function() {
        if (i < chars.length) {
            text.innerHTML += chars[i];
            i++;
        } else {
            clearInterval(interval);
        }
        text.style.visibility = "visible";
    }, 80);
}

showText();