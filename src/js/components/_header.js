document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header')
	if (!header) return

	(function headerWatcher() {
		if (window.innerWidth >= 1024) {
			const isHeaderFixed = header.classList.contains('header--fixed')

			if (window.scrollY < 600) {
				if (isHeaderFixed) {
					header.style.transform = 'translateY(-100%)'
					setTimeout(() => {
						header.classList.remove('header--fixed')
						header.style.transform = ''
					}, 300)
				}
			} else {
				if (!isHeaderFixed) {
					header.style.transform = 'translateY(-100%)'
					setTimeout(() => {
						header.classList.add('header--fixed')
						header.style.transform = ''
					}, 300)
				}
			}
		}
		requestAnimationFrame(headerWatcher)
	})()

	const menuBtn = header.querySelector('.header__menu-btn')

	menuBtn.addEventListener('click', () => {
		header.classList.add('header--menu-animate')
		setTimeout(() => {
			if (header.classList.contains('header--menu-show')) {
				header.classList.remove('header--menu-show')
				document.body.style.overflow = ''
			} else {
				header.classList.add('header--menu-show')
				document.body.style.overflow = 'hidden'
			}
			setTimeout(() => {
				header.classList.remove('header--menu-animate')
			}, 300)
		})
	})
})
