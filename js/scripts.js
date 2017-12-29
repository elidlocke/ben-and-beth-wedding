var submitted = false;

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  //Show and Hide Form Fields
  $("#yes").click(function(e) {
    $("#yes").removeClass("btn-default");
    $("#no").removeClass("btn-default");
    $("#yes").removeClass("btn-deselect");
    $("#yes").addClass("btn-select");
    $("#no").addClass("btn-deselect");
    $("#no").removeClass("btn-select");
    $(".decline-form").addClass("hide");
    $(".accept-form").removeClass("hide");
    $("#rsvp-submit").removeClass("hide");

  });
  //Show and Hide Form Fields
  $("#no").click(function(e) {
    $("#no").removeClass("btn-default");
    $("#yes").removeClass("btn-default");
    $("#no").removeClass("btn-deselect");
    $("#no").addClass("btn-select");
    $("#yes").addClass("btn-deselect");
    $("#yes").removeClass("btn-select");
    $(".decline-form").removeClass("hide");
    $(".accept-form").addClass("hide");
    $("#rsvp-submit").removeClass("hide");

  });
  //hide fields on form submit
  $( "#rsvp-submit" ).click(function(e) {
    $(".rsvp-form").addClass("hide");
    $(".thanks").removeClass("hide");
    $(".make-it").addClass("hide");
    
  });
})(jQuery); // End of use strict


