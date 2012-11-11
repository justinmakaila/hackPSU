// Meteor Server Methods

///////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  // Get the images for the item
  getItemImages : function (url) {
    this.unblock();

    var result = Meteor.http.get('http://access.alchemyapi.com/calls/url/URLGetConstraintQuery?apikey=5285731d39d51db11fe8db5d083d8fbe7cc5ed60',
    {
      params : {
        url : url,
        outputMode : "json",
        cquery : "image"
      }
    });

    if(result.statusCode === 200) {
      return result.data.queryResults;
    } else {
      return false;
    }
  },
  getItemCaptions : function (url) {
    this.unblock();

    var result = Meteor.http.get('http://access.alchemyapi.com/calls/url/URLGetText?apikey=5285731d39d51db11fe8db5d083d8fbe7cc5ed60',
    {
      params : {
        url : url,
        outputMode : "json"
      }
    });

    if(result.statusCode === 200) {
      return result.data.text;
    } else {
      return false;
    }
  },
  getItemTags : function (url) {
    this.unblock();

    var result = Meteor.http.get('http://access.alchemyapi.com/calls/url/URLGetRankedConcepts?apikey=5285731d39d51db11fe8db5d083d8fbe7cc5ed60',
    {
      params : {
        url : url,
        outputMode : "json"
      }
    });

    if(result.statusCode === 200) {
      return result.data.concepts;
    } else {
      return false;
    }
  }
});