const fallback = document.getElementById('fallback')
const adminContent = document.getElementById('admin-content')
const login = document.getElementById('login')
const password = document.getElementById('password')
const errorText = document.getElementById('error-text')
const submitBtn = document.getElementById('submit-btn')

const APP_PASSWORD = 'poehali'
const APP_LOGIN = 'avto2024'
addEventListener('DOMContentLoaded', () => {
	fallback.style.display = 'block'
	adminContent.style.display = 'none'
	errorText.style.display = 'none'
})

submitBtn.addEventListener('click', () => {
	if (login.value === APP_LOGIN && password.value === APP_PASSWORD) {
		fallback.style.display = 'none'
		adminContent.style.display = 'block'
	} else {
		errorText.style.display = 'block'
		errorText.textContent = 'Неверный логин или пароль'
	}
})
