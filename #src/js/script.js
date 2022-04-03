let scrollToTopBtn = document.querySelector('.back_to_top');
let rootElement = document.documentElement;

function scrollToTop() {
	rootElement.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
scrollToTopBtn?.addEventListener('click', scrollToTop);

const navBtn = document.querySelector('.burger');
const mobNav = document.querySelector('.mob-nav__container');
navBtn.addEventListener('click', () => {
	navBtn.classList.toggle('open');
	mobNav.classList.toggle('active');
});

const sliders = document.querySelectorAll('.custom-slider__slider');
sliders?.forEach((slider) => {
	let counter = slider.querySelector('.slide-caption .slide-counter.counter .active-slide');
	let length = slider.querySelector('.slide-caption .slide-counter.counter .number-slides');
	slider?.addEventListener('itemshown', function () {
		let activeIndex = UIkit.getComponent(slider, 'slider').index + 1;
		counter.innerText = activeIndex;
		let sliderLength = UIkit.getComponent(slider, 'slider').length;
		length.innerText = sliderLength;
	});

	const readMoreBtn = slider.querySelector('.more-text-btn');

	const text = slider.querySelector('.slider-text');
	readMoreBtn?.addEventListener('click', () => {
		text.classList.toggle('show-more');
		if (readMoreBtn.innerText === 'Show More') {
			readMoreBtn.innerText = 'Show Less';
		} else {
			readMoreBtn.innerText = 'Show More';
		}
	});

	const viewers = document.querySelectorAll('.compare-images');
	viewers.forEach((element) => {
		let view = new ImageCompare(element, {
			controlColor: '#dd983e',
			controlShadow: false,
			addCircle: true,
			addCircleBlur: true, // default
		}).mount();
	});

	UIkit.slider(slider, {
		draggable: false,
	});
});
