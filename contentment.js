(function($){
	
	$.fn.contentment = function(chars, words) {
		var $characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
		
		function $randomMaths(maxL, minL) {
			return Math.floor((Math.random() * maxL) + parseInt(minL)); // Generates a random number between minL and maxL
		};
		
		if (words !== null) {
		
			for (var a = 0; a < parseInt(words); a++) {
			
				var $theWord = [];
				
				for (var k = 0; k < parseInt(chars); k++) {
				
					$theWord.push($characters[$randomMaths(25, 1)]);
				}
				
				$theWord = $theWord.toString().replace(/\,/gi, "");
				this.append(" " + $theWord);
				
			}
			
		} else if (words === null) {
		
			for (var i = 0; i <= parseInt(chars); i++) {
				this.append($characters[$randomMaths(26, 1)]);
			}
			
		}
		
		return this;
	};

})(jQuery);