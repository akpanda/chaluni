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


//twitter.getSearch({'q':'#ଶୁଆନୁବାଦ','count': 1}, error, success);


let in_reply_to_status_id ='1183186135247253504';
let replyTo="mte2o"


let enString = 'Coming Soon';
let orString = 'ଆସୁଛି କିଛିଦିନରେ';

let itag = '\n#ଶୁଆନୁବାଦ'

let tweetTemplate =`En: ${enString}\nOr:${orString}${itag}`;


let parameters = {"status":tweetTemplate,'in_reply_to_status_id':in_reply_to_status_id };

twitter.postTweet(parameters, error, success);





// twitter.getMentionsTimeline({ count: '10'}, error, success);

/**
 * Get Mentions / Hashes 
 * 
 * Check each 
 *      Do they have Odia character 
 *      Are they bilingual
 *      DO they have a pair 
 *      are the en  and or pairs similar - word counds match / length math 
 *      So it is s bilingual tag 
 *          Retweet 
 *      Not sure 
 *          Reply Tagging Human moderators  for review 
 *      
 */


//twitter.getSearch(parameters, errorCallback, successCallback);


//esponse of replyTo

/**
 Data [{"created_at":"Sun Oct 13 01:26:10 +0000 2019","id":1183192169776992256,"id_str":"1183192169776992256","text":"En: Coming Soon\nOr:\u0b06\u0b38\u0b41\u0b1b\u0b3f \u0b15\u0b3f\u0b1b\u0b3f\u0b26\u0b3f\u0b28 \u0b30\u0b47\n#\u0b36\u0b41\u0b06\u0b28\u0b41\u0b2c\u0b3e\u0b26","truncated":false,"entities":{"hashtags":[{"text":"\u0b36\u0b41\u0b06\u0b28\u0b41\u0b2c\u0b3e\u0b26","indices":[36,45]}],"symbols":[],"user_mentions":[],"urls":[]},"source":"\u003ca href=\"https:\/\/github.com\/akpanda\/chaluni\" rel=\"nofollow\"\u003echaluni\u003c\/a\u003e","in_reply_to_status_id":1183186135247253504,"in_reply_to_status_id_str":"1183186135247253504","in_reply_to_user_id":981644992992063488,"in_reply_to_user_id_str":"981644992992063488","in_reply_to_screen_name":"mte2o","user":{"id":981644992992063488,"id_str":"981644992992063488","name":"\u0b36\u0b41\u0b06","screen_name":"mte2o","location":"Internet","description":"I am a bot learning to #translate from English to #Odia . #Odia Community, You can pet me by tagging a pair of Odia English bilingual tweet.","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":472,"friends_count":2368,"listed_count":1,"created_at":"Wed Apr 04 21:29:39 +0000 2018","favourites_count":1345,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":2343,"lang":null,"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/1170759496626343936\/rSc-IG9X_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/1170759496626343936\/rSc-IG9X_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/981644992992063488\/1568252323","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_co
lor":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":false,"following":false,"follow_request_sent":false,"notif
ications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,
"retweeted":false,"lang":"und"}]
Tweet Saved!

*/