const hamburger = document.querySelector('.header.container.nav-bar .nav-list .hamburger');
const header = document.querySelector('.header.container.nav-bar .nav-list .hamburger');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

