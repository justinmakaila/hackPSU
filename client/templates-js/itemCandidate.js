Template.itemCandidate.rendered = function () {
	var nameView = new ItemNameView({ el: $('#itemNamePicker') });
	var imageView = new ItemImageView({ el: $('#itemImagePicker') });
	var captionView = new ItemCaptionView({ el: $('#itemCaptionPicker') });
	var priceView = new ItemPriceView({ el: $('#itemPricePicker') });
}