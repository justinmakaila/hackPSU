var view = {
	initialize : function () {
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
	},
	render : function () {
		var template = Meteor.render(function () {
			return Template.ItemTags();
		});
		this.$el.html(template);
		return this;
	},
	template : function () {
		Meteor.render( function () {
			return Template.ItemTags();
		});
	}
};

var ItemTagsView = Backbone.View.extend(view);