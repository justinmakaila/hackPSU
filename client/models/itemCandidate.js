/*
  Model : ItemCandidate

  Holds possible data values for the item (pulled via Alchemy API)

  @opt  Name      (string)            = The possible name of the item
  @opt  Images    (array of urls)     = The possible image urls to represent the item
  @opt  Captions  (array)             = The possible captions for the item
  @opt  Tags      (array)             = The possible tags on the item
  @opt  Prices    (array)             = The possible prices for the item
  @opt  URL       (string / url)      = The URL of the item

 */
var model = {
  urlRoot : '/api/items',

	defaults : {
		"Name" : null,
		"Images" : [],
		"Captions" : [],
    "Tags" : [],
    "Price" : [],
    "URL" : null
	},

  initialize : function() {
    this.on("change", function(model) {
      console.log(model.attributes);
    });
  }
};

/* 
  Create ItemCandidate Model
 */
var ItemCandidate = Backbone.Model.extend(model);