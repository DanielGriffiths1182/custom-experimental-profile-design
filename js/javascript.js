$( document ).ready(function() {

  $(function(){
    $("#header").load("views/header.html");
    $("#footer").load("views/footer.html");
  });

  $('.btn.btn-default').click(function() {
      $('.skills').show(500);
      $('.container-one').hide(0);
  });

  var $slider = document.getElementById('nav');
  var $toggle = document.getElementById('buttonStart');

  $toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('slide-in');

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
  });

});
