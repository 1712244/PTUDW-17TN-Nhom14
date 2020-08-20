$('.slick-book-here').slick({
  slidesToShow: 7,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }

  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  }]

});

$('.slick-nav-book-here').slick({
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }

  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]

});

$('.navitema').on('click', function (e) {
  e.preventDefault();
  $('.nav-link').removeClass('active');
  $(this).tab('show');  
});
$('a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
  e.target
  e.relatedTarget
  $('.slick-book-here').slick('setPosition');
});