/*
	Model: TagsModel
*/
var model = {
	defaults : {
		"Tags" : [],
		"index" : 0
	},
	initialize : function () {
		this.on('change:tags', function () {
			console.log(model.attributes.images);
		});
	}
};

/*
	Create TagsModel
*/
var TagsModel = Backbone.Model.extend(model);