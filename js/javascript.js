$( document ).ready(function() {

  $('.btn.btn-default').click(function() {
      $('.skills').show(500);
      $('.container-one').hide(100);
      $("#header").load("views/header.html");
      $("#footer").load("views/footer.html");
  });

  var $headerSlider = document.getElementById('nav');
  var $toggle = document.getElementById('buttonStart');

  $toggle.addEventListener('click', function() {
    var isOpen = $headerSlider.classList.contains('slide-in');

    $headerSlider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
  });

});
