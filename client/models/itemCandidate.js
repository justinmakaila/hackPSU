/*
  Model : ItemCandidate

  Holds possible data values for the item (pulled via Alchemy API)

  @opt  Names     (array)             = The possible names of the item
  @opt  Images    (array of urls)     = The possible image urls to represent the item
  @opt  Captions  (array)             = The possible captions for the item
  @opt  Tags      (array)             = The possible tags on the item
  @opt  Prices    (array)             = The possible prices for the item
  @opt  URL       (string / url)      = The URL of the item

 */
var model = {
  urlRoot : '/api/items',

	defaults : {
		"Names" : [],
		"Images" : [],
		"Captions" : [],
    "Tags" : [],
    "Prices" : [],
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