/*
	View : itemNameView

*/
var view = {
	render : function () {
		var template = _.template( $('#itemNamePicker') );
		this.$el.html(template);
	},
	next : function () {
		$('h1.itemName').html('no');
	},
	previous : function () {
		$('h1.itemName').html('yes');
	}
};

/* 
  Create ItemNameView
 */
var ItemNameView = PickerView.extend(view);