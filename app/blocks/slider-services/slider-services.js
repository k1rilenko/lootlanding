app.sliderServices = {
	name: 'slider',
	description: 'slick slider',
	init(selector, options) {
		app.common.initScript('slick.min', 'slick', () => {
			this.runSlider(selector, options || this.options);
		});
		app.common.initStyle('slick');
	},
	runSlider(selector, options) {
		const $slider = $(selector || '.slider-services__slider');
		$slider.slick(options);
	},
	options: {
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		responsive: [{
			breakpoint: 1600,
			settings: {
				slidesToShow: 5,
				infinite: true
			}
		}, {
			breakpoint: 1300,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 991,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	}
};
