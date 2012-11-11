/*
	View : itemCaptionView

*/
var view = {
	render : function () {
		var template = _.template( $('.itemCaption') );
		this.$el.html(template);
	},
	next : function () {
		$('p.itemCaption').html('no');
	},
	previous : function () {
		$('p.itemCaption').html('yes');
	}
};

/* 
  Create ItemNameView
 */
var ItemCaptionView = PickerView.extend(view);