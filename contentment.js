(function($){
	$.fn.contentment = function(chars, words) {
		var $characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		function $mathRand(maxL) {
			return Math.floor(Math.random() * maxL);
		};
		if (words !== undefined) {
			for (var w = 0; w < parseInt(words); w++) {
				var $theWord = [];
				for (var c = 0; c < parseInt(chars); c++) {
					$theWord.push($characters[$mathRand(25)]);
				}
				$theWord = $theWord.toString().replace(/\,/g, "");
				this.append($theWord + " ");
			}
		} else {
			$characters.push(' ',' ',' ',' ');
			for (var i = 1; i <= parseInt(chars); i++) {
				this.append($characters[$mathRand(29)]);
			}
		}
		words = words || null;
		return this;
	};
})(jQuery);