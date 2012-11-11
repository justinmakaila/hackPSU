/*
	View : itemImageView

*/
var view = {
	initialize : function () {
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
	},
	render : function () {
		var template = Meteor.render(function () {
			return Template.ItemImage();
		});
		this.$el.html(template);
		return this;
	}
};

/* 
  Create ItemNameView
 */
var ItemImageView = PickerView.extend(view);