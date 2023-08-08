import IMask from 'imask'
import flatpickr from "flatpickr"
import { Russian } from "flatpickr/dist/l10n/ru.js"

document.addEventListener('DOMContentLoaded', () => {
	const phoneInputList = document.querySelectorAll('input[type="tel"]')

	if (phoneInputList.length) {
		phoneInputList.forEach((phoneInput) => {
			IMask(phoneInput, {
				mask: '+{7} 000 000 00 00'
			})
		})
	}

	const dateInputList = document.querySelectorAll('.form-group__input--date')

	if (dateInputList.length) {
		console.log(1)
		dateInputList.forEach((dateInput) => {
			flatpickr(dateInput, {
				"locale": Russian,
				dateFormat: "d.m.Y",
			});
		})
	}
})
