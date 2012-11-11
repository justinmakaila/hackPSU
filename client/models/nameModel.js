/*
	Model: NameModel
*/
var model = {
	defaults : {
		"Name" : null,
		"index" : 0
	},
	initialize : function () {
		this.on('change:Names', function () {
			console.log(this.attributes.Names);
		});
	}
};

/*
	Create CaptionsModel
*/
var NameModel = Backbone.Model.extend(model);