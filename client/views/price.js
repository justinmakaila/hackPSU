/*
	View : itemPriceView

*/
var view = {
	render : function () {
		var template = _.template( $('#itemPricePicker') );
		this.$el.html(template);
	},
	next : function () {
		$('h3.itemPrice').html('no');
	},
	previous : function () {
		$('h3.itemPrice').html('yes');
	}
};

/* 
  Create ItemNameView
 */
var ItemPriceView = PickerView.extend(view);