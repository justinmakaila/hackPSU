/*
	View : itemCaptionView

*/
var view = {
	initialize : function () {
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
	},
	render : function () {
		var template = Meteor.render(function () {
			return Template.ItemCaption();
		});
		this.$el.html(template);
		return this;
	}
};

/* 
  Create ItemNameView
 */
var ItemCaptionView = PickerView.extend(view);