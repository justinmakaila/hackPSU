/*
	Model: NameModel
*/
var model = {
	defaults : {
		"Names" : [],
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