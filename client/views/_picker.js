/*
	View : PickerView

*/
var view = {
	events : {
		'click .next' : 'next',
		'click .previous' : 'previous'
	},
	next : function () {
		var index = this.model.get('index');
		index++;
		console.log(index);
		this.model.set('index', index);
	},
	previous : function () {
		var index = this.model.get('index');
		index--;
		console.log(index);
		this.model.set('index', index);
	}
};

/* 
  Create PickerView
 */
var PickerView = Backbone.View.extend(view);