// Meteor Server Methods

///////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  // Get the names for the item
  getItemNames : function (url) {
    this.unblock();

    var result = Meteor.http.get('http://access.alchemyapi.com/calls/url/URLGetConstraintQuery?apikey=5285731d39d51db11fe8db5d083d8fbe7cc5ed60',
    {
      params : {
        url : url,
        outputMode : "json",
        cquery : "paragraph or h1"
      }
    });

    if(result.statusCode === 200) {
      return result.data.queryResults;
    } else {
      return false;
    }
  },
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
  // Get the captions for the item
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
      returnResult = [];

      result.data.text.split('\n').forEach(function(caption) {
        if((caption.replace(/^\s\s*/, '').replace(/\s\s*$/, '') != "")) {
          returnResult.push(caption.replace(/^\s\s*/, '').replace(/\s\s*$/, ''));
        }
      });

      return returnResult;
    } else {
      return false;
    }
  },
  // Get the tags for the item
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