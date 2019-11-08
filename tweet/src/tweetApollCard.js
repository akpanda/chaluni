var Twitter = require('twitter-node-client').Twitter;
var error = function (err, response, body) {
    console.log('ERROR [%s]', err.toString());
};
var success = function (data) {
    console.log('Data [%s]', data);
};


var twitter = new Twitter({
    "consumerKey": "aZWupw2JHS2yuJ4MyNmOPJUSW",
    "consumerSecret": "7n5fdL0EdaVZXukXlsbQF2ssFXnN8kfQRfW8yVkDIW21TVN3ml",
    "accessToken": "981644992992063488-Lcm34AzNt68JN78M8k3EepuzJ6U83dx",
    "accessTokenSecret": "f9ziiVOLZOiXuX40DSFc7QOFZ66vz27DClFVttcfmcfx7",
    "callBackUrl": ""
});
//twitter.getUserTimeline({ screen_name: 'mte2o', count: '10'}, error, success);

//let volunteersToVote=["akpanda"] 


// function pollValidForDays(theDate, days) {
//     return new Date(Date.now().getTime+ days*24*60*60*1000);
// }

// var pollEndDate = pollValidForDays(new Date(), 3).toDateString;

// let parametersTweetWithPoll ={
// "status":"i am a bot learning to post english to odia parallel pairs",
// "entities": {
//     "hashtags": ["mte2o","Odia","Corpus","Candidate"
//     ],
//     "urls": [
//     ],
//     "user_mentions": volunteersToVote,
//     "symbols": [
//     ],

//     "polls":[  
//         {  
//         "options":[  
//             {  
//                 "position":1,
//                 "text":"Yes"
//             },
//             {  
//                 "position":2,
//                 "text":"No"
//             }
//         ],
//         "end_datetime":pollEndDate,
//         "duration_minutes":24*60
//         }
    
//         ]
//     }
// }

// let parameters ={"status":"E: Please review  the  translation , ଦୟାକରି ଦେଖ ିକ "};
// let parameters = {"status":"English: who am i ଓଡ଼ିଆ: ମୁଁ କିଏ ? "};
// let parameters = {"status":"English: who am i ଓଡ଼ିଆ: ମୁଁ କିଏ ? ",
//                 "entities": {
//                  "hashtags": ["mte2o","Odia","Corpus","Candidate"]
//                 }};
//twitter.postTweet(parameters, error, success);

pollURL ='https://ads-api.twitter.com/6/accounts/mte2o/cards/poll';
poll={
    "account_id":'mte2o',
"first_choice":"Yes",
"second_choice":"No",
"duration_in_minutes":24*60
}

twitter.postCustomApiCall(pollURL,poll,error,success)