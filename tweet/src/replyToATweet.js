var Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');

var error = function (err, response, body) {
    console.log('ERROR [%s]', err.toString);
};


var success = function (data) {
    console.log('Data [%s]', data);

    fs.appendFile('tweets.json', data, function (err) {
        if (err) throw err;
        console.log('Tweet Saved!');
      });
      
};


var twitter = new Twitter(config);

/**
 * 
 * @param {String} tweetID : to which tweet reply is made, 19 digits 
 * @param {String} replyTo : to whom @ the reply is made , starts with an @ 
 * @param {String} enString : reply text in English: default "Thank you"
 * @param {String} enString : reply text in Odia : default "ଧନ୍ୟବାଦ"
 */
const replyTweet=(tweetID,replyTo,enString="Thank you",enString="ଧନ୍ୟବାଦ")=>{

    let in_reply_to_status_id =tweetID//'1183186135247253504';
    let replyTo="mte2o"
    
    
    let enString = 'Coming Soon';
    let enString = 'ଆସୁଛି କିଛିଦିନରେ';
    
    let itag = '\n#ଶୁଆନୁବାଦ'
    
    let tweetTemplate =`${replyTo}\nEn: ${enString}\nOr:${orString}\n${itag}`;
    
    
    let parameters = {"status":tweetTemplate,'in_reply_to_status_id':in_reply_to_status_id };
    
    twitter.postTweet(parameters, error, success);
}

let in_reply_to_status_id ='1183186135247253504';
let replyTo="mte2o"


let enString = 'Coming Soon';
let orString = 'ଆସୁଛି କିଛିଦିନରେ';

let itag = '\n#ଶୁଆନୁବାଦ'

let tweetTemplate =`En: ${enString}\nOr:${orString}${itag}`;


let parameters = {"status":tweetTemplate,'in_reply_to_status_id':in_reply_to_status_id };

twitter.postTweet(parameters, error, success);

