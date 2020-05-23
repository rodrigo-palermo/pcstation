
/* Função do menu sticky */

$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
      /*direction indica a direção do scrolling: para cima, para baixo */
      /*Se estiver indo para baixao*/
      if(direction=="down"){
         /*Adicionar a classe _sticky_ ao elemento _nav_*/
         $('nav').addClass('sticky');
      }else{
          /*Se tiver indo para cima*/
         /*Remover a classe _sticky_ do elemento _nav_*/
         $('nav').removeClass('sticky');
      }
      
    },{offset:'160px;'});
  
    // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /*AULA 22/05/2020 - menu responsivo*/
  /*Código do menu responsivo*/
  // Ao clicar no elemnto com a classe 'js--mobile-nav-icon'
  $('.js--mobile-nav-icon').click(function() {
    // executa a funçao
    var nav = $('.js--main-nav');
    var icon = $('.mobile-nav-icon ion-icon');
    nav.slideToggle(200);

    //Verrifica se tem essa classe (conforme o nome do ícone escolhido) no elemnto i. Se sim, altera
    if(icon.prop('name') == 'menu-sharp'){
      icon.prop('name','close-sharp')
    } else {
      icon.prop('name','menu-sharp')
    }

  });
 // tentativa de fazer o menu desaparecer após clicar em algum item. Causa comportamento indesejado: faz desaparecer e reaparecer menu em outras media queries
  // $('li a').click(function() {
  //   var nav = $('.js--main-nav')
  //   var icon = $('.mobile-nav-icon ion-icon')

  //   nav.delay(3000).slideToggle(200);
  //   icon.prop('name','menu-sharp').delay(4000);
  // })
  
});