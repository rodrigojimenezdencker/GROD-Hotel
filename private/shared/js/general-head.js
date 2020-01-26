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
        var widget = document.querySelector('[data-widget="booking_form"]');
        var result = widget.addEventListener("submit", function(event) { event.preventDefault(); validateForm(widget); });
    }

    setuppers['contact'] = function () {
        var widget = document.querySelector('[data-widget="contact_form"]');
        var result = widget.addEventListener("submit", function(event) { event.preventDefault(); validateForm(widget); });
    }

    setuppers['cookie-usage'] = function () {
        console.log('Cookie usage');
    }

    setuppers['hotel'] = function () {
        console.log('Hotel');
    }

    setuppers['index'] = function () {
        var widget = document.querySelector('[data-widget="index_form"]');
        var result = widget.addEventListener("submit", function(event) { event.preventDefault(); validateForm(widget); });
        if(result == 'Ok') {
            console.log(result);
        }
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

    var validateForm = function (widget) {
        var entryDate = widget.querySelector('[data-hook="entry_date"]').value;
        var leavingDate = widget.querySelector('[data-hook="leaving_date"]').value;

        //NUMBER OF ADULTS
        if(widget.querySelector('[data-hook="numberAdults"]') != null) {
        var numberAdults = parseInt(widget.querySelector('[data-hook="numberAdults"]').value);
        if(typeof numberAdults != 'number' || numberAdults < 0 || numberAdults > 10 || isNaN(numberAdults)) {
            Swal.fire({
                icon: 'error',
                title: "Something is not right...",
                text: 'Incorrect number of adults!'
              });
              return 'No';
            }
        }
        //NUMBER OF ADULTS

        //NUMBER OF MINORS
        if(widget.querySelector('[data-hook="numberMinors"]') !=  null) {
        var numberMinors = parseInt(widget.querySelector('[data-hook="numberMinors"]').value);
        if(typeof numberMinors != 'number' || numberMinors < 0 || numberMinors > 10) {
            Swal.fire({
                icon: 'error',
                title: "Something is not right...",
                text: 'Incorrect number of minors!'
              });
              return 'No';
            }
        }
        //NUMBER OF MINORS

        //NAME
        if(widget.querySelector('[data-hook="name"]') != null) {
        var name = widget.querySelector('[data-hook="name"]').value;
        if(name.length == 0 || name.length > 30) {
            Swal.fire({
                icon: 'error',
                title: "Something is not right...",
                text: 'Incorrect name!'
              });
              return 'No';
            }
        }
        //NAME

        //SURNAME
        if(widget.querySelector('[data-hook="surname"]') != null) {
        var surname = widget.querySelector('[data-hook="surname"]').value;
        if(surname.length == 0 || surname.length > 50) {
            Swal.fire({
                icon: 'error',
                title: "Something is not right...",
                text: 'Incorrect surname!'
              });
              return 'No';
            }
        }
        //SURNAME

        //COMMENTS
        if(widget.querySelector('[data-hook="comments"]') != null) {
        var comments = widget.querySelector('[data-hook="comments"]').value;
        if(comments.length > 500) {
            Swal.fire({
                icon: 'error',
                title: "Something is not right...",
                text: 'Incorrect comment!'
              });
              return 'No';
            }
        }
        //COMMENTS

        //MESSAGE
        if(widget.querySelector('[data-hook="message"]') != null) {
        var message = widget.querySelector('[data-hook="message"]').value;
        if(message.length == 0 || message.length > 2000) {
            Swal.fire({
                icon: 'error',
                title: "Something is not right...",
                text: 'Incorrect message!'
              });
              return 'No';
            }
        }
        //MESSAGE

        //CITY
        if(widget.querySelector('[data-hook="city"]') != null){
        var city = widget.querySelector('[data-hook="city"]').value;
        if(city.length == 0 || city.length > 20) {
            Swal.fire({
                icon: 'error',
                title: "Something is not right...",
                text: 'Incorrect city!'
              });
              return 'No';
            }
        }
        //CITY
        return 'Ok'; 
    }

    backToTopButton.addEventListener("click", backToTop);
}
window.addEventListener('DOMContentLoaded', window_onDomContentLoaded);