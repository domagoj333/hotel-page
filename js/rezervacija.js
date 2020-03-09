$( document ).ready(function() {

  //testiranje pomicanja bcg on scroll
  function parallax() {
    var wScroll = $(window).scrollTop();

    //pomicanje backgrounda
    $('.rezervacija-bcg').css('background-position', 'center ' + (-wScroll*0.2) + 'px');
  };
  //pozivanje funkcije
  $(window).scroll(function() {
    parallax();
  });



  //dodavanje i micanje srednjeg dijela
  $('.itemset-hall').hide();
  $('.reservation-type select').change(function(){

    let eVal = $(this).val();

    if (eVal == 2) {
      $('.itemset-hall').hide('slow', function() {
        $('.itemset-rooms').show('slow');
      });
    } if (eVal == 3) {
      $('.itemset-rooms').hide('slow', function() {
        $('.itemset-hall').show('slow');
      });
    }
  });



  //promjena bordera na zeleno i velicine fonta
  $('select').change(function(){

    let eVal = $(this).val();

    if (eVal > 1) {
      $(this).addClass('when-selected');
      $(this).prev().css({
        'font-size': '2rem',
        'color': '#3B9944'
      });
    } else {
      $(this).removeClass('when-selected');
      $(this).prev().css({
        'font-size': '3rem',
        'color': 'black'
        });
    }
  });




});
