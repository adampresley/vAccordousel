(function($) {
	$.fn.vAccordousel = function(config) {
		var __config = $.extend({
		}, config);

		/*
		 * Iterate over each matched item in whatever selector
		 * brought us here.
		 */
		return this.each(function() {
			var 
				kids = $(this).children(),
				itemCount = 0,
				currentSelected = null,

				h3Flag = false,
				clickClass = "vAccordousel-clickclass-" + (new Date().getTime()),
				newId = 0;

			/*
			 * Iterate of each child of the accordion
			 */
			kids.each(function() {
				if (this.tagName === "H3") {
					itemCount++;
					h3Flag = true;
					newId = "vAccordousel-" + itemCount + "-" + (new Date().getTime());

					$(this)
						.children("a")
						.attr("data-id", newId)
						.css({ "float": "left" })
						.addClass(clickClass);
				} else if (this.tagName === "DIV" && h3Flag) {
					$(this).attr("id", newId)
						.css({ 
							"float": "left", 
							"display": (itemCount - 1 < (kids.length / 2) - 1) ? "none" : "block", 
							"overflow": "hidden", 
							"white-space": "nowrap" 
						})
						.addClass(clickClass);
					h3Flag = false;
				}

				if (itemCount - 1 === (kids.length / 2) - 1) currentSelected = newId;
			});

			/*
			 * Assign a click handler for this class of items
			 */
			$("a." + clickClass).click(function() { 
				var newlySelected = $(this).attr("data-id");

				if (newlySelected !== currentSelected) {
					$("#" + currentSelected).animate({ width: "toggle" }, {
						complete: function() {
							$("div." + clickClass).hide();
							$("#" + newlySelected).animate({ width: "toggle" });

							currentSelected = newlySelected;
						}
					});
					
				}
			});
		});
	};
})(jQuery);
