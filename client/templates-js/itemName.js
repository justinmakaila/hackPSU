Template.ItemName.Name = function () {
	var result = (typeof this.names != 'undefined') ? this.names.attributes.Names[this.names.attributes.index].resultText : 'no';
	return result;
}