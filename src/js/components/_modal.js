import Swiper from 'swiper'
import {EffectCreative} from "swiper/modules";

// Open modal window
const modalLinks = document.querySelectorAll('[data-modal]')
modalLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault()
		showModal(link.dataset.modal)
		return false
	})
})

// Show modal window
function showModal(modalName) {
	const modal = document.querySelector(`#${modalName}`)
	if (!modal) {
		console.log(`Modal #${modalName} does not exist!`)
		return
	}

	if (document.querySelector('.modal--shown')) {
		closeModal()
	}

	document.documentElement.style.overflow = 'hidden'
	document.body.style.overflow = 'hidden'

	modal.classList.add('modal--show')
	initSlider(modal)

	setTimeout(
		() => {
			modal.classList.add('modal--backdrop')
		},
		50,
		modal
	)

	setTimeout(
		() => {
			modal.classList.add('modal--shown')
		},
		300,
		modal
	)
}

// Close modal window
function closeModal() {
	const modal = document.querySelector('.modal--shown')
	modal.classList.remove('modal--shown')

	setTimeout(
		() => {
			modal.classList.remove('modal--backdrop')
		},
		150,
		modal
	)

	setTimeout(
		() => {
			modal.classList.remove('modal--show')
		},
		350,
		modal
	)

	document.documentElement.style.overflow = ''
	document.body.style.overflow = ''
}

const closeButtons = document.querySelectorAll('.js-modal-close')

closeButtons.forEach((button) => {
	button.addEventListener('click', closeModal)
})

// Close on backdrop click
const modalList = document.querySelectorAll('.modal')
if (modalList) {
	modalList.forEach((modal) => {
		modal.addEventListener('click', (e) => {
			if (e.target.classList.contains('modal')) {
				closeModal()
			}
		})
	})
}

let slider = null
const initSlider = (modal) => {
	const sliderEl = modal.querySelector('.modal__slider')
	if (!sliderEl || slider) return

	slider = new Swiper(sliderEl, {
		modules: [EffectCreative],
		watchSlidesProgress: true,
		slidesPerView: 5,
		spaceBetween: 0,
		loop: true,
		effect: "creative",
		centeredSlides: true,
		creativeEffect: {
			limitProgress:5,
			prev: {
				translate: ['-100%', 0, 0],
				scale: [.7],
			},
			next: {
				translate: ['100%', 0, 0],
				scale: [.7],
			},
		},
	})

	setInterval(() => {
		slider.slideNext()
	}, 1000, slider)
}
