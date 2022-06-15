'use strict'

document.addEventListener("DOMContentLoaded", function (event) {

  // мой мини jquery 
  function qOne(selector) {
    return document.querySelector(selector);
  }

  function qAll(selector) {
    return document.querySelectorAll(selector);
  }

  function clAdd(coll, nameClass) {
    for (let i = 0; i < coll.length; i++) {
      coll[i].classList.add(nameClass);
    }
  }

  function clRem(coll, nameClass) {
    for (let i = 0; i < coll.length; i++) {
      coll[i].classList.remove(nameClass);
    }
  }

  function clTog(coll, nameClass) {
    for (let i = 0; i < coll.length; i++) {
      coll[i].classList.toggle(nameClass);
    }
  }
  // /мой мини jquery

  // мобильное меню и бургер
  const
    burger = qOne('.burger'),
    menu = qOne('.menu');

  burger.addEventListener('click', function () {
    this.classList.toggle('burger--close');
    menu.classList.toggle('header__menu--show');
  });

  menu.addEventListener('click', function () {
    this.classList.remove('menu--close');
  });

  // свайпер слайдер 

  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // скроллы хеадера
  const header = qOne('.header');
  let scrollTop,
    top = 0;

  window.addEventListener('scroll', function () {
    scrollTop = window.scrollY;

    if (scrollTop > 100) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }

    if (top < scrollTop && top > 500) {
      header.classList.add('header--hide');
      top = scrollTop;
    } else {
      header.classList.remove('header--hide');
      top = scrollTop;
    }
  });

  // скроллы якорных ссылок
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 1000,
    framesCount = 200;

  anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      let scroller = setInterval(function () {
        // скорость прокрутки
        let scrollBy = 17;
        if (Math.abs(window.pageYOffset - coordY) < scrollBy) {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        } else if (scrollBy < window.pageYOffset - coordY) {
          window.scrollBy(0, -scrollBy);
        } else if (scrollBy > window.pageYOffset - coordY) {
          window.scrollBy(0, scrollBy);
        }

      }, animationTime / framesCount);
    });
  });




});