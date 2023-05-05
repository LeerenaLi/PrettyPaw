import './index.html';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
    }
});



slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 19
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 26
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 30
        }
    }
});

const slide = document.querySelectorAll('.career__image-item');


    
slide.forEach(item => {
    const index = item.dataset.swiperSlideIndex;
    console.log('index: ', index);

    let evenIndex;
    let oddIndex;
    
    if (index % 2 === 0) {
        evenIndex = index;
        item.classList.add('career__image-item_even');
    } else {
    oddIndex = index;
    item.classList.add('career__image-item_odd');
    }

})



const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
    <source src="video/video.webm" type="video/webm">
    <source src="video/video.mp4" type="video/mp4">
`;