import Swiper, { 
    Autoplay, 
    Navigation, 
    Pagination, 
    Thumbs, 
    Mousewheel, 
    Scrollbar, 
    EffectFade, 
    Zoom,
} from 'swiper';

// ----- Title slider -----------------------------------------------------------------------

export function swiperTitleSlider() {
    
    if (!document.querySelector('.title-screen__slider')) return;
    if (!document.querySelector('.title-screen__slider-pagination')) return;

    const aboutSlider = new Swiper('.title-screen__slider', {
        modules: [Pagination, EffectFade, Autoplay],
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        allowTouchMove: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true,
        speed: 1000,
        loop: true,
        preloadImages: false,
        pagination: {
            el: '.title-screen__slider-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="` + className + `">
                        <svg class="title-screen__hexagon-bullet">
                            <use xlink:href="/img/icon_sprite/sprite.svg#hexagon-small"></use>
                        </svg>
                        </span>`;
            },
        },
        breakpoints: {
        
        }
    });

}

//------------------------------------------------------------------------------------------- 

// ----- About slider -----------------------------------------------------------------------

export function swiperAboutSlider() {
    
    if (!document.querySelector('.about-slider')) return;
    if (!document.querySelector('.about-thumbs')) return;
    if (!document.querySelector('.about-slider__pagination')) return;
    if (!document.querySelector('.about-slider__next-button')) return;
    if (!document.querySelector('.about-slider__prev-button')) return;

    const aboutSliderThumbs = new Swiper('.about-thumbs', {
        modules: [Thumbs, EffectFade],
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchOverflow: true,
        slidesPerView: 1, 
        spaceBetween: 0, 
        speed: 300,
        //allowTouchMove: false,
        loop: true,
        //autoHeight: true,
        breakpoints: {
            // 769: {
            //     autoHeight: false,
            // },
        }
    });

    const aboutSlider = new Swiper('.about-slider', {
        modules: [Navigation, Pagination, Thumbs],
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 300,
        preloadImages: false,
        grabCursor: true,
        //allowTouchMove: true,
        loop: true,
        thumbs: { 
            swiper: aboutSliderThumbs,
        },
        pagination: {
            el: '.about-slider__pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="` + className + `">
                <svg class="about-slider__hexagon-bullet">
                <use xlink:href="/img/icon_sprite/sprite.svg#hexagon-small"></use>
                </svg>
                </span>`;
            },
        },
        navigation: {
            nextEl: '.about-slider__next-button',
            prevEl: '.about-slider__prev-button',
        },
        breakpoints: {
        }
    });

}

//--------------------------------------------------------------------------------------------

// ----- Model-as250-white gallery -----------------------------------------------------------

export function modelSlider_as250_w() {

    const thumbsSlider = document.querySelector('[data-model="as250white"] .thumbs-slider');
    const mainSlider = document.querySelector('[data-model="as250white"] .main-slider');
    const prevButton = document.querySelector('[data-model="as250white"] .main-slider__prev-button');
    const nextButton = document.querySelector('[data-model="as250white"] .main-slider__next-button');

    if (!thumbsSlider && !mainSlider) return;

    const modelsThumbs = new Swiper(thumbsSlider, {
        modules: [Thumbs, Mousewheel],
        observer: true,
        observeParents: true,
        preloadImages: false,
        direction: 'vertical', 
        slidesPerView: 3, 
        spaceBetween: 0, 
        mousewheel: {
            sensitivity: 3,
        },
        speed: 500,
        loop: true,
        breakpoints: {
        
        }
    });

    const modelsMain = new Swiper(mainSlider, {
        modules: [Navigation, Pagination, Thumbs, Zoom],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchOverflow: true,
        speed: 1000,
        loop: true,
        preloadImages: false,
        thumbs: { 
            swiper: modelsThumbs,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        zoom: {
            maxRatio: 3,
        },
        breakpoints: {
        
        }
    });

    const mediaQueryHover = window.matchMedia('(any-hover: hover)');

    if (mediaQueryHover.matches) {

        let thumbs =  thumbsSlider.querySelectorAll('.swiper-slide');
        thumbs.forEach(el => el.addEventListener('mouseenter', function() {
            let index = +el.dataset.swiperSlideIndex + 1;
            modelsMain.slideTo(index); 
        }));

    }
}

//------------------------------------------------------------------------------------------- 

// ----- Model-as330-white gallery ---------------------------------------------------------------

export function modelSlider_as330_w() {

    const thumbsSlider = document.querySelector('[data-model="as330white"] .thumbs-slider');
    const mainSlider = document.querySelector('[data-model="as330white"] .main-slider');
    const prevButton = document.querySelector('[data-model="as330white"] .main-slider__prev-button');
    const nextButton = document.querySelector('[data-model="as330white"] .main-slider__next-button');

    if (!thumbsSlider && !mainSlider) return;

    const modelsThumbs = new Swiper(thumbsSlider, {
        modules: [Thumbs, Mousewheel],
        observer: true,
        observeParents: true,
        preloadImages: false,
        direction: 'vertical', 
        slidesPerView: 3, 
        spaceBetween: 0, 
        mousewheel: {
            sensitivity: 3,
        },
        speed: 500,
        loop: true,
        breakpoints: {
        
        }
    });

    const modelsMain = new Swiper(mainSlider, {
        modules: [Navigation, Pagination, Thumbs, Zoom],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchOverflow: true,
        speed: 1000,
        loop: true,
        preloadImages: false,
        thumbs: { 
            swiper: modelsThumbs,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        zoom: {
            maxRatio: 3,
        },
        breakpoints: {
        
        }
    });

    const mediaQueryHover = window.matchMedia('(any-hover: hover)');

    if (mediaQueryHover.matches) {

        let thumbs =  thumbsSlider.querySelectorAll('.swiper-slide');
        thumbs.forEach(el => el.addEventListener('mouseenter', function() {
            let index = +el.dataset.swiperSlideIndex + 1;
            modelsMain.slideTo(index); 
        }));

    }
}

//------------------------------------------------------------------------------------------- 

// ----- Model-as425-white gallery ---------------------------------------------------------------

export function modelSlider_as425_w() {

    const thumbsSlider = document.querySelector('[data-model="as425white"] .thumbs-slider');
    const mainSlider = document.querySelector('[data-model="as425white"] .main-slider');
    const prevButton = document.querySelector('[data-model="as425white"] .main-slider__prev-button');
    const nextButton = document.querySelector('[data-model="as425white"] .main-slider__next-button');

    if (!thumbsSlider && !mainSlider) return;

    const modelsThumbs = new Swiper(thumbsSlider, {
        modules: [Thumbs, Mousewheel],
        observer: true,
        observeParents: true,
        preloadImages: false,
        direction: 'vertical', 
        slidesPerView: 3, 
        spaceBetween: 0, 
        mousewheel: {
            sensitivity: 1,
        },
        speed: 500,
        loop: true,
        breakpoints: {
        
        }
    });

    const modelsMain = new Swiper(mainSlider, {
        modules: [Navigation, Pagination, Thumbs, Zoom],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchOverflow: true,
        speed: 1000,
        loop: true,
        preloadImages: false,
        thumbs: { 
            swiper: modelsThumbs,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        zoom: {
            maxRatio: 3,
        },
        breakpoints: {
        
        }
    });

    const mediaQueryHover = window.matchMedia('(any-hover: hover)');

    if (mediaQueryHover.matches) {

        let thumbs =  thumbsSlider.querySelectorAll('.swiper-slide');
        thumbs.forEach(el => el.addEventListener('mouseenter', function() {
            let index = +el.dataset.swiperSlideIndex + 1;
            modelsMain.slideTo(index); 
        }));

    }
}

//------------------------------------------------------------------------------------------- 

// ----- Model-as250-black gallery -----------------------------------------------------------

export function modelSlider_as250_b() {

    const thumbsSlider = document.querySelector('[data-model="as250black"] .thumbs-slider');
    const mainSlider = document.querySelector('[data-model="as250black"] .main-slider');
    const prevButton = document.querySelector('[data-model="as250black"] .main-slider__prev-button');
    const nextButton = document.querySelector('[data-model="as250black"] .main-slider__next-button');

    if (!thumbsSlider && !mainSlider) return;

    const modelsThumbs = new Swiper(thumbsSlider, {
        modules: [Thumbs, Mousewheel],
        observer: true,
        observeParents: true,
        preloadImages: false,
        direction: 'vertical', 
        slidesPerView: 3, 
        spaceBetween: 0, 
        mousewheel: {
            sensitivity: 3,
        },
        speed: 500,
        loop: true,
        breakpoints: {
        
        }
    });

    const modelsMain = new Swiper(mainSlider, {
        modules: [Navigation, Pagination, Thumbs, Zoom],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchOverflow: true,
        speed: 1000,
        loop: true,
        preloadImages: false,
        thumbs: { 
            swiper: modelsThumbs,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        zoom: {
            maxRatio: 3,
        },
        breakpoints: {
        
        }
    });

    const mediaQueryHover = window.matchMedia('(any-hover: hover)');

    if (mediaQueryHover.matches) {

        let thumbs =  thumbsSlider.querySelectorAll('.swiper-slide');
        thumbs.forEach(el => el.addEventListener('mouseenter', function() {
            let index = +el.dataset.swiperSlideIndex + 1;
            modelsMain.slideTo(index); 
        }));

    }
}

//------------------------------------------------------------------------------------------- 

// ----- Model-as330-black gallery ---------------------------------------------------------------

export function modelSlider_as330_b() {

    const thumbsSlider = document.querySelector('[data-model="as330black"] .thumbs-slider');
    const mainSlider = document.querySelector('[data-model="as330black"] .main-slider');
    const prevButton = document.querySelector('[data-model="as330black"] .main-slider__prev-button');
    const nextButton = document.querySelector('[data-model="as330black"] .main-slider__next-button');

    if (!thumbsSlider && !mainSlider) return;

    const modelsThumbs = new Swiper(thumbsSlider, {
        modules: [Thumbs, Mousewheel],
        observer: true,
        observeParents: true,
        preloadImages: false,
        direction: 'vertical', 
        slidesPerView: 3, 
        spaceBetween: 0, 
        mousewheel: {
            sensitivity: 3,
        },
        speed: 500,
        loop: true,
        breakpoints: {
        
        }
    });

    const modelsMain = new Swiper(mainSlider, {
        modules: [Navigation, Pagination, Thumbs, Zoom],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchOverflow: true,
        speed: 1000,
        loop: true,
        preloadImages: false,
        thumbs: { 
            swiper: modelsThumbs,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        zoom: {
            maxRatio: 3,
        },
        breakpoints: {
        
        }
    });

    const mediaQueryHover = window.matchMedia('(any-hover: hover)');

    if (mediaQueryHover.matches) {

        let thumbs =  thumbsSlider.querySelectorAll('.swiper-slide');
        thumbs.forEach(el => el.addEventListener('mouseenter', function() {
            let index = +el.dataset.swiperSlideIndex + 1;
            modelsMain.slideTo(index); 
        }));

    }
}

//------------------------------------------------------------------------------------------- 

// ----- Model-as425-black gallery ---------------------------------------------------------------

export function modelSlider_as425_b() {

    const thumbsSlider = document.querySelector('[data-model="as425black"] .thumbs-slider');
    const mainSlider = document.querySelector('[data-model="as425black"] .main-slider');
    const prevButton = document.querySelector('[data-model="as425black"] .main-slider__prev-button');
    const nextButton = document.querySelector('[data-model="as425black"] .main-slider__next-button');

    if (!thumbsSlider && !mainSlider) return;

    const modelsThumbs = new Swiper(thumbsSlider, {
        modules: [Thumbs, Mousewheel],
        observer: true,
        observeParents: true,
        preloadImages: false,
        direction: 'vertical', 
        slidesPerView: 3, 
        spaceBetween: 0, 
        mousewheel: {
            sensitivity: 1,
        },
        speed: 500,
        loop: true,
        breakpoints: {
        
        }
    });

    const modelsMain = new Swiper(mainSlider, {
        modules: [Navigation, Pagination, Thumbs, Zoom],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchOverflow: true,
        speed: 1000,
        loop: true,
        preloadImages: false,
        thumbs: { 
            swiper: modelsThumbs,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        zoom: {
            maxRatio: 3,
        },
        breakpoints: {
        
        }
    });

    const mediaQueryHover = window.matchMedia('(any-hover: hover)');

    if (mediaQueryHover.matches) {

        let thumbs =  thumbsSlider.querySelectorAll('.swiper-slide');
        thumbs.forEach(el => el.addEventListener('mouseenter', function() {
            let index = +el.dataset.swiperSlideIndex + 1;
            modelsMain.slideTo(index); 
        }));

    }
}

//------------------------------------------------------------------------------------------- 
