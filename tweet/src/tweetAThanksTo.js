var Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');

var error = function (err, response, body) {
    console.log('ERROR [%s]', err.toString);
};
var success = function (data) {
   

    fs.appendFile('tweets.json', `,${data}`, function (err) {
        if (err) throw err;
        console.log('Tweet Saved!');
      });
};


var twitter = new Twitter({
    "consumerKey": "aZWupw2JHS2yuJ4MyNmOPJUSW",
    "consumerSecret": "7n5fdL0EdaVZXukXlsbQF2ssFXnN8kfQRfW8yVkDIW21TVN3ml",
    "accessToken": "981644992992063488-Lcm34AzNt68JN78M8k3EepuzJ6U83dx",
    "accessTokenSecret": "f9ziiVOLZOiXuX40DSFc7QOFZ66vz27DClFVttcfmcfx7",
    "callBackUrl": ""
});


let thanksTo = '@Gopikishan101'//'@drgynaec'//'@scdas64'//'@Manaswinish';



let enString = 'Thank You';
let orString = 'ଧନ୍ୟବାଦ ଆଜ୍ଞା';
let itag = '\n#ଶୁଆନୁବାଦ'

let tweetTemplate =`${enString} ${thanksTo}  \n${orString} ${thanksTo} ${itag}`;



let parameters = {"status":tweetTemplate};


twitter.postTweet(parameters, error, success);

