'use strict';

var window_onDomContentLoaded = function () {

    var backToTop = function () {
        
        window.scrollTo({top: 0, behavior: 'smooth'});

    }

    var setuppers = [];

    setuppers['about'] = function () {
        console.log('About');
    }

    setuppers['booking-completed'] = function () {
        console.log('Booking completed');
    }

    setuppers['booking-in-process'] = function () {
        console.log('Booking in process');
    }

    setuppers['booking'] = function () {
        console.log('Booking');
    }

    setuppers['contact'] = function () {
        console.log('Contact');
    }

    setuppers['cookie-usage'] = function () {
        console.log('Cookie usage');
    }

    setuppers['hotel'] = function () {
        console.log('Hotel');
    }

    setuppers['index'] = function () {
        console.log('Index');
    }

    setuppers['personal-data-usage'] = function () {
        console.log('Personal data usage');
    }

    setuppers['room'] = function () {
        console.log('Room');
    }

    setuppers['search'] = function () {
        console.log('Search');
    }

    setuppers['thanks-for-contacting-us'] = function () {
        console.log('Thanks for contacting us');
    }

    setuppers['thanks-for-subscribing'] = function () {
        console.log('Thanks for subscribing');
    }

    var route = function () {
        var routing = document.querySelector('[data-page]').getAttribute('data-page');

        if (typeof routing == 'string') {
            setuppers[routing]();
        } else {
            console.log('How the f*ck did you get here?!')
        }

    }

    route();
    
    var backToTopButton = document.querySelector('[data-widget="scroll_to_top"]');

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    }

    backToTopButton.addEventListener("click", backToTop);
}
window.addEventListener('DOMContentLoaded', window_onDomContentLoaded);