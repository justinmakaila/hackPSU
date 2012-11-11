// Loaded on client startup

///////////////////////////////////////////////////////////////////////////////
Meteor.startup(function () {
// Configure app
///////////////////////////////////////////////////////////////////////////////
	// Create a new itemCandidate
	itemCandidate = new ItemCandidate();
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
});