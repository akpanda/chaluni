var Twitter = require('twitter-node-client').Twitter;
var error = function (err, response, body) {
    console.log('ERROR [%s]', err.toString);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var twitter = new Twitter(config);

let volunteersToVote=[""] 

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


let parameters = {"status":tweetTemplate};

twitter.postTweet(parameters, error, success);
