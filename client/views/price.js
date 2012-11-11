/*
	View : itemPriceView

*/
var view = {
	initialize : function () {
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
	},
	render : function () {
		var template = Meteor.render(function () {
			return Template.ItemPrice();
		});
		this.$el.html(template);
		return this;
	}
};

/* 
  Create ItemNameView
 */
var ItemPriceView = PickerView.extend(view);