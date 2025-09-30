const logoutButton = document.getElementById('logout-button')
logoutButton.addEventListener('click', () => {
	localStorage.removeItem('user')
	window.location.href = 'login.html'
})
