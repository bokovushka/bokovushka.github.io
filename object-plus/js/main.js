   // mobile menu
(function () {
    const header_burger = document.querySelector('.header_burger');
    const mobile_menu = document.querySelector('.header_menu');
    const language = document.querySelector('.language');
    header_burger.addEventListener('click',() => {
        if(document.querySelector('.header_burger_active') != null ) {
            document.querySelector('p').innerHTML= 'Меню'; 
        } else {
             document.querySelector('p').innerHTML= 'Закрыть';
        }
        header_burger.classList.toggle('header_burger_active') ;
        mobile_menu.classList.toggle('header_menu_active');
        language.classList.toggle('language_active');

    });
}()
    );

   // parallax
    // let bg = document.querySelector('.parallax');
    // window.addEventListener('mousemove', function(e) {
    //     let x = e.clientX / window.innerWidth;
    //     let y = e.clientY / window.innerHeight;  
    //     bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    // });


    // slick slider
    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.project_list').slick('slickGoTo', slideno - 1);
      });

    //acardion
    $(document).ready(function() {
        //toggle the component with class accordion_body
        $(".accordion_head").click(function() {
          $(this).removeClass('coll-back');
          if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
            $(this).removeClass('coll-back');
            $('.rmv-cls').removeClass('coll-back');
          }
    
          if($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
            $(this).removeClass('coll-back');
          }else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('');
            $(this).children(".plusminus").append('<hr class="hr-clc">');
            $(this).toggleClass('coll-back');
            $(this).addClass('rmv-cls');
          }
        });
      });
      
      //overlay
      $(".buttons").on("click", function() {
        $(".overlay").addClass("is-on");
      });
      
      $("#close").on("click", function() {
        $(".overlay").removeClass("is-on");
      });
      $(".overlay_close").on("click", function() {
        $(".overlay").removeClass("is-on");
      });
      

    