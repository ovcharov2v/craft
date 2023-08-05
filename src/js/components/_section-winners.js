document.addEventListener('DOMContentLoaded', () => {
	const loadWinnersBtn = document.querySelector('.section-winners__button')
	if (!loadWinnersBtn) return

	loadWinnersBtn.addEventListener('click', () => {
		const hiddenWinnersList = document.querySelectorAll('.section-winners__row--hidden')
		if(!hiddenWinnersList.length) return

		hiddenWinnersList.forEach((winner, index)=>{
			winner.classList.add('section-winners__row--hide')
			winner.classList.remove('section-winners__row--hidden')

			setInterval(()=>{
				winner.classList.remove('section-winners__row--hide')
			}, 70*index)
		})
		loadWinnersBtn.classList.add('section-winners__button--hidden')
	})
})
