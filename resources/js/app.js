window.$ = window.jQuery = require('jquery');
import macy from  'macy';
import slick from 'slick-carousel';

// var mySwiper2 = new Swiper('.swiper-container.reviews-swiper', {
//   slidesPerView: 2,
//   spaceBetween: 40,
//   slidesPerGroup: 2,
//   speed: 500,
//   loop: true,
//   autoHeight: true,
//
//   autoplay: {
//     delay: 5000,
//   },
//
//   breakpoints: {
//
//     767: {
//       slidesPerView: 1,
//       slidesPerGroup: 1,
//       spaceBetween: 20
//     },
//
//     991: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//       spaceBetween: 20
//     },
//
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// })

class App {
  constructor() {

  }

  macy_params(selector, column,trueOrder, waitForImages, m_x, m_y, br_1200, br_940, br_520, br_400
  ) {
    return{
      container: selector,
      columns: column,
      trueOrder: trueOrder,
      waitForImages: waitForImages,
      margin: {
        x: m_x,
        y: m_y
      },
      breakAt: {
        1200: br_1200,
        940: br_940,
        520: br_520,
        400: br_400
      }
    }
  }
  macy_gallery() {
    if($('.pool-gallery__gallery-wrap').length != 0) {
      macy(this.macy_params(
          '.pool-gallery__gallery-wrap',
          2, false,
          false,
          18, 22, 2,
          2,2,2
      ));
    }
  };
  cut_eny_text(selector, condition,neededlength) {
    let text  = document.querySelectorAll(`.${selector}`);

    text.forEach(function (text) {
      let getText = text.textContent;

      text.textContent = getText.length > condition    ?
          text.textContent.slice(0, neededlength) + '...' :
          text.textContent;
    })
  };
  check_window_width() {
    // let prod_count = 2;
    // let width = $(window).width();
    // if(width <=960 && width > 768) {
    //   prod_count = 3;
    // }
    // if (width < 769) {
    //   prod_count = 4;
    // }
    // return prod_count;
  };
  load_more_items(selector,condition) {
    let that = this;
    let counter = () => {
      let visible_items = $(`${selector}:visible`);
      let all_products = $(selector);
      let btn = $('.js-load-more');
    };

    $(selector).slice(0, 5).css('display','block');
    counter();
    $(".js-load-more").on('click', function (e) {
      e.preventDefault();
      setTimeout(() => {
        if ($(`${selector}:hidden`).length == 0) {
          $(this).remove();
          return
        }
      },400);

      $(`${selector}:hidden`).slice(0, condition).css('display','block');
      that.macy_gallery();

      counter();

      $('html,body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });

  };
  show_all_items(selectItem) {
    $(selectItem).css('display','block');
  };
  load_home_gallery_items(){
    this.load_more_items('.gallery-item', 5);
  };
  show_all_popular_home(selector, button) {
    let items = $('.most-popular__wrap .pool-item');
    let btn = $('.js-btn--show-all');
    items.slice(0, 3).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      $('html,body').animate({
        scrollTop: btn.offset().top
      }, 1000);

      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  show_all_hit_sale(selector, button) {
    let items = $('.hit-sale .product');
    let btn = $('.js-hit-sale');
    items.slice(0, 5).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  show_all_sales(selector, button) {
    let items = $('.all-sales .product');
    let btn = $('.js-all-sales');
    items.slice(0, 5).css('display','block');

    btn.on('click', () => {
      this.show_all_items(items);
      if ($(`items:hidden`).length == 0) {
        btn.addClass('hidden');
      }
    });
  };
  sick_set() {

  };
  slider_images() {
    let img_slider = $('.images-slider .images-slider__wrap');
    img_slider.slick({
      nextArrow: `<button type="button" class="sliders-nav sliders-nav__next">
                    <img src="resources/img/shop/s_next.png" alt="">
                  </button>`,
      prevArrow: `<button type="button" class="sliders-nav sliders-nav__prev">
          <img src="resources/img/shop/s_prev.png" alt="">
        </button>`,
      adaptiveHeight: true,
    });
  };
  slider_companies() {
    let companies_slider = $('.companies-slider .companies-slider__wrap');
    companies_slider.slick({
      nextArrow: `<button type="button" class="sliders-nav sliders-nav__next">
          <img src="resources/img/shop/s-nex-black.png" alt="">
        </button>`,
      prevArrow: `<button type="button" class="sliders-nav sliders-nav__prev">
          <img src="resources/img/shop/s-prev-black.png" alt="">
        </button>`,
      slidesToShow: 5,
    });
  };
  slider_poular_category(){
    let poular_category = $('.slide-popular-category .slide-popular-category__wrap');
    poular_category.slick({
      nextArrow: `<button type="button" class="sliders-nav sliders-nav__next">
          <img src="resources/img/shop/s-nex-black.png" alt="">
        </button>`,
      prevArrow: `<button type="button" class="sliders-nav sliders-nav__prev">
          <img src="resources/img/shop/s-prev-black.png" alt="">
        </button>`,
      slidesToShow: 6,
      adaptiveHeight: true,
    });
  };


  init () {
    this.macy_gallery();
    this.cut_eny_text();
    this.check_window_width();
    this.load_home_gallery_items();
    this.show_all_popular_home();
    this.slider_images();
    this.slider_companies();
    this.slider_poular_category();
    this.show_all_hit_sale();
    this.show_all_sales();
  }

}

let app = new  App();

app.init();



//
$('.left-popup__open').click(function () {
  $(".left-popup").addClass("left-popup--active");
  $('.layer-bg').addClass('active');
});

$(document).on('mouseup', (e) =>{
  let p = $(".left-popup");
  if (!p.is(e.target) && p.has(e.target).length === 0) {
    $(".left-popup").removeClass("left-popup--active");
    $('.layer-bg').removeClass('active');
  }
});

$('.left-popup__close').click(function () {
  $(".left-popup").removeClass("left-popup--active");
  $('.layer-bg').removeClass('active');
});

$('.js-open-menu').click(function () {
  $(".js-menu").fadeToggle(100);
  document.body.style.overflowY = "hidden";
});

$('.js-close-menu').click(function () {
  $('.js-menu').fadeOut();
  document.body.style.overflowY = "scroll";
});

