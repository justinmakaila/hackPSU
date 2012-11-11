// Meteor Server Methods

///////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  // Get the names for the item
  getItemName : function (url) {
    this.unblock();

    var result = Meteor.http.get('http://access.alchemyapi.com/calls/url/URLGetTitle?apikey=5285731d39d51db11fe8db5d083d8fbe7cc5ed60',
    {
      params : {
        url : url,
        outputMode : "json",
        useMetadata : "1"
      }
    });

    if(result.statusCode === 200) {
      return result.data.title;
    } else {
      return false;
    }
  },
  // Get the images for the item
  getItemImages : function (url) {
    this.unblock();

    var HtmlParser = __meteor_bootstrap__.require('htmlparser');

    var result = Meteor.http.get(
      url,
      {
        headers : {
          "Connection" : "keep-alive",
          "User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11"
        } 
      }
      );

    if(result.statusCode === 200) {
      var returnArray = []
      var handler = new HtmlParser.DefaultHandler(function (error, dom) {
        if (error)
            console.log("parse error: "+error);
        else
            console.log("dom: dom");
      });
      var parser = new HtmlParser.Parser(handler);
      parser.parseComplete(result.content);
      getObjects(handler.dom, 'name', 'img').forEach(function(image) {
        if(image.attribs.src) { 
          returnArray.push(image.attribs.src);
        }
      });
      return returnArray;
    } else {
      return result;
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
  },
  // Get the tags for the item
  getItemPrice : function (url) {
    this.unblock();

    var result = Meteor.http.get('http://access.alchemyapi.com/calls/url/URLGetText?apikey=5285731d39d51db11fe8db5d083d8fbe7cc5ed60',
    {
      params : {
        url : url,
        outputMode : "json"
      }
    });


    if(result.statusCode === 200) {

      // Match Price
      if(result.data.text.match(/(\$*\d[\d+\,\.?]+)/g)) {
        // If there is one with a dollar sign, prioritize it.
        if(result.data.text.match(/(\$\d[\d+\,\.?]+)/g)) {
          return result.data.text.match(/(\$\d[\d+\,\.?]+)/g);
        // Otherwise just return the price array
        } else {
          return result.data.text.match(/(\$\d[\d+\,\.?]+)/g)
        }
      } else {
        return null;
      }

    } else {
      return false;
    }
  },
  // Use HTML Parser
  testHtmlParser : function(url) {
    this.unblock();

    var HtmlParser = __meteor_bootstrap__.require('htmlparser');

    var result = Meteor.http.get(
      url,
      {
        headers : {
          "Connection" : "keep-alive",
          "User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11"
        } 
      }
      );

    if(result.statusCode === 200) {
        var handler = new HtmlParser.DefaultHandler(function (error, dom) {
          if (error)
              console.log("parse error: "+error);
          else
              console.log("dom: dom");
        });
      var parser = new HtmlParser.Parser(handler);
      parser.parseComplete(result.content);
      return handler.dom;
    } else {
      return result;
    }
  }
});