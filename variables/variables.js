$(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
      $('#top-btn').addClass('on');
   } else {
      $('#top-btn').removeClass('on');
   }
});

$('#top-btn').click(function () {
   window.scrollTo({ top: 0, behavior: 'smooth' });
});
