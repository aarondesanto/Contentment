(function($){
	
	$.fn.contentment = function(chars, words) {
		var $characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
		
		function $mathRand(maxL, minL) {
			return Math.floor((Math.random() * maxL) + parseInt(minL)); // Generates a random number between minL and maxL
		};
		
		if (words !== undefined) {
		
			for (var w = 0; w < parseInt(words); w++) {
			
				var $theWord = [];
				
				for (var c = 0; c < parseInt(chars); c++) {
				
					$theWord.push($characters[$mathRand(25, 1)]);
				}
				
				$theWord = $theWord.toString().replace(/\,/gi, "");
				this.append($theWord + " ");
				
			}
			
		}
		
		for (var i = 0; i <= parseInt(chars); i++) {
			this.append($characters[$mathRand(26, 1)]);
		}
		
		words = words || null;
		
		return this;
	};

})(jQuery);