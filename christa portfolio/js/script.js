let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

let section = document.queryselectorAll('section');
let navlink = document.queryselectorAll('header nav a');

window.onscroll = () => {
	section.forEach(sec => { 
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height ) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		};	
	});

	let header = document.querySelector('header');

	header.classList.toggle('sticky' , window.scrollY > 100);

	header.classList.toggle('sticky' , window.scrollY > 100);


	menuIcon.classList.remove('bx-x');
	navbar.classList.toggle('active');
};

scrollreveal({
	reset: true,
	distance: '80px',
	duration: 2000,
	delay:200
});

scrollreveal().reveal('.home-content, .heading', { origin: 'top'});
scrollreveal().reveal('.home-img, .service-container, .portfolio-box, .contact-form', { origin: 'bottom'});
scrollreveal().reveal('.home-content h1, .about-img', { origin: 'left'});
scrollreveal()reveal('.home-content p, .about-content', { origin: 'right'});

const typed = new Typed('.multiple-text', {
	strings: ['frontend develop' , 'you tuber' 
		'Blogger'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
}),