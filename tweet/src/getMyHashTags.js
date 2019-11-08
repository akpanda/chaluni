// Get external dependencies 
const Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');

// Get the modules to run 
const config= require('../config/twitter_config');
const ଯୋଡିସରଞ୍ଜାମ = require('./utils/isPair');
const ସରଞ୍ଜାମ = require('./utils/utils');
const ଶାରୀକୁଖବର = require('../data/writeToSari.js');

const error = function (err, response, body) {
   console.log('ERROR [%s]', err.toString);
  };

let successsData=[];
const SaveHashTaggedTweets = function (data) {
        console.log('Data [%s]', data);

        successsData =data;
        fs.appendFile('hashTaggedTweets.json', data, function (err) {
            if (err) throw err;
            console.log('Tweet Saved!');
        });
        
    };

const processData= function (data){  
    myHashedTweets =JSON.parse(data).statuses;
    //console.log(myHashedTweets.length);
    let count=0;
    myHashedTweets.forEach(tweet => {
        count++;
        if(!tweet.truncated){
                 //  console.log(tweet.text);
                   if( ଯୋଡିସରଞ୍ଜାମ.ଏମାନେ_ଗୋଟେ_ଯୋଡି_କି(tweet.text)){
                       console.log(count) ;

                       let tweetText=tweet.text;
                       let selfRTremovedText=  ସରଞ୍ଜାମ.excludeSelfRTs(tweet.text)
                       let rtRemovedText= ସରଞ୍ଜାମ.excludeRTLists(selfRTremovedText)
                       let pairPart = ସରଞ୍ଜାମ.excludeEverythingAfterHash(rtRemovedText)
                      
                       console.log(pairPart)
                       console.log(ଯୋଡିସରଞ୍ଜାମ.Pair(pairPart));
 
                   }else{
                       console.log("ଏମାନେ ଯୋଡି ନୁହନ୍ତି "+ tweet.text);
                   }
            
               }
               else{
                 console.log("ଟୁଇଟ ପୁରା ନାହିଁ " + tweet.text);
               }}
    )
    };
   

    const twitter = new Twitter(config);
const getMyHashTags=function(howMany){
    let  myHashedTweets ;
    twitter.getSearch({'q':'#ଶୁଆନୁବାଦ','count': howMany}, error, (data)=> {            
             myHashedTweets =JSON.parse(data).statuses;
             //console.log(myHashedTweets.length);
             let count=0;
             myHashedTweets.forEach(tweet => {
                try{
                count++;
                console.log(count) ;
                if(!tweet.truncated){
                  //console.log(tweet);
                   // if( ଯୋଡିସରଞ୍ଜାମ.ଏମାନେ_ଗୋଟେ_ଯୋଡି_କି(tweet.text)){
                        let tweetText=tweet.text;
                        // console.log("O   "+tweetText);
                        let selfRTremovedText=  ସରଞ୍ଜାମ.excludeSelfRTs(tweet.text)
                        // console.log("RTR  "+ selfRTremovedText)
                        let rtRemovedText= ସରଞ୍ଜାମ.excludeRTLists(selfRTremovedText)
                        let pairPart = ସରଞ୍ଜାମ.excludeEverythingAfterHash(rtRemovedText)
                        // console.log("PP  "+ pairPart)
                        let ପାଇଥିବାଯୋଡି =ଯୋଡିସରଞ୍ଜାମ.Pair(pairPart);
                       
                        // if(foundPair.en==='Unknown'){
                        //     if(tweet.is_quote_status)
                        //     // console.log( ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
                        //     // console.log( tweet.quoted_status.text);
                        //     foundPair.en=ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text);
                        // }
                        ଶାରୀକୁଖବର.ଯୋଡିଟେ_ପଠାଉଛୁ(ପାଇଥିବାଯୋଡି );
                        console.log(ପାଇଥିବାଯୋଡି);
                    // }else{
                    //     console.log(" Tweet is reported as a non Pair :ଏମାନେ ଯୋଡି ନୁହନ୍ତି "+ tweet.text);
                    // }
             
                }
                else{
                  console.log("Tweet is truncated  ଟୁଇଟ ପୁରା ନାହିଁ " + tweet.text);
                 // twitter.getTweet({ id: tweet.id}, error, (data)=>{console.log(data.status)});
                }
            }catch{
                console.log("Error : moving next ")
            }
         }); 
        });
 }


 
module.exports=getMyHashTags;
