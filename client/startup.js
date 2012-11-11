// Loaded on client startup

///////////////////////////////////////////////////////////////////////////////
Meteor.startup(function () {
// Configure app
///////////////////////////////////////////////////////////////////////////////
	// Create a new itemCandidate
	itemCandidate = new ItemCandidate();
	var nameView = new ItemNameView({ el: $('#itemNamePicker'), model: itemCandidate });
	var imageView = new ItemImageView({ el: $('#itemImagePicker'), model: itemCandidate });
	var captionView = new ItemCaptionView({ el: $('#itemCaptionPicker'), model: itemCandidate });
	var priceView = new ItemPriceView({ el: $('#itemPricePicker'), model: itemCandidate });
});