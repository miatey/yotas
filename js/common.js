$(document).ready(function() {
	$('.slick__conteiner').slick({
  dots: true,
  infinite: true,
	autoplay: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '.slick-left',
  nextArrow: '.slick-right'
	});

	$('.forbes__conteiner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  adaptiveHeight: true,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next',
	responsive: [
    {
      breakpoint: 1025,
      settings: {
				dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 601,
      settings: {
				dots: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 481,
      settings: {
				dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
				autoplay: true,
      }
    }
  ]
	});

	$('.product__slick').slick({
  dots: true,
  infinite: true,
	autoplay: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next'
	});
// функция для начала проигрования видео по клику на его блок
	$(".view").click(function(){
		var video = document.getElementById("movie");
		if (video.paused) {
			 video.play();
			 video.controls= true ;
		} else {
			 video.pause();
			 video.controls= false ;
		}
	});
// показывать кнопку меню при ширине окна меньше 1000
	$('body').on('click', function(){
		if ($(window).width() <= 1000) {
			$('.js-header').removeClass('is-active');
			$('.js-header-nav').slideUp(200);
		}
	});
// открыть навигацию при клике на кнопку меню
	$('.js-btn-menu').on('click', function(event){
		var this_ = $(this),
			parent = this_.parents('.js-header'),
			nav = parent.find('.js-header-nav');
		if (!parent.hasClass('is-active')){
			parent.addClass('is-active');
			nav.slideDown(200);
		}
		else {
			parent.removeClass('is-active');
			nav.slideUp(200);
		}
		event.stopPropagation();
	});

	$h = $('.js-header').offset().top;
	$(window).scroll(function(){
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию
		if ( ($(window).scrollTop() > $h) && ($(window).width() <= 1000) ) {
        	$(".js-header").css({"position":"fixed", "top":0 , "border-bottom":"solid 2px #fff", "z-index":50});
        }else{
            //Иначе возвращаем всё назад. Тут вы вносите свои данные
        	$(".js-header").css({"position":"static", "border-bottom":"none"});
        }
  });

});
