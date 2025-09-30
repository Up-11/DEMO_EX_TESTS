addEventListener('DOMContentLoaded', () => {
	checkAuth()
})
const checkAuth = () => {
	if (!localStorage.getItem('user')) {
		window.location.href = 'login.html'
	}
}
