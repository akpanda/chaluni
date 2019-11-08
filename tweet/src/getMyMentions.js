var Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');
const config= require('../data/twitter_config');

{

var error = function (err, response, body) {
    console.log('ERROR [%s]', err.toString);
};

let successsData=[];
var success = function (data) {
    console.log('Data [%s]', data);

    successsData =data;
    fs.appendFile('tweets.json', data, function (err) {
        if (err) throw err;
        console.log('Tweet Saved!');
      });
      
};



var twitter = new Twitter(config);

//twitter.getMentionsTimeline({ count: '10'}, error, success);
console.log('Getting mentions');

var getMyMentions=function(){

    console.log('i will get my mention timeline'  )

    twitter.getMentionsTimeline({ count: '10'}, error, success);

}

}
module.exports=getMyMentions;

//"id":1183813946928553987,"id_str":"1183813946928553987"


// let tweetId ='1183191817925226498';


// let retweetURL=`/statuses/retweet/${tweetId}.json`

// //twitter.postCustomApiCall('/statuses/retweet/:id',{'id': tweetId}, error, success);

// twitter.postCustomApiCall(retweetURL,{}, error, success);






//twitter.getSearch(parameters, errorCallback, successCallback);



