const carouselItems = document.querySelectorAll('.uk-slider-items li');
// console.log(carouselItems);
function beforeAfter() {
	carouselItems?.forEach((item) => {
		if (item.classList.contains('uk-active')) {
			item.querySelector('.compare').style.width = item.querySelector('.slider').value + '%';
		}
	});
}

const tstmSliderCounter = document.querySelector('.testimonials .counter .active-slide');
const tstmSliderLength = document.querySelector('.testimonials .counter .number-slides');
const tstmSlider = document.getElementById('tstm-slider');

tstmSlider.addEventListener('itemshown', function () {
	let activeIndex = UIkit.getComponent(tstmSlider, 'slider').index + 1;
	tstmSliderCounter.innerText = activeIndex;
	let sliderLength = UIkit.getComponent(tstmSlider, 'slider').length;
	tstmSliderLength.innerText = sliderLength;
});

const mainSliderCounter = document.querySelector('.result .counter .active-slide');
const mainSliderLength = document.querySelector('.result .counter .number-slides');
const mainSlider = document.getElementById('result-slider');

mainSlider.addEventListener('itemshown', function () {
	let activeIndex = UIkit.getComponent(mainSlider, 'slider').index + 1;
	mainSliderCounter.innerText = activeIndex;
	let sliderLength = UIkit.getComponent(mainSlider, 'slider').length;
	mainSliderLength.innerText = sliderLength;
});

const clientsSliderCounter = document.querySelector('.clients .counter .active-slide');
const clientsSliderLength = document.querySelector('.clients .counter .number-slides');
const clientsSlider = document.getElementById('clients-slider');

clientsSlider.addEventListener('itemshown', function () {
	let activeIndex = UIkit.getComponent(clientsSlider, 'slider').index + 1;
	clientsSliderCounter.innerText = activeIndex;
	let sliderLength = UIkit.getComponent(clientsSlider, 'slider').length;
	clientsSliderLength.innerText = sliderLength;
});

let scrollToTopBtn = document.querySelector('.back_to_top');
let rootElement = document.documentElement;

function scrollToTop() {
	rootElement.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
scrollToTopBtn.addEventListener('click', scrollToTop);
