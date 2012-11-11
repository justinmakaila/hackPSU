/*
	Model: CaptionsModel
*/
var model = {
	defaults : {
		"Captions" : [],
		"index" : 0
	},
	initialize : function () {
		this.on('change:captions', function () {
			console.log(model.attributes.images);
		});
	}
};

/*
	Create CaptionsModel
*/
var CaptionsModel = Backbone.Model.extend(model);