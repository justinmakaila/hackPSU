/*
	View : itemNameView

*/
var view = {
	initialize : function () {
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
	},
	render : function () {
		var template = Meteor.render(function () {
			return Template.ItemName();
		});
		this.$el.html(template);
		return this;
	},

	events : {
		'dblclick' : 'edit',
		'blur .edit' : 'close'
	},
	edit : function () {
		console.log('edit');
		this.$el.addClass('editing');
		//this.input.focus();
	},
	close : function () {
		console.log('close');
		//var value = this.input.val();
		//console.log(value);
		//if (!value) this.clear();
		//this.model.save({Name: value});
		this.$el.removeClass('editing');
	},
	clear : function () {
		console.log('clear');
		this.model.clear();
	}
};

/* 
  Create ItemNameView
 */
var ItemNameView = Backbone.View.extend(view);