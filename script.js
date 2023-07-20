"use strict";
// slider
const slides = document.querySelectorAll('.frame-list__item'),
      menuLinks = document.querySelectorAll('.menu__list-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      slidesFrame = document.querySelector('.preview-cv__frame'),
      slidesContainer = document.querySelector('.preview-cv__frame-list'),
      width = window.getComputedStyle(slidesFrame).width;


let slideIndex = 1;
let offset = 0;

slidesContainer.style.width = 100 * slides.length + '%';
slidesContainer.style.display = 'flex';
slidesContainer.style.transition = '0.5s all';
slidesFrame.style.overflow = 'hidden';

slides.forEach(item => {
    item.style.width = width;
})

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
    slidesContainer.style.transform = `translateX(-${offset}px)`;
})
next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesContainer.style.transform = `translateX(-${offset}px)`;
})

// slide from nav-links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.header-cv__menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); 
      const target = link.getAttribute('href'); 
      smoothScroll(target); 
    });
  });
