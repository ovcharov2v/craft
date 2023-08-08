document.addEventListener('DOMContentLoaded', () => {
	const loadMoreBtnList = document.querySelectorAll('.data-card__more-button')
	if (!loadMoreBtnList.length) return

	loadMoreBtnList.forEach((loadMoreBtn) => {
		loadMoreBtn.addEventListener('click', () => {
			const hiddenRows = loadMoreBtn.closest('.data-card').querySelectorAll('.data-card__row--hidden')
			if (!hiddenRows.length) return

			hiddenRows.forEach((row, index) => {
				row.classList.add('data-card__row--hide')
				row.classList.remove('data-card__row--hidden')

				setInterval(() => {
					row.classList.remove('data-card__row--hide')
				}, 70 * index)
			})
			loadMoreBtn.classList.add('data-card__more-button--hidden')
		})
	})
})
