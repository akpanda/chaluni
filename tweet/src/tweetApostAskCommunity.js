var Twitter = require('twitter-node-client').Twitter;
var error = function (err, response, body) {
    console.log('ERROR [%s]', err.toString);
};
var success = function (data) {
    console.log('Data [%s]', data);
};


var twitter = new Twitter(config);
//twitter.getUserTimeline({ screen_name: 'mte2o', count: '10'}, error, success);

let volunteersToVote=["akpanda"] 


function pollValidForDays(theDate, days) {
    return new Date(Date.now().getTime+ days*24*60*60*1000);
}

var pollEndDate = pollValidForDays(new Date(), 3).toDateString;

let parametersTweetWithPoll ={
"status":"i am a bot learning to post english to odia parallel pairs",
"entities": {
    "hashtags": ["mte2o","Odia","Corpus","Candidate"
    ],
    "urls": [
    ],
    "user_mentions": volunteersToVote,
    "symbols": [
    ],

    "polls":[  
        {  
        "options":[  
            {  
                "position":1,
                "text":"Yes"
            },
            {  
                "position":2,
                "text":"No"
            }
        ],
        "end_datetime":pollEndDate,
        "duration_minutes":24*60
        }
    
        ]
    }
}


let enString = 'Microbes from earth should be sent to \'colonize\' Mars and help turn it into a planet fit for human life, scientists say.';
let orString = 'ମଙ୍ଗଳ ଗ୍ରହ ରେ କଲୋନୀ  ତିଆରି କରିବା ପାଇଁ  ପୃଥିବୀରୁ ଜୀବାଣୁ  ପଠାଯାଇ ମଣିଷ ରହିବା ଭଳି ଜଳବାୟୁ ତିଆରି କରାଯାଉ , କିଛି ବୈଜ୍ଞାନିକ ମାନଙ୍କ ମତ |';

let itag = '\n#ଶୁଆନୁବାଦ'
let revQuestion = '\n\n #ଶୁଆନୁବାଦ ଠିକ ହେଲା  #ଓଡ଼ିଆ ଟୁଇଟର ସମାଜ ?'




let tweetTemplate =`En: ${enString}\nOr:${orString}${revQuestion}`;


// let parameters ={"status":"E: Please review  the  translation , ଦୟାକରି ଦେଖ ିକ "};

let parameters = {"status":tweetTemplate};


// let parameters = {"status":"English: who am i ଓଡ଼ିଆ: ମୁଁ କିଏ ? ",
//                 "entities": {
//                  "hashtags": ["mte2o","Odia","Corpus","Candidate"]
//                 }};
twitter.postTweet(parameters, error, success);



//Data [{"created_at":"Mon Sep 02 02:38:45 +0000 2019","id":1168352531694534656,"id_str":"1168352531694534656","text":"English: who am i \u0b13\u0b21\u0b3c\u0b3f\u0b06: \u0b2e\u0b41\u0b01 \u0b15\u0b3f\u0b0f ?","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[]},"source":"\u003ca href=\"https:\/\/github.com\/akpanda\/chaluni\" rel=\"nofollow\"\u003echaluni\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":981644992992063488,"id_str":"981644992992063488","name":"\u0b36\u0b41\u0b06","screen_name":"mte2o","location":"Internet","description":"I am a bot learning to #translate from English to #Odia . #Odia Community, You can pet me by tagging a pair of Odia English bilingual tweet.","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":14,"friends_count":195,"listed_count":1,"created_at":"Wed Apr 04 21:29:39 +0000 2018","favourites_count":92,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":127,"lang":null,"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http:\/\/abs.twimg.com\/sticky\/default_profile_images\/default_profile_normal.png","profile_image_url_https":"https:\/\/abs.twimg.com\/sticky\/default_profile_images\/default_profile_normal.png","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":true,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"und"}]


