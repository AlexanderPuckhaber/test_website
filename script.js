function main() {
  $('.box').hide();
  $('.box').fadeIn(1000);
  $('.box').on('click', function () {

    //alert($('.box'));
    $('.box').toggleClass('active');
    //creates new box
    var $newBox = $('.box').clone();
    $newBox.toggleClass('inactive');
    $newBox.appendTo(document.body);

  });


}

$(document).ready(main);