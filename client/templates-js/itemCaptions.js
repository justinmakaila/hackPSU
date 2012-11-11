Template.ItemCaption.Caption = function () {
	return (this.captions) ? this.captions.attributes.Captions[this.captions.attributes.index] : 'no';
}