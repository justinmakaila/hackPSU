/*
	View : itemImageView

*/
var view = {
	render : function () {
		var template = _.template( $('.itemImage') );
		this.$el.html(template);
	},
	next : function () {
		$('div.itemImage').html('no');
	},
	previous : function () {
		$('div.itemImage').html('yes');
	}
};

/* 
  Create ItemNameView
 */
var ItemImageView = PickerView.extend(view);