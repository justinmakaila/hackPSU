// Loaded on both the client and the server

// Create Collections
///////////////////////////////////////////////////////////////////////////////

// Items (Models)
Items = new Meteor.Collection("items");
Items.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return false;
  }
});