$(document).ready(function(){$('a').smoothScroll({speed:900});var slider=$(".slider"),pointerPrev=$(".pointer_prev"),pointerNext=$(".pointer_next");slider.slick({arrows:!0,fade:!0,prevArrow:$(".pointer_prev"),nextArrow:$(".pointer_next")});$('.item__text').textillate({in:{effect:'rollIn',delay:5},loop:!1});slider.on('init',function(event,slick,currentSlide){$('.item__text').textillate('start')});slider.on('beforeChange',function(event,slick,currentSlide,nextSlide){var sliderItems=$(this).find('.slider__item');$(sliderItems[nextSlide]).find('.item__text').css({opacity:0})});slider.on('afterChange',function(event,slick,currentSlide){var sliderItems=$(this).find('.slider__item');$(sliderItems[currentSlide]).find('.item__text').css({opacity:1});$('.item__text').textillate('start')});slider.on('mouseover',function(){pointerPrev.addClass("pointer_prev_show");pointerNext.addClass("pointer_next_show")});$(".pointer").on('mouseover',function(){pointerPrev.addClass("pointer_prev_show");pointerNext.addClass("pointer_next_show")});$(".pointer-container").on('mouseover',function(){pointerPrev.addClass("pointer_prev_show");pointerNext.addClass("pointer_next_show")});slider.on('mouseleave',function(){pointerPrev.removeClass("pointer_prev_show");pointerNext.removeClass("pointer_next_show")});$(".poster__play-button").on('click',function(){$(".video__item_poster").addClass("poster_hide");$("iframe.video__item").attr("src","https://player.vimeo.com/video/212731897?	color=ffffff&title=0&byline=0&autoplay=1")});var owl=$("#services .owl-carousel"),next=$(".arrow_front"),prev=$(".arrow_back");owl.owlCarousel({loop:!0,margin:10,responsiveClass:!0,rewind:!1,dots:!1,responsive:{0:{items:1},480:{items:2},1024:{items:3}}});$('.arrow_front').click(function(event){owl.trigger('next.owl.carousel')});$('.arrow_back').click(function(event){owl.trigger('prev.owl.carousel',[300])});var owl2=$("#clients .owl-carousel"),clientsItems=$("#clients .item").length,clientsCurrentItem=1;var current=$('.clients__counter__item1'),allCount=$('.clients__counter__item2');allCount.text(clientsItems);current.text(clientsCurrentItem);owl2.owlCarousel({loop:!0,margin:10,responsiveClass:!0,rewind:!1,dots:!1,autoplay:!0,autoplayTimeout:10000,autoplayHoverPause:!0,items:1});$('.clients__arrow_next').click(function(event){if(clientsCurrentItem==clientsItems){clientsCurrentItem=1;current.text(clientsCurrentItem);owl2.trigger('next.owl.carousel')}else{clientsCurrentItem++;current.text(clientsCurrentItem);owl2.trigger('next.owl.carousel')}});$('.clients__arrow_back').click(function(event){if(clientsCurrentItem==1){clientsCurrentItem=clientsItems;current.text(clientsCurrentItem);owl2.trigger('prev.owl.carousel',[300])}else{clientsCurrentItem--;current.text(clientsCurrentItem);owl2.trigger('prev.owl.carousel',[300])}});var galleryContainer=$(".gallery__items"),isotopFilterButtons=$(".works__nav__item");isotopFilterButtons.on('click',function(){var filterValue=$(this).attr('data-filter');galleryContainer.isotope({filter:filterValue});for(var i=0;i<isotopFilterButtons.length;i++){$(isotopFilterButtons[i]).removeClass('works__nav__item_active')}
$(this).addClass('works__nav__item_active')});var magnificPopup=$.magnificPopup.instance;$('.gallery__items').magnificPopup({delegate:'.item__hover__zoom',type:'image',gallery:{enabled:!0,navigateByImgClick:!1,preload:[0,2],tCounter:'<span class="popup-counter">%curr% / %total%</span>',arrowMarkup:''},zoom:{enabled:!0,duration:300,opener:function(element){return element.find('img')}},image:{verticalFit:!0,titleSrc:function(item){return item.el.attr('title')}},callbacks:{open:function(){movePopup()},change:function(){$(this.content).find('.mfp-counter').append('<div class="popup__arrow popup__arrow_next"><div class="popup__arrow__line-short popup__arrow__line-up"></div><div class="popup__arrow__line"></div><div class="popup__arrow__line-short popup__arrow__line-down"></div></div>');$(this.content).find('.mfp-counter').prepend('<div class="popup__arrow popup__arrow_back"><div class="popup__arrow__line-short popup__arrow__line-up"></div><div class="popup__arrow__line"></div><div class="popup__arrow__line-short popup__arrow__line-down"></div></div>')}}});function movePopup(){if(magnificPopup.index+1==magnificPopup.items.length)
$('.popup__arrow_next').addClass('popup__arrow_gray');else if(magnificPopup.index==0)
$('.popup__arrow_back').addClass('popup__arrow_gray');$('.popup__arrow_next').click(function(){if(magnificPopup.index+1==magnificPopup.items.length)
return;else{magnificPopup.next();movePopup()}});$('.popup__arrow_back').click(function(){if(magnificPopup.index==0)
return;else{magnificPopup.prev();movePopup()}})}})