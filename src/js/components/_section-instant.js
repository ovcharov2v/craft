import Swiper from 'swiper';
import {Navigation} from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
	const sliderEl = document.querySelector('.section-instant__slider .swiper')
	if(!sliderEl) return

	new Swiper(sliderEl, {
		modules: [Navigation],
		slidesPerView: 4,
		spaceBetween: 24,
		grabCursor: true,
		navigation: {
			nextEl: ".section-instant__slider-btn--next",
			prevEl: ".section-instant__slider-btn--prev"
		},
	})
})
