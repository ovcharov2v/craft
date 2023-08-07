import Swiper from 'swiper';
import {Navigation} from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
	const sliderEl = document.querySelector('.section-instant--prize-and-rules .section-instant__slider-elem')
	if (sliderEl) {
		new Swiper(sliderEl, {
			modules: [Navigation],
			slidesPerView: 2.2,
			spaceBetween: 8,
			grabCursor: true,
			navigation: {
				nextEl: ".section-instant__slider-btn--next",
				prevEl: ".section-instant__slider-btn--prev"
			},
			breakpoints: {
				560: {
					slidesPerView: 3.2,
					spaceBetween: 8
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 24,
				}
			}
		})
	}

	let sliderLk
	let sliderLkEl = document.querySelector('.section-instant--lk .section-instant__slider-elem')

	const initLkSlider = () => {
		const width = window.innerWidth

		if (width > 1024) {
			if (sliderLk !== undefined) {
				sliderLk.destroy(true, true)
				sliderLk = undefined
			}
		} else {
			if (sliderLk === undefined) {
				sliderLk = new Swiper(sliderLkEl, {
						slidesPerView: 1.2,
						spaceBetween: 24,
						grabCursor: true,
						breakpoints: {
							560: {
								slidesPerView: 2.2
							},
							768: {
								slidesPerView: 3.2
							}
						}
					}
				)
			}
		}
	}

	if(sliderLkEl) {
		initLkSlider()
		window.addEventListener('resize', initLkSlider, true)
	}
})
