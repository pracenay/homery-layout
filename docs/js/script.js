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
	mobNav.classList.contains('active') ? navBtn.classList.add('fixed') : navBtn.classList.remove('fixed');
});

const sliders = document.querySelectorAll('.custom-slider__slider');
console.log(sliders);
sliders.forEach((slider) => {
	let counter = slider.querySelector('.slide-caption .slide-counter.counter .active-slide');
	console.log(counter);
	let length = slider.querySelector('.slide-caption .slide-counter.counter .number-slides');
	slider?.addEventListener('itemshown', function () {
		let activeIndex = UIkit.getComponent(slider, 'slider').index + 1;
		counter.innerText = activeIndex;
		let sliderLength = UIkit.getComponent(slider, 'slider').length;
		length.innerText = sliderLength;
	});
});

const carouselItems = document.querySelectorAll('.uk-slider-items li');
function beforeAfter() {
	carouselItems?.forEach((item) => {
		if (item.classList.contains('uk-active')) {
			item.querySelector('.compare').style.width = item.querySelector('.slider').value + '%';
		}
	});
}
