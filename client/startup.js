// Loaded on client startup

///////////////////////////////////////////////////////////////////////////////
Meteor.startup(function () {
// Configure app
///////////////////////////////////////////////////////////////////////////////
	// Create a new itemCandidate
	itemCandidate = new ItemCandidate();
<<<<<<< HEAD

  // Create a new itemCandidate View
  itemCandidateView = new ItemCandidateView();
	
  // Create views for itemCandidate
  nameView = new ItemNameView({ el: $('#itemNamePicker'), model: itemCandidate });
	imageView = new ItemImageView({ el: $('#itemImagePicker'), model: itemCandidate });
	captionView = new ItemCaptionView({ el: $('#itemCaptionPicker'), model: itemCandidate });
	priceView = new ItemPriceView({ el: $('#itemPricePicker'), model: itemCandidate });
=======
	prices = new PriceModel();
	images = new ImagesModel();
	captions = new CaptionsModel();
	tags = new TagsModel();
	names = new NameModel();
	// Create new Views
  	nameView = new ItemNameView({ el: $('#itemNamePicker'), model: names });
	imageView = new ItemImageView({ el: $('#itemImagePicker'), model: images });
	captionView = new ItemCaptionView({ el: $('#itemCaptionPicker'), model: captions });
	priceView = new ItemPriceView({ el: $('#itemPricePicker'), model: prices });
	tagsView = new ItemTagsView({ el: $('#itemTagsPicker'), model: tags });
>>>>>>> ce0cdd5a30ab971c5a5cd21e904c366ca363c556
});