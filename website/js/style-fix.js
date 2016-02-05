(function($) {
	$(document).ready(function() {
		ieFixes();
		prepareMobileView($);

		if (!$(document.documentElement).hasClass('mobile')) {
			$.startFixWatermarkHeight();

			if (typeof fixHeightColumns !== 'undefined' && fixHeightColumns) {
				$.startFixHeightColumns();
			}
		}
	});
})(siteBuilderJs);

function ieFixes() {
	var isMSIE = '\v' == 'v';
	if (isMSIE) {
		var isResized = false;
		if (screen.systemXDPI === undefined) { //ie < 8
			var rect = document.body.getBoundingClientRect();
			isResized = (rect.right - rect.left) != document.body.clientWidth;
		} else { //ie > 7
			isResized = 96 != screen.deviceXDPI;
		}
		if (isResized) {
			var style_node = document.createElement("style");
			style_node.setAttribute("media", "screen");

			if (document.styleSheets && document.styleSheets.length > 0) {
				var last_style_node = document.styleSheets[document.styleSheets.length - 1];
				if (typeof(last_style_node.addRule) == "object") {
					last_style_node.addRule('.background', 'filter: none !important;');
				}
			}
		}
	}
};

function prepareMobileView($) {
	var htmlTagClasses = document.documentElement.className,
		resolution, meta, contentNode, isSetAsMobile, mobileResolution;

	// Set opera mobile as mobile device.
	if (htmlTagClasses.indexOf('opera') > -1 && htmlTagClasses.indexOf('linux') > -1) {
		htmlTagClasses += ' mobile';
	}

	if (window.outerHeight) {
		resolution = Math.min(window.outerHeight, window.outerWidth);
		isSetAsMobile = (htmlTagClasses.indexOf('mobile') > -1);
		mobileResolution = 640; //iPhone

		// Set large devices as desktop.
		if (isSetAsMobile && resolution > mobileResolution) {
			htmlTagClasses = htmlTagClasses.replace('mobile', '');
		}
	}

	if (htmlTagClasses.indexOf('mobile') > -1) {
		// Add viewport meta tag for mobile browsers
		meta = document.createElement('meta');
		meta.name = 'viewport';
		meta.content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0';
		document.getElementsByTagName('head')[0].appendChild(meta);

		contentNode = document.getElementById('content');
		contentNode.parentNode.insertBefore(contentNode, document.getElementById('column1'));

		// Attach mobile navigation to content
		$('ul.navigation a:not([href*="#"])').each(function() {
			var $this	 = $(this),
				linkPath = $this.attr('href');
			$this.attr('href', linkPath + '#content-content-inner');
		});

		// Some mobile browsers don't handle anchor links. We should force scrolling.
		if (window.location.hash) {
			$('html').animate({
				scrollTop: $(window.location.hash).offset().top
			}, 750);
		}
	}
	document.documentElement.className = htmlTagClasses;
};