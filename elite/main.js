// import {tns} from './src/tiny-slider.js';

gsap.registerPlugin(ScrollTrigger);

// Initialize slider once DOM is ready
// var slider1, slider2, slider3;

// function initSliders() {
//   if (typeof tns === 'undefined') {
//     console.warn('tiny-slider not loaded yet, retrying...');
//     setTimeout(initSlider, 100);
//     return;
//   }

//   const global = {
//     autoplay: true,
//     autoplayButtonOutput: false,
//     // slideBy: 1,
//     // items: "page",
//     freezable: false,
//     mouseDrag: true,
//     swipeAngle: false,
//     speed: 7000,
//     autoplayTimeout: 100,
//     controls: false,
//     nav: false,
//     gutter: 200,
//     fixedWidth: 150,
//     rewind: false,
//     autoplayHoverPause: true,
//     // center: true,
//     // loop: true,
//   }

//   const options1 = {container: "#client-slider-1"}
//   const options2 = {container: "#client-slider-2", autoplayDirection: "backward"}
//   const options3 = {container: "#client-slider-3"}

//   slider1 = tns({...options1, ...global});
//   slider2 = tns({...options2, ...global});
//   slider3 = tns({...options3, ...global});

// }



// Call after DOM is ready
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initSliders);
// } else {
//   initSliders();
// }

// // Handle fullscreen and resize events to recalculate slider
// document.addEventListener('fullscreenchange', function() {
//   setTimeout(() => {
//     slider1 = slider1.rebuild();
//     slider2 = slider2.rebuild();
//     slider3 = slider3.rebuild();
//   }, 100);
// });

// window.addEventListener('resize', function() {
//   slider1.destroy();
//   slider2.destroy();
//   slider3.destroy();

//   slider1 = slider1.rebuild();
//   slider2 = slider2.rebuild();
//   slider3 = slider3.rebuild();
// });

$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});

$('.work-slider').owlCarousel({
  margin: 25,
  nav: true,
  dots: true,
  dotsEach: true,
  center: true,
  startPosition: 3,
  responsive: {
    0: {
      items: 1
    },
    1300: {
      items: 3
    },
    2000: {
      items: 3
    },
    2700: {
      items: 5
    }
  }
})

$('.owl-carousel-logo-slider-1').owlCarousel({
  margin: 25,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  smartSpeed: 4000,
  slideTransition: 'linear', // use linear for smoothness
  nav: false,
  dots: false,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
})


$('.owl-carousel-logo-slider-2').owlCarousel({
  margin: 25,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  smartSpeed: 4000,
  slideTransition: 'linear', // use linear for smoothness
  nav: false,
  dots: false,
  loop: true,
  rtl: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
})

// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto"
        }
      );
      var hrs = elem.parentNode ? elem.parentNode.querySelectorAll('hr') : elem.querySelectorAll('hr');
      gsap.to(hrs, { scaleX: 1, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      var hrs = elem.parentNode ? elem.parentNode.querySelectorAll('hr') : elem.querySelectorAll('hr');
      gsap.to(hrs, { scaleX: 0, duration: 0.4, ease: 'power2.in', overwrite: 'auto' });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto"
        }
      );
      var hrs = elem.parentNode ? elem.parentNode.querySelectorAll('hr') : elem.querySelectorAll('hr');
      gsap.to(hrs, { scaleX: 1, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      var hrs = elem.parentNode ? elem.parentNode.querySelectorAll('hr') : elem.querySelectorAll('hr');
      gsap.to(hrs, { scaleX: 0, duration: 0.4, ease: 'power2.in', overwrite: 'auto' });
    }
  });
});

var scroll = new SmoothScroll('a[data-easing="linear"]', {
        speed: 300, // Adjust speed if needed
        offset: document.querySelector('.header').offsetHeight,
        easing: 'linear',
        updateURL: false, // Prevents changing the URL hash
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    var isOpen = content.style.maxHeight && content.style.maxHeight !== "";

    // Close all other collapsible sections
    for (var j = 0; j < coll.length; j++) {
      if (coll[j] !== this) {
        coll[j].classList.remove("coll_active");
        var otherContent = coll[j].nextElementSibling;
        if (otherContent) {
          otherContent.style.maxHeight = null;
        }
      }
    }

    // Toggle the clicked collapsible
    if (isOpen) {
      this.classList.remove("coll_active");
      content.style.maxHeight = null;
    } else {
      this.classList.add("coll_active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Keep copyright updated with current year

const year = new Date().getFullYear();
const copyrightTxt = `Elite Media Technologies LLC. Copyright 2010 - ${year} All Rights Reserved.`;
const copyrightTxtNode = document.createTextNode(copyrightTxt);
const footer = document.getElementById("footer");
const copyright = document.createElement("p");
copyright.appendChild(copyrightTxtNode);
footer.appendChild(copyright);

// Get the button:
let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  closeNav();
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    // const alpha = document.documentElement.scrollTop / 300;
    // console.log(alpha);
    // topBtn.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

window.onload = function() {
        // Reset the form fields when the page loads
        document.getElementById("form").reset();
    };

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
