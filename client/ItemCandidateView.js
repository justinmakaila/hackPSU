var itemEntry = Backbone.View.extend({
	template : function () {
		Meteor.render( function () {
			return Template.fuck();
		});
	},
	initialize : function () {
		_.bindAll(this, 'render');
	},
	render : function () {
		this.$el.empty().append(this.template());
	},

	events : {
		'click .no_button' : 'clicked'
	},

	clicked : function (e) {
		console.log(e);
		$('.no_button').html('fuck');
	}
});