$( document ).ready(function() {

  //testiranje pomicanja bcg on scroll
  function parallax() {
    var wScroll = $(window).scrollTop();

    //pomicanje backgrounda
    $('.restoran-img').css('background-position', 'center ' + (-wScroll*0.2) + 'px');
  };
  //pozivanje funkcije
  $(window).scroll(function() {
    parallax();
  });



    //animate elements with scroll
    function scrollAnimations() {
      const animationElements = [
        $('.fadein'),
        $('.scroll-left'),
        $('.scroll-right'),
        $('.scroll-down')
      ];
      const windowHeight = $(window).height();
      const windowTopPosition = $(window).scrollTop();
      const windowBottomPosition = (windowTopPosition + windowHeight);

      for (let i = 0; i < animationElements.length; i++) {
        $.each(animationElements[i], function() {
          let element = $(this);
          let elementHeight = element.outerHeight();
          let elementTopPosition = element.offset().top;
          let elementBottomPosition = (elementTopPosition + elementHeight);

          //check to see if this current container is within viewport
          if ((elementBottomPosition >= windowTopPosition) &&
            (elementTopPosition <= windowBottomPosition)) {
            element.addClass('in-view');
          } else {
            //element.removeClass('in-view');
          }
        });
      };
    }

    $(window).on('scroll resize', scrollAnimations);
    $(window).trigger('scroll');



  //back to top button
  var backToTopButton = $('#back-to-top-button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      backToTopButton.addClass('show');
    } else {
      backToTopButton.removeClass('show');
    }
  });

  backToTopButton.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });




});

//write text on homepage gallery
function changeText(txt) {


const container = document.querySelector('.image-gallery-img5 h4');
const sentence = ['Okusi domaće kuhinje',
                'Svježe namirnice',
                'Najbolje torte',
                'Fini kolači',
                'Receptura zavičaja'];
let t = -1;
let thing = '';
let message = container.innerHTML;
let mode = 'write';
let delay = 0;

function updateText(txt) {
    container.innerHTML = txt;
}

function tick() {

    if(container.innerHTML.length == 0) {
        //t++; //if we want to stop after last one - enable
        thing = sentence[Math.floor(Math.random() * sentence.length)]; //if we dont want to be random, put 'sentence[t]'
        message = '';
        mode = 'write';
    }

    switch(mode) {
        case 'write' :
            message += thing.slice(0, 1);
            thing = thing.substr(1);

            updateText(message);

            if(thing.length === 0 && t === (sentence.length - 1)) {
                window.clearTimeout(timeout);
                return;
            }

            if(thing.length == 0){
                mode = 'delete';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 40);
            }

            break;

        case 'delete' :
            message = message.slice(0, -1);
            updateText(message);

            if(message.length == 0)
            {
                mode = 'write';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 100);
            }
            break;
    }

    timeout = window.setTimeout(tick, delay);
}
var timeout = window.setTimeout(tick, 1000);
}
changeText(); //pozivanje funkcije za mijenjanje texta na homepage gallery h4


//mobile nav
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('nav').children;
  const arrayLinks = Array.from(navLinks);

  //togle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //navigate links
    arrayLinks.forEach((element, index) => {
      if (element.style.animation) {
        element.style.animation = '';
      } else {
        element.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle');
  });
};
navSlide();
