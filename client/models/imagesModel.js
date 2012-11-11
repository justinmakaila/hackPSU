/*
	Model: ImagesModel
*/
var model = {
	defaults : {
		"Images" : [],
		"index" : 0
	},
	initialize : function () {
		this.on('change:images', function () {
			console.log(model.attributes.images);
		});
	}
};

/*
	Create ImagesModel
*/
var ImagesModel = Backbone.Model.extend(model);