/*
	View : ItemCandidateView

*/
var view = {
	initialize : function () {
		var template = _.template( $('div.itemCandidate').html() );
		this.$el.html(template);
	}
};

/* 
  Create ItemCandidateView
 */
var ItemCandidateView = Backbone.View.extend(view);