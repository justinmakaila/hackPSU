Template.urlForm.events({
	// When the user types in a URL, set it as the itemCandidate's URL
	"keyup input[name='itemURL']" : function() {
		itemCandidate.set("URL", $(event.currentTarget).val());
	},
	// When the user clicks the button, get the info
	"click button" : function() {
		if(itemCandidate.get("URL")) {
			// Get Item Name
	    	Meteor.call(
	        	"getItemNames",
	        	itemCandidate.get("URL"),
	        	function(error, result) {
	          		itemCandidate.set("Names", result);
	        	}
	      	);

	      	// Get Item Images
	      	Meteor.call(
	        	"getItemImages",
	        	itemCandidate.get("URL"),
	        	function(error, result) {
	          		itemCandidate.set("Images", result);
	        	}
	      	);

			// Get Item Captions
			Meteor.call(
				"getItemCaptions",
				itemCandidate.get("URL"),
				function(error, result) {
					itemCandidate.set("Captions", result);
				}
			);

			// Get Item Tags
			Meteor.call(
				"getItemTags",
				itemCandidate.get("URL"),
				function(error, result) {
					itemCandidate.set("Tags", result);
				}
			);
		}
	}
});