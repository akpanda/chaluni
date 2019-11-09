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


let enString = 'On the Occasion of Mahalaya my best wishes to #Odias all over the place.';
let orString = 'ପବିତ୍ର #ମହାଳୟା ଅବସରରେ ସମସ୍ତ ଓଡ଼ିଶାବାସୀଙ୍କୁ ମୋ ହାର୍ଦ୍ଦିକ ଶୁଭେଚ୍ଛା|';

let itag = '\n#ଶୁଆନୁବାଦ'

let tweetTemplate =`En: ${enString}\nOr:${orString}${itag}`;



let parameters = {"status":tweetTemplate};


twitter.postTweet(parameters, error, success);

