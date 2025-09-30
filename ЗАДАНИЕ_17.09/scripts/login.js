const passwordInput = document.getElementById('exampleInputPassword1')
const emailInput = document.getElementById('exampleInputEmail1')
const submitButton = document.getElementById('submitButton')

const checkUserData = () => {
	const users = JSON.parse(localStorage.getItem('users')) || []
	return users.find(
		user =>
			user.email === emailInput.value && user.password === passwordInput.value
	)
}
const loginUser = user => {
	localStorage.setItem('user', JSON.stringify(user))
}
const redirectUser = () => {
	window.location.href = 'index.html'
}
submitButton.addEventListener('click', () => {
	const user = {
		email: emailInput.value,
		password: passwordInput.value,
	}
	if (checkUserData()) {
		loginUser(user)
		redirectUser()
	} else {
		alert('Неверный логин или пароль')
	}
})
