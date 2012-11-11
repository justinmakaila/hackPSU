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
	        	"getItemName",
	        	itemCandidate.get("URL"),
	        	function(error, result) {
	          		names.set("Name", result);
	        	}
	      	);

		    // Get Item Images
		    Meteor.call(
		        "getItemImages",
		        itemCandidate.get("URL"),
		       	function(error, result) {
		          	images.set("Images", result);
		        }
		    );

			// Get Item Captions
			Meteor.call(
				"getItemCaptions",
				itemCandidate.get("URL"),
				function(error, result) {
					captions.set("Captions", result);
				}
			);

	      	// Get Item Price
	        Meteor.call(
	        	"getItemPrice",
	        	itemCandidate.get("URL"),
	        	function(error, result) {
	          		price.set("Price", result);
	        	}
	        );

	      $('div.itemCandidate').show();

			Meteor.call(
				"getItemTags",
				itemCandidate.get("URL"),
				function(error, result) {
					tags.set("Tags", result);
				}
			);
		}
	}
});