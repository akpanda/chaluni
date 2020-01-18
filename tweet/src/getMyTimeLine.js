var Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');
var config= require('../config/twitter_config');
const ଶାରୀକୁଖବର = require('../data/writeToSari.js');



var error = function (err, response, body) {
        console.log('ERROR [%s]', err.toString);
    };

    let successsData=[];
var success = function (data) {
        console.log('Data [%s]', data);

        ଶାରୀକୁଖବର.ପ୍ରୋଫାଇଲରେ_ଥିବା_ଟୁଇଟ_ଲେଖା(JSON.parse(data));

        //successsData =data;
        // fs.appendFile('homeTimeline.json', data, function (err) {
        //     if (err) throw err;
        //     console.log('Tweet Saved!');
        // });
        
    };

var SaveHashTaggedTweets = function (data) {
        console.log('Data [%s]', data);
        successsData =data;
        console.log('Tweet Saved!');

        fs.appendFile('hashTaggedTweets.json', data, function (err) {
            if (err) throw err;
            console.log('Tweet Saved!');
        });
        
    };

var twitter = new Twitter(config);


var getMyHomeTimeLine=function(){

        console.log('i will get my Home  timeline'  )

        twitter.getHomeTimeline({ count: '10'}, error, success);

    }

/**
     * Get my Own timeline as seen in the profile
     */
var getMyOwnTimeLine=function(){
        console.log('i will get my Own timeline as seen in the profile'  )
        twitter.getUserTimeline(
            { user_id :'mte2o',
            count: '1'
            },
            error,
            success);
    }

var getMyHashTags=function(){

        console.log('i will get my Hashtags'  );
        twitter.getSearch({'q':'#ଶୁଆନୁବାଦ','count': 10}, error, saveHashTags);

    }




// module.exports=
//             getMyHomeTimeLine,
//             getMyHashTags,
//             getMyOwnTimeLine;
module.exports=getMyOwnTimeLine;




