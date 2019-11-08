/**
 * extracts on the pairs : removes everything after the hashtag  #ଶୁଆନୁବାଦ
 * @param {*} tweetText 
 */
function excludeEverythingAfterHash(tweetText) {
    var pairPart = tweetText.indexOf("#ଶୁଆନୁବାଦ") >0 ? 
                      tweetText.substring(0,tweetText.indexOf("#ଶୁଆନୁବାଦ")):tweetText;
    return pairPart.trim();
 }

/**
 * remove "RT @mte2o:" which is added by twitter where translation is as a Comment and RT
 * @param {string} tweetText 
 */
function excludeSelfRTs(tweetText) {
    var pairPart = tweetText.indexOf("RT @mte2o:")>=0 ?
                      tweetText.substring((tweetText.indexOf("RT @mte2o:")+"RT @mte2o:".length),tweetText.length):
                      tweetText;
     return pairPart.trim();
 }

/**
 * remove RT chains added added by twitter where translation is as a Comment and RT in a series 
 * @param {string} tweetText 
 */
function excludeRTLists(tweetText) {
     let pairPart = tweetText.substring(tweetText.lastIndexOf("@"),tweetText.length);
      pairPart = pairPart.substring(pairPart.indexOf(" "),pairPart.length);
     console.log("ERTL "+pairPart);
      return pairPart.trim();

 }

/**
 * processses tweets having multiple pairs 
 * @param {string} tweetText 
 */
function extractMultiplePairsIfAny(tweetText) {

    let pairParts =[];
    pairParts = tweetText.split("\n");

    let pairs =[];
    let pair ='';

    for (let index = 0; index < pairParts.length; index++) {
        pair+=pairParts[index]+'\n';
      if(index % 2 ==1 ) {
          pairs.push(pair)
          pair='';
      } 
    }
     return pairs
 }

/**
 * strips all special characters out when needed 
 * @param {string} text 
 */
function stripAllSpecialCharacters(text){
      //TODO:
 }

/**
 * Export these util functions as a module 
 */
module.exports = {
    excludeEverythingAfterHash,
    excludeSelfRTs,
    extractMultiplePairsIfAny,
    excludeRTLists
  }

//TESTS : TODO : move these into proper test cases 
  // console.log(extractMultiplePairsIfAny(" It cost a fortune to poop outside. \n ମହଙ୍ଗା ପଡ଼ିଲା ବାହାରେ ମଳ ତ୍ୟାଗ କରିବା,\n Rations of 24 families have been discontinued. \n ବନ୍ଦ ହେ…"))
    // console.log(excludeSelfRTs("RT @mte2o: It cost a fortune to poop outside.\n ମହଙ୍ଗା ପଡ଼ିଲା ବାହାରେ ମଳ ତ୍ୟାଗ କରିବା"));
    // Try , don’t be shy \n ଚେଷ୍ଟାକରନ୍ତୁ , ନିର୍ଭୀକଭାବରେ #ଶୁଆନୁବାଦ
    //excludeEverythingAfterHash(" How much does Google REALLY know about you? ଗୁଗୁଲ ଆପଣଙ୍କ ବିଷୟରେ ପ୍ରକୃତରେ କେତେ ତଥ୍ୟ ଜାଣିଛି? #ଶୁଆନୁବାଦ https://t.co/NnKGNzWuLs") 
    // var str = " How much does Google REALLY know about you? ଗୁଗୁଲ ଆପଣଙ୍କ ବିଷୟରେ ପ୍ରକୃତରେ କେତେ ତଥ୍ୟ ଜାଣିଛି? #ଶୁଆନୁବାଦ https://t.co/NnKGNzWuLs";
    //console.log(tweetText) ;
   // console.log(tweetText.indexOf("RT @mte2o:")+"RT @mte2o:".length);
  //  console.log(tweetText.indexOf("@mte2o"));
  //  console.log(tweetText.indexOf("@mte2o")+"@mte2o".length);
  //  console.log(tweetText.length);
  // console.log(tweetText.substring(tweetText.indexOf("@mte2o")+"@mte2o".length,tweetText.length));
    // var str = " How much does Google REALLY know about you? ଗୁଗୁଲ ଆପଣଙ୍କ ବିଷୟରେ ପ୍ରକୃତରେ କେତେ ତଥ୍ୟ ଜାଣିଛି? #ଶୁଆନୁବାଦ https://t.co/NnKGNzWuLs";
    //console.log(tweetText) ;
   // console.log(tweetText.indexOf("RT @mte2o:")+"RT @mte2o:".length);
   // var str = " How much does Google REALLY know about you? ଗୁଗୁଲ ଆପଣଙ୍କ ବିଷୟରେ ପ୍ରକୃତରେ କେତେ ତଥ୍ୟ ଜାଣିଛି? #ଶୁଆନୁବାଦ https://t.co/NnKGNzWuLs";