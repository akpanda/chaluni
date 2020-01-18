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

const processPairsFromTweetText= function(tweet,tweetText){
         console.log("O   "+tweetText);
        let selfRTremovedText=  ସରଞ୍ଜାମ.excludeSelfRTs(tweetText)
         console.log("RTR  "+ selfRTremovedText)
        let rtRemovedText= ସରଞ୍ଜାମ.excludeRTLists(selfRTremovedText)
        let pairPart = ସରଞ୍ଜାମ.excludeEverythingAfterHash(rtRemovedText)
         console.log("PP  "+ pairPart)
        let ପାଇଥିବାଯୋଡି =ଯୋଡିସରଞ୍ଜାମ.Pair(pairPart);
        // when the translation and original text is in different tweets
        if(ପାଇଥିବାଯୋଡି.en==='Unknown' && tweet.lang==="or"){
            if(tweet.is_quote_status)
            console.log( ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
            console.log( tweet.quoted_status.text);
            ପାଇଥିବାଯୋଡି.en=ସରଞ୍ଜାମ.excludeLinkURLS(ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
        }
        if(ପାଇଥିବାଯୋଡି.or==='ଜଣାନାହିଁ' && tweet.lang==="en"){
            if(tweet.is_quote_status)
            console.log( ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
            console.log( tweet.quoted_status.text);
            
            ପାଇଥିବାଯୋଡି.or=ସରଞ୍ଜାମ.excludeLinkURLS(ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
        }
        return ପାଇଥିବାଯୋଡି;
    }
const processNonPairsFromTweetText= function(tweet,tweetText){
       
         //console.log("O   "+tweetText);
        let selfRTremovedText=  ସରଞ୍ଜାମ.excludeSelfRTs(tweetText)
        // console.log("RTR  "+ selfRTremovedText)
        let rtRemovedText= ସରଞ୍ଜାମ.excludeRTLists(selfRTremovedText)
        let pairPart = ସରଞ୍ଜାମ.excludeEverythingAfterHash(rtRemovedText)
        // console.log("PP  "+ pairPart)
        let ପାଇଥିବାଯୋଡି =ଯୋଡିସରଞ୍ଜାମ.Pair(pairPart);
        // when the translation and original text is in different tweets
        console.log(ପାଇଥିବାଯୋଡି);
        let quotedText = ''
        if(ପାଇଥିବାଯୋଡି.en==='Unknown' && tweet.lang==="or"){
           // if(tweet.is_quote_status)
           // console.log( ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
            //console.log( tweet.quoted_status.text);
            quotedText=tweet.is_quote_status && tweet.quoted_status?
                            tweet.quoted_status.text :
                            tweet.retweeted_status.quoted_status.text;

            //let quotedText = tweet.retweetedStatus.quoted_status.text;
            ପାଇଥିବାଯୋଡି.en=ସରଞ୍ଜାମ.excludeLinkURLS(ସରଞ୍ଜାମ.excludeRTLists(quotedText));
        }
        if(ପାଇଥିବାଯୋଡି.or==='ଜଣାନାହିଁ' && tweet.lang==="en"){
            if(tweet.is_quote_status)
            console.log( ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
            console.log( tweet.quoted_status.text);
            
            ପାଇଥିବାଯୋଡି.or=ସରଞ୍ଜାମ.excludeLinkURLS(ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
        }
        console.log(ପାଇଥିବାଯୋଡି);
        return ପାଇଥିବାଯୋଡି;
    }
const processTruncatedTweets= function(tweetText){
        // console.log("O   "+tweetText);
        let selfRTremovedText=  ସରଞ୍ଜାମ.excludeSelfRTs(tweetText)
        // console.log("RTR  "+ selfRTremovedText)
        let rtRemovedText= ସରଞ୍ଜାମ.excludeRTLists(selfRTremovedText)
        let pairPart = ସରଞ୍ଜାମ.excludeEverythingAfterHash(rtRemovedText)
        // console.log("PP  "+ pairPart)
        let ପାଇଥିବାଯୋଡି =ଯୋଡିସରଞ୍ଜାମ.Pair(pairPart);
        // when the translation and original text is in different tweets
        if(ପାଇଥିବାଯୋଡି.en==='Unknown' && tweet.lang==="or"){
            if(tweet.is_quote_status)
            console.log( ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
            console.log( tweet.quoted_status.text);
            ପାଇଥିବାଯୋଡି.en=ସରଞ୍ଜାମ.excludeLinkURLS(ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
        }
        if(ପାଇଥିବାଯୋଡି.or==='ଜଣାନାହିଁ' && tweet.lang==="en"){
            if(tweet.is_quote_status)
            console.log( ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
            console.log( tweet.quoted_status.text);
            
            ପାଇଥିବାଯୋଡି.or=ସରଞ୍ଜାମ.excludeLinkURLS(ସରଞ୍ଜାମ.excludeRTLists(tweet.quoted_status.text));
        }
        return ପାଇଥିବାଯୋଡି;
    }

const getMyHashTags=function(howMany){
    let  myHashedTweets ;
    twitter.getSearch({
                        'q':'#ଶୁଆନୁବାଦ',
                        'count': howMany,
                        // 'until':'2019-11-19'
                    }, error, (data)=> {            
             myHashedTweets =JSON.parse(data).statuses;
             console.log(myHashedTweets.length);
             let count=0;
             myHashedTweets.forEach(tweet => {
                try{
                count++;
                console.log(count) ;
                let ପାଇଥିବାଯୋଡି={en:'unknown',or:'ଅଜଣା'};
                //console.log(tweet);
                if(!tweet.truncated){
                    if( ଯୋଡିସରଞ୍ଜାମ.ଏମାନେ_ଗୋଟେ_ଯୋଡି_କି(tweet.text)){
                         let tweetText=tweet.text;
                        Console.log("O   "+tweetText);
                        ପାଇଥିବାଯୋଡି= processPairsFromTweetText(tweet.text)
                        //ଶାରୀକୁଖବର.ଯୋଡିଟେ_ପଠାଉଛୁ(ପାଇଥିବାଯୋଡି );
                        console.log(ପାଇଥିବାଯୋଡି);
                    }
                    else{

                        console.log(ସରଞ୍ଜାମ.excludeEverythingAfterHash(tweet.text))
                       
                        //console.log(tweet);
                        // console.log(tweet.quoted_status.lang==="or"?
                        // ଯୋଡିସରଞ୍ଜାମ.ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ(tweet.quoted_status.text):
                        // ଯୋଡିସରଞ୍ଜାମ.ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ(tweet.quoted_status.text));

                        // let ପାଇଥିବାଯୋଡି = ଯୋଡିସରଞ୍ଜାମ.Pair(
                        //                         tweet.text+
                        //                         tweet.quoted_status.text);
                        // console.log(ପାଇଥିବାଯୋଡି); 
                        ପାଇଥିବାଯୋଡି=processNonPairsFromTweetText(tweet,tweet.text) ; 
                        console.log(ପାଇଥିବାଯୋଡି); 
                      //console.log(" Tweet is reported as a non Pair :ଏମାନେ ଯୋଡି ନୁହନ୍ତି "+ tweet.text);
                    }
                }
                else{
                  console.log("Tweet is truncated  ଟୁଇଟ ପୁରା ନାହିଁ " + tweet.text);
                  console.log(tweet);
                  ପାଇଥିବାଯୋଡି= processPairsFromTweetText(tweet,tweet.text)
                  //ଶାରୀକୁଖବର.ଯୋଡିଟେ_ପଠାଉଛୁ(ପାଇଥିବାଯୋଡି );
                  console.log(ପାଇଥିବାଯୋଡି);
                  //processTruncatedTweets(tweet.text)
                  // twitter.getTweet({ id: tweet.id}, error, (data)=>{console.log(data.status)});
                }
            }catch(ex){
                console.log(ex)
                console.log("Error : moving next ")
            }
         }); 
        });
 }


 
module.exports=getMyHashTags;
