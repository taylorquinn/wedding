function start() {

var elementPosition = $('#header_nav').offset();

$(window).scroll(function() {
  if ($(window).scrollTop() > elementPosition.top) {
    $('#header_nav').css('position', 'fixed').css('top', '0');
  } else {
    $('#header_nav').css('position','static');
  }
});

$(window).scroll(function(){
    $("#header_pic").css("opacity", 1 - $(window).scrollTop() / 1550);
}); 

}

window.onload = start;

  var container = document.querySelector('#masonry');
      var masonry = new Masonry(container, {
        columnWidth: 50,
        itemSelector: '.item'
      });