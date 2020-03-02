app.sliderServices2 = {
	name: 'slider',
	description: 'slick slider',
	init(selector, options) {
		app.common.initScript('slick.min', 'slick', () => {
			this.runSlider(selector, options || this.options);
		});
		app.common.initStyle('slick');
	},
	runSlider(selector, options) {
		const $slider = $(selector || '.slider__op');
		$slider.slick(options);
	},
	options: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false
	}
};
