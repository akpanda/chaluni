var Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');

var error = function (err, response, body) {
    console.log(' There is an Error : ERROR is  [%s]', err.toString);
};


var success = function (data) {
    console.log('Data [%s]', data);

    fs.appendFile('tweets.json', data, function (err) {
        if (err) throw err;
        console.log('Tweet Saved!');
      });

    console.log('RT Successful');
      
};


var twitter = new Twitter(config);



var reTweet = function (tweetId) {
     let retweetURL=`/statuses/retweet/${tweetId}.json`
     twitter.postCustomApiCall(retweetURL,{}, error, success);
}

module.exports=reTweet;
//export  default reTweet 
