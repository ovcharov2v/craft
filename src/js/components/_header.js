function headerWatcher() {
	const header = document.querySelector('.header')
	if(!header) return
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
	requestAnimationFrame(headerWatcher)
}

headerWatcher();
