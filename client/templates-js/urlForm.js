Template.urlForm.events({
	// When the user types in a URL, set it as the itemCandidate's URL
	"keyup input[name='itemURL']" : function() {
		itemCandidate.set("URL", $(event.currentTarget).val());
	},
	// When the user clicks the button, get the info
	"click button" : function() {
		if(itemCandidate.get("URL")) {
			// Get Item Name
<<<<<<< HEAD
    	Meteor.call(
        	"getItemName",
        	itemCandidate.get("URL"),
        	function(error, result) {
          		itemCandidate.set("Name", result);
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
=======
	    	Meteor.call(
	        	"getItemNames",
	        	itemCandidate.get("URL"),
	        	function(error, result) {
	          		names.set("Names", result);
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
>>>>>>> ce0cdd5a30ab971c5a5cd21e904c366ca363c556

			// Get Item Captions
			Meteor.call(
				"getItemCaptions",
				itemCandidate.get("URL"),
				function(error, result) {
					captions.set("Captions", result);
				}
			);

			// Get Item Tags
<<<<<<< HEAD
      Meteor.call(
        "getItemTags",
        itemCandidate.get("URL"),
        function(error, result) {
          itemCandidate.set("Tags", result);
        }
      );

      // Get Item Price
      Meteor.call(
        "getItemPrice",
        itemCandidate.get("URL"),
        function(error, result) {
          itemCandidate.set("Price", result);
        }
      );

      $('div.itemCandidate').show();
=======
			Meteor.call(
				"getItemTags",
				itemCandidate.get("URL"),
				function(error, result) {
					tags.set("Tags", result);
				}
			);
>>>>>>> ce0cdd5a30ab971c5a5cd21e904c366ca363c556
		}
	}
});