window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})


  $(document).ready(function(){
  $("a[href*='#']").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
});


// When the user clicks on div, open the popup
function openModal() {
    var popup = document.getElementById("myOverlay");
    console.log(popup);
    popup.classList.toggle("show");
}

function closeModal() {
  var popup = document.getElementById("myOverlay");
  console.log(popup);
  popup.classList.toggle("show");
}

function openModal2() {
  var popup = document.getElementById("myOverlay2");
  console.log(popup);
  popup.classList.toggle("show");
}

function closeModal2() {
  var popup = document.getElementById("myOverlay2");
  console.log(popup);
  popup.classList.toggle("show");
}