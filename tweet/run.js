// Get external dependencies 
const Twitter = require('twitter-node-client').Twitter;
const fs = require('fs');

// Get the modules to run 
const  getMyHashTags =require('./src/getMyHashTags');

// Define application level constants 
const runInterVal=15000;
const hashTagScanBatchSize=10;

/**
 Run continuously
  Get Mentions / Hashes     
        Check each 
        Do they have Odia character 
        Are they bilingual : hasOdia and hasEnglish
        Do they look to be  a pair 
        are the en  and or pairs similar - word counds match / length math 
        So it is s bilingual tag 
        Retweet 
        Not sure 
        Reply Tagging Human moderators  for review 
 */
const runSuaTasks = ()=> {
    console.log('Sua tasks starts.... _' + Date.now());

    getMyHashTags(hashTagScanBatchSize);
    
    console.log('Sua tasks ends ..... _ '+ Date.now());
}

// Start the process and run Tasks at intervals 
setInterval(runSuaTasks, runInterVal);