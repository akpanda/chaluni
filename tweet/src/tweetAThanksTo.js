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

var twitter = new Twitter(config);


let thanksTo = ''



let enString = 'Thank You';
let orString = 'ଧନ୍ୟବାଦ ଆଜ୍ଞା';
let itag = '\n#ଶୁଆନୁବାଦ'

let tweetTemplate =`${enString} ${thanksTo}  \n${orString} ${thanksTo} ${itag}`;



let parameters = {"status":tweetTemplate};


twitter.postTweet(parameters, error, success);

