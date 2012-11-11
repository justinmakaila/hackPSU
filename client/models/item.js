/*
  Model : Item

  @opt  Name      (string)              = The name of the item for sale
  @opt  Image     (string / image-url)  = The url of the image for the item
  @opt  Category  (string / Category)   = [food, drinks, travel, lifestyle, goods]
  @opt  Specials  (array)               = The specials on the item
  @opt  Tags      (array)               = The tags on the item
  @opt  Favorites (int)                 = The number of favorites the item has

  @method   addFavorite()
    @info   Increments the Favorites attribute
    @arg    [none]
 */
var model = {
  urlRoot : '/api/items',

	defaults : {
		"Name" : null,
		"Image" : null,
		"Category" : null,
		"Specials" : [],
    "Tags" : [],
    "Favorites" : 0
	},

  addFavorite : function() {
    this.set({ "Favorites" : this.get("Favorites")+1 });
  }
};

/* 
  Create Item Model
 */
var Item = Backbone.Model.extend(model);