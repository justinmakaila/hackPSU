/*
	Model: PriceModel
*/
var model = {
	defaults : {
		"Prices" : [],
		"index" : 0
	},
	initialize : function () {
		this.on('change:prices', function () {
			console.log(this.attributes.prices);
		});
	}
};

/*
	Create PriceModel
*/
var PriceModel = Backbone.Model.extend(model);