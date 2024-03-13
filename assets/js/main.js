/**
* Template Name: Medilab - v4.9.1
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#topbar')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Gallery Lightbox 
   */
  const galelryLightbox = GLightbox({
    selector: '.galelry-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()



$(document).ready(function() {
  $('.muestra-sangre-link').on('click', function(event) {
      event.preventDefault();
      // Toggle para mostrar u ocultar el texto al hacer clic
      $('#muestra-sangre-text').fadeToggle();
  });
});

$(document).ready(function() {
    // Manejar clic en pestañas de "Muestras de orina"
    $('.tab-link').on('click', function(event) {
        event.preventDefault();
        // Ocultar otros textos grandes si es necesario
        $('.enlarged-text').hide();
        // Mostrar el texto grande específico para la pestaña seleccionada
        var targetId = $(this).data('target');
        $('#' + targetId).fadeToggle();
    });
});

$(document).ready(function() {
  $('.cultivo-link').on('click', function(event) {
      event.preventDefault();
      // Toggle para mostrar u ocultar el texto al hacer clic
      $('#cultivo-text').fadeToggle();
  });
});

// $(document).ready(function() {
//   $('.muestra-orina-link' ).on('click', function(event) {
//       event.preventDefault();
//       // Toggle para mostrar u ocultar el texto al hacer clic
//       $('#muestra-orina-adultos-text' ).fadeToggle();
      
//   });
// });

$(document).ready(function() {
  // Manejar clic en muestra-orina-link
  $('.muestra-orina-link').on('click', function(event) {
      event.preventDefault();
      // Ocultar ambos textos grandes
      $('#muestra-orina-adultos-text, #muestra-orina-ninos-text').hide();
  });

  // Manejar clic en pestañas de "Muestras de orina"
  $('.tab-link').on('click', function(event) {
      event.preventDefault();
      // Ocultar otros textos grandes si es necesario
      $('.enlarged-text').removeClass('active');
      // Mostrar el texto grande específico para la pestaña seleccionada
      var targetId = $(this).data('target');
      $('#' + targetId).addClass('active');
  });
});

$(document).ready(function() {
  // Manejar clic en muestra-orina-link
  $('.muestra-heces-link').on('click', function(event) {
      event.preventDefault();
      // Ocultar ambos textos grandes
      $('#para-examen-parasitologico-text, #para-moco-fecal-text').hide();
  });

  // Manejar clic en pestañas de "Muestras de orina"
  $('.tab-link').on('click', function(event) {
      event.preventDefault();
      // Ocultar otros textos grandes si es necesario
      $('.enlarged-text').removeClass('active');
      // Mostrar el texto grande específico para la pestaña seleccionada
      var targetId = $(this).data('target');
      $('#' + targetId).addClass('active');
  });
});

document.querySelectorAll('.clickable-image').forEach(function (image) {
  image.addEventListener('click', function () {
      // Obtener la URL de la imagen
      var imageUrl = this.src;

      // Asignar la URL de la imagen al modal
      document.getElementById('modalImage').src = imageUrl;

      // Mostrar el modal
      $('#imageModal').modal('show');
  });
});

function searchCatalog() {
  // Obtiene el valor del campo de búsqueda
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  
  // Obtiene la lista de pestañas del catálogo
  ul = document.querySelector('.nav-tabs');
  li = ul.getElementsByTagName('li');

  // Recorre todas las pestañas y muestra u oculta según la búsqueda
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}