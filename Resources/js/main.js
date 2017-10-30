$(document).ready(function() {
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false,
  });

  var userScroll = 0;
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (scrollTop - userScroll >= 50) {
        var heightNavbar = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + heightNavbar}, 150);
        userScroll = scrollTop;
      } else if (userScroll - scrollTop > 50) {
        $('.navbar').animate({top: '0px'}, 150);
        userScroll = scrollTop;
      }
    });



});
