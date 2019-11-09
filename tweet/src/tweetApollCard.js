var Twitter = require('twitter-node-client').Twitter;
var error = function (err, response, body) {
    console.log('ERROR [%s]', err.toString());
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var twitter = new Twitter(config);

pollURL ='https://ads-api.twitter.com/6/accounts/mte2o/cards/poll';
poll={
    "account_id":'mte2o',
"first_choice":"Yes",
"second_choice":"No",
"duration_in_minutes":24*60
}

twitter.postCustomApiCall(pollURL,poll,error,success)