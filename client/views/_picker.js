/*
	View : PickerView

*/
var view = {
	render : function () {
		var template = _.template( $('.picker').html() );
		this.$el.html(template);
	},
	events : {
		'click .next' : 'next',
		'click .previous' : 'previous'
	}
};

/* 
  Create PickerView
 */
var PickerView = Backbone.View.extend(view);