const nameInput = document.getElementById('exampleInputEmail2')
const passwordInput = document.getElementById('exampleInputPassword1')
const emailInput = document.getElementById('exampleInputEmail1')
const submitButton = document.getElementById('submitButton')

function checkUserExists(user) {
	const userList = JSON.parse(localStorage.getItem('users')) || []
	return userList.find(user => user.email === emailInput.value)
}
function addNewUser(user) {
	const userList = JSON.parse(localStorage.getItem('users')) || []
	userList.push(user)
	localStorage.setItem('users', JSON.stringify(userList))
	localStorage.setItem('user', JSON.stringify(user))
}
function redirectUser() {
	window.location.href = 'index.html'
}

submitButton.addEventListener('click', () => {
	const user = {
		email: emailInput.value,
		password: passwordInput.value,
		name: nameInput.value,
	}
	const userExists = checkUserExists(user)
	if (userExists) return alert('Пользователь уже существует')
	addNewUser(user)
	redirectUser()
})
