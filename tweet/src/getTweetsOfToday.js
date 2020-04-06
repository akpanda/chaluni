
var Twitter = require('twitter-node-client').Twitter;
var config= require('../config/twitter_config');
const fs = require('fs');
const twitter = new Twitter(config);

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};

var success = function (data) {

    console.log('Data [%s]',
     JSON.parse(data).statuses.length);

};

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy+"-"+mm+"-"+dd;
yesterday = yyyy+"-"+mm+"-"+(dd-1);
console.log(yesterday);
//https://stackoverflow.com/questions/17887984/is-it-possible-to-get-more-than-100-tweets 

// twitter.getSearch( 
//     {'q':`'#ଶୁଆନୁବାଦ since:${yesterday} until:${today}'`,
//     'count':100
//      },
//       error,
//       success
//     );

function getLastNdays(N){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const MAX_ALLOWED_DAYS=5
    if (N>MAX_ALLOWED_DAYS){
        console.log(`More Than ${N} not supported`)
        return false 
    }else{
        for (let index = 0; index < N; index++) {
            from = yyyy+"-"+mm+"-"+(dd-(index+1));
            to = yyyy+"-"+mm+"-"+(dd-(index));
            twitter.getSearch( 
                {'q':`'#ଶୁଆନୁବାଦ since:${from} until:${to}'`,
                'count':100
                 },
                  error,
                  success
                );
        }
    }
}  

getLastNdays(4);