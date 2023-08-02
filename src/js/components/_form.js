import IMask from 'imask'

document.addEventListener('DOMContentLoaded', () => {
	const phoneInputList = document.querySelectorAll('input[type="tel"]')
	if(!phoneInputList.length) return

	phoneInputList.forEach((phoneInput) => {
		IMask(phoneInput, {
			mask: '+{7} 000 000 00 00'
		})
	})
})
