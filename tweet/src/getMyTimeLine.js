var Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');
var config= require('../data/twitter_config');

{

var error = function (err, response, body) {
    console.log('ERROR [%s]', err.toString);
};

let successsData=[];
var success = function (data) {
    console.log('Data [%s]', data);

    successsData =data;
    fs.appendFile('homeTimeline.json', data, function (err) {
        if (err) throw err;
        console.log('Tweet Saved!');
      });
      
};

var SaveHashTaggedTweets = function (data) {
    console.log('Data [%s]', data);

    successsData =data;
    fs.appendFile('hashTaggedTweets.json', data, function (err) {
        if (err) throw err;
        console.log('Tweet Saved!');
      });
      
};

var twitter = new Twitter(config);




var getMyTimeLine=function(){

    console.log('i will get my Home  timeline'  )

    twitter.getHomeTimeline({ count: '10'}, error, success);

}



var getMyHashTags=function(){

    console.log('i will get my Hashtags'  );
    twitter.getSearch({'q':'#ଶୁଆନୁବାଦ','count': 10}, error, saveHashTags);

}


}

module.exports=getMyTimeLine,getMyHashTags;




