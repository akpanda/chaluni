
/**
 * Some Important Information
 * Unicode Characters for Odia Assigned 90 unused 38 :reference https://en.wikipedia.org/wiki/Oriya_(Unicode_block)
 * regex patterns 
 * Odia Letters Unicode Range  : ([\u0b00-\u0b7F])
 * Bilingual Tweet 
 * A Bilingual pair 
 * English part of the Bilingual pair : (["]*[\w\s,])*([\.\|\n\?])
 * Odia part of the bilingual pair: ((["]*[\u0b00-\u0b7F\s,])*([\|\n\?]))
 * End of sentence :([\|\n\?])
 * Pair With English First : ((["]*[\w\s])*([\.\|\n\?]))((["]*[\u0b00-\u0b7F\s,])*([\|\n\?]))
 * Pair With Odia  First   : (((["]*[\u0b00-\u0b7F\s,])*([\|\n\?])(["]*[\w\s])*([\.\|\n\?])))
 * 
 */


 /** generate all odia consonants */
function generateOdiaConsonants() {
    let consonants = [];
    let start = 15,
      end = 39;
    for (let index = start; index <= end; index++) {
      let odiaConsonant = "0x0B" + index;
      consonants.push(String.fromCharCode(odiaConsonant));
    }
  
    let uncoveredConstants = [
      "\u0B1A",
      "\u0B1B",
      "\u0B1C",
      "\u0B1D",
      "\u0B1E",
      "\u0B1F",
      "\u0B2A",
      "\u0B2B",
      "\u0B2C",
      "\u0B2D",
      "\u0B2E",
      "\u0B2F"
    ];
    let finalConsonants = consonants.concat(uncoveredConstants);
    return finalConsonants;
  }
  
  let vowels = [
    "\u0B3E",
    "\u0B3F",
    "\u0B40",
    "\u0B41",
    "\u0B42",
    "\u0B43",
    "\u0B44",
    "\u0B47",
    "\u0B48",
    "\u0B4B",
    "\u0B4C",
    "\u0B4D",
    "\u0B01",
    "\u0B02",
    "\u0B03"
  ];


const OdiaLetters=generateOdiaConsonants().concat(vowels);

const hasOdia=(orString)=>{

    let hasOdia=false;

    let characters = [...orString];

  for (let index = 0; index < characters.length; index++) {
      const element = characters[index];
      if (OdiaLetters.lastIndexOf(element) > 0 ){
      hasOdia=true;
      break 
    }
  }

    return hasOdia ;
}

const hasEnglish=(enString)=>{

    let hasEnglish=false;

    var n = enString.match(/[a-z A-Z]/g);

    if (n && n.length >0)  hasEnglish=true ;

    return hasEnglish ;
}

const ଏମାନେ_ଗୋଟେ_ଯୋଡି_କି =(passedString) =>{

    let isBilingual=false 
  
    let stringLength= passedString.split().length;

    var before = passedString.substr( (stringLength/2 -5), 5);

    var after = passedString.substr(stringLength/2, 5);

    if(hasOdia(before) && hasEnglish(after) ||
         hasOdia(after) && hasEnglish(before))
    {

        isBilingual =true ;
    }

    return isBilingual;
}

const isPair=(passedString) =>{

    let isBilingual=false 
  
    let stringLength= passedString.split().length;

    var before = passedString.substr( (stringLength/2 -5), 5);

    var after = passedString.substr(stringLength/2, 5);

    if(hasOdia(before) && hasEnglish(after) ||
         hasOdia(after) && hasEnglish(before))
    {

        isBilingual =true ;
    }

    return isBilingual;
    /**
     * get the string 
     * get all odia charachers 
     * get all english characters 
     * get starting point
     * get ending point 
     */

      /**
     * get the string 
     *  find the length 
     *  find the middle 
     *  middle - 5 should be in the same language 
     *  middle + 5 should be in the same language 
     */


}

const ଯୋଡ଼ିର_ଇଂରାଜୀ=(ଅକ୍ଷରସୁତା)=>{
    let ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ ="ଜଣାନାହିଁ";
    let ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା= ଅକ୍ଷରସୁତା.length; 
    var ମଝିରୁ_ପାଞ୍ଚଟି_ଆଗରୁ = ଅକ୍ଷରସୁତା.substr( (ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା/2 -5), 5);
    if(hasEnglish(ମଝିରୁ_ପାଞ୍ଚଟି_ଆଗରୁ)){
        ଇଂରାଜୀଭାଗ = ଅକ୍ଷରସୁତା.substr( 0,(ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା/2));
        ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ= ଇଂରାଜୀଭାଗ;
    }
    else{
        ଇଂରାଜୀଭାଗ = ଅକ୍ଷରସୁତା.substr( (ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା/2),ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା);
    }
  return   ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ;
}

const ଯୋଡ଼ିର_ଓଡ଼ିଆ=(ଅକ୍ଷରସୁତା)=>{
    let ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ ="ଜଣାନାହିଁ";
    let ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା= ଅକ୍ଷରସୁତା.length; 
    var ମଝିରୁ_ପାଞ୍ଚଟି_ଆଗରୁ = ଅକ୍ଷରସୁତା.substr( (ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା/2 -5), 5);
    if(hasOdia(ମଝିରୁ_ପାଞ୍ଚଟି_ଆଗରୁ)){
        ଓଡ଼ିଆଭାଗ = ଅକ୍ଷରସୁତା.substr( 0,(ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା/2));
        ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ= ଓଡ଼ିଆଭାଗ;
    }
    else{
        ଓଡ଼ିଆଭାଗ = ଅକ୍ଷରସୁତା.substr( (ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା/2),ସୂତାରେ_ଅକ୍ଷର_ସଂକ୍ଷା);
        ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ= ଓଡ଼ିଆଭାଗ;
    }
  return ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ;
}

/**
 * 
 * @param {string} ଅକ୍ଷରସୁତା : ଦ୍ଵିଭାଷୀ ସାମନ୍ତରା ଓଡ଼ିଆ ଇଂରାଜୀ ଯୋଡ଼ି ବାକ୍ୟ  a parallel OdiaEnglish bilingual pair, "for example Thank You sir ଧନ୍ୟବାଦ ଆଜ୍ଞା"
 * @returns {Object} ଯୋଡ଼ି : ଇ - ଯୋଡି଼ର ଇଂରାଜୀ ଭାଗ  english part of the pair  ଓ - ଯୋଡି଼ର ଓଡ଼ିଆ ଭାଗ Odia part of the pair 
 */
const ଯୋଡ଼ି=(ଅକ୍ଷରସୁତା)=>{
    let ଯୋଡ଼ି={ଇ:'',ଓ:''};
    ଯୋଡ଼ି.ଓ=ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ(ଅକ୍ଷରସୁତା);
    ଯୋଡ଼ି.ଇ=ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ(ଅକ୍ଷରସୁତା);
    return ଯୋଡ଼ି;
}

/**
 * 
 * @param {string} ଅକ୍ଷରସୁତା : ଦ୍ଵିଭାଷୀ ସାମନ୍ତରା ଓଡ଼ିଆ ଇଂରାଜୀ ଯୋଡ଼ି ବାକ୍ୟ  a parallel OdiaEnglish bilingual pair, "for example Thank You sir ଧନ୍ୟବାଦ ଆଜ୍ଞା"
 * @returns {Object} ଯୋଡ଼ି : ଇ - ଯୋଡି଼ର ଇଂରାଜୀ ଭାଗ  english part of the pair  ଓ - ଯୋଡି଼ର ଓଡ଼ିଆ ଭାଗ Odia part of the pair 
 */
const Pair=(ଅକ୍ଷରସୁତା)=>{
    let Pair={en:'unknown',or:'ଅଜଣା'};
    console.log("PAIR :"+ ଅକ୍ଷରସୁତା);
    Pair.or=ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ(ଅକ୍ଷରସୁତା);
    Pair.en=ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ(ଅକ୍ଷରସୁତା);
    return Pair;
}

//const  ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଓଡ଼ିଆ  = /([\u0b00-\ub07F,-:;?"'!\s।]+)/g;
const  ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଓଡ଼ିଆ  = /([\u0b00-\ub07F,-:;?"'!\s।]+[\u0b00-\ub07F \n]$)/g;
const  ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଓଡ଼ିଆ_1 = /(([\s"]*[\u0b00-\u0b7F\s,-:])+([\;\|\n\?\!।]))/g;
//const  ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଇଂରାଜୀ  = /(["\w\s,?"'-;:!]*[\.\!\;])/g;
const  ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଇଂରାଜୀ  = /(["\w\s,?"'-;:!]*[\.\!\;\n])/g;
const  ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଇଂରାଜୀ_1  = /(([\w\s":'])+([\.\? \;\!]))/g;

const ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ=(ଯୋଡ଼ିର_ଅକ୍ଷରସୁତା)=>{
    let ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ ="ଜଣାନାହିଁ";
    console.log("ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ" +": "+ଯୋଡ଼ିର_ଅକ୍ଷରସୁତା)
    let re = new RegExp(ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଓଡ଼ିଆ);

    var ମିଳିବା_ସୂତା_ଥାକ  = re.exec(ଯୋଡ଼ିର_ଅକ୍ଷରସୁତା);

    //var ମିଳିବା_ସୂତା_ଥାକ = ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଓଡ଼ିଆ.exec(ଯୋଡ଼ିର_ଅକ୍ଷରସୁତା);
    ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ=  (ମିଳିବା_ସୂତା_ଥାକ) ? ମିଳିବା_ସୂତା_ଥାକ[0].trim():ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ;
    console.log("ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ" +": "+ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ);
   if(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ===""){
    var ମିଳିବା_ସୂତା_ଥାକ = ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଓଡ଼ିଆ_1.exec(ଯୋଡ଼ିର_ଅକ୍ଷରସୁତା);
    ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ=  (ମିଳିବା_ସୂତା_ଥାକ) ? ମିଳିବା_ସୂତା_ଥାକ[0].trim():ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ;
   }
   console.log("ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ" +": "+ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ);
    return ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ;
 }

const ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ=(ଯୋଡ଼ିର_ଅକ୍ଷରସୁତା)=>{
    let ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ ="Unknown";

    let re = new RegExp(ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଇଂରାଜୀ);

    var ମିଳିବା_ସୂତା_ଥାକ  = re.exec(ଯୋଡ଼ିର_ଅକ୍ଷରସୁତା);
   
    ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ=(ମିଳିବା_ସୂତା_ଥାକ) ? ମିଳିବା_ସୂତା_ଥାକ[0].trim(): ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ;

    // in some case it extracts ;\n for english
   if( ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ.charAt(0)===";"){
        ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ=ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ.substring(1);
    }
  
    return ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ;
  }

module.exports ={
    ଯୋଡ଼ି,
    Pair,
    ଏମାନେ_ଗୋଟେ_ଯୋଡି_କି,
    ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ,
    ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ
};


//Tests : TODO : move these into proper tests  
    // console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ("Thank You sir ଧନ୍ୟବାଦ ଆଜ୍ଞା")); // Thank You sir 
    // console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ("Thank You sir ଧନ୍ୟବାଦ ଆଜ୍ଞା")); // ଧନ୍ୟବାଦ ଆଜ୍ଞା 
    // console.log(ଯୋଡ଼ି("Thank You sir ଧନ୍ୟବାଦ ଆଜ୍ଞା").ଓ);// ଧନ୍ୟବାଦ ଆଜ୍ଞା 
    // console.log(ଯୋଡ଼ି("Thank You sir ଧନ୍ୟବାଦ ଆଜ୍ଞା").ଇ);// Thank You sir 

    // console.log(ଏମାନେ_ଗୋଟେ_ଯୋଡି_କି("Thank You sir ଧନ୍ୟବାଦ ଆଜ୍ଞା"));//true
    // console.log(isPair("ଶୁଆନୁବାଦ")); // false
    // console.log(isPair("Anjan")); // false 
    // console.log(isPair("Thank You sir ଧନ୍ୟବାଦ ଆଜ୍ଞା")); // true 
    // console.log(isPair("ବିନ୍ଦୁରୁ ସିନ୍ଧୁ \n Drops form the ocean")); // true 
    //console.log(isPair("Realistic perception of events at hand measures one's cognitive ability.ସାମ୍ପ୍ରତିକ ଘଟଣାବଳୀ ମାନଙ୍କର ବାସ୍ତବବାଦୀ ଗ୍ରହଣବୋଧ/ଅବଧାରଣା ଜଣଙ୍କର ସଂଜ୍ଞାନ ସାମର୍ଥ୍ୟ ମାପିଥାଏ।/ନିର୍ଣ୍ଣୟ କରେ।"));// true
    // console.log(isPair("ତାଳଗୁଡ଼ର ଜନ୍ମ ପରା ସେଇ କାମରେ ବ୍ୟବହାର ହେବା ପାଇଁ । ନ ଫୁଲେଇଲେ ତା ମନ କଷ୍ଟ ହେବନି?Palm jaggery is born for that purpose. Won't it feel bad if you don't blow?")); // true 
    /**
     * Today Trees need more hugs than we humans do! \nଆଜିକାଲି ମଣିଷମାନଙ୍କଠୁ ବେଶୀ ଭଲପାଇବା ଗଛ ମାନଙ୍କୁ ଦରକାର!
     *   ପ୍ରତ୍ୟେକ ଲୋକର ଜୀବନ କିମ୍ବା ପ୍ରତ୍ୟେକ ଅନାବନା ଘଟଣା, ଗୋଟେ ଗୋଟେ କାହାଣୀ।\nEvery human life even a random incident is a story.
     * ମୋ ସ୍ୱପ୍ନ ଆଉ ଅକାଂକ୍ଷାର ନିରବ ଚିତ୍କାର?\nSilent cry of my dreams and aspirations?
     */
    //  console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ("କାର୍ତିକମାସରେ ରାଧାଦାମୋଦରଙ୍କୁ ପ୍ରାର୍ଥନା କରୁଥିବା ସମସ୍ତଙ୍କପାଇଁ ଦାମୋଦର ଚା।"));
    //  console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ(" ବାରିପଦା: ଆଜିଠୁ ପର୍ଯ୍ୟଟକଙ୍କ ପାଇଁ ଖୋଲିଲା ଶିମିଳିପାଳ;\nBaripada: Similipal opened up for tourists today;"));
    //  console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ(" ବାରିପଦା: ଆଜିଠୁ ପର୍ଯ୍ୟଟକଙ୍କ ପାଇଁ ଖୋଲିଲା ଶିମିଳିପାଳ;\nBaripada: Similipal opened up for tourists today;"));
    //  console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ("ଦଶମ ଶ୍ରେଣୀରେ ଥିଲା ,ରବର୍ଟ ଫ୍ରସ୍ଟ ଙ୍କ କବିତା \n It was in class 10, a poem of Robert Frost ."));
    // console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ("ଦଶମ ଶ୍ରେଣୀରେ ଥିଲା ,ରବର୍ଟ ଫ୍ରସ୍ଟ ଙ୍କ କବିତା \n It was in class 10, a poem of Robert Frost ."));
    // console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ("ପ୍ରତ୍ୟେକ ଲୋକର ଜୀବନ କିମ୍ବା ପ୍ରତ୍ୟେକ ଅନାବନା ଘଟଣା, ଗୋଟେ ଗୋଟେ କାହାଣୀ। \n Every human life even a random incident is a story."));
    // console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ("ପ୍ରତ୍ୟେକ ଲୋକର ଜୀବନ କିମ୍ବା ପ୍ରତ୍ୟେକ ଅନାବନା ଘଟଣା, ଗୋଟେ ଗୋଟେ କାହାଣୀ। \n Every human life even a random incident is a story."));
    // console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ("Every human life even a random incident is a story.\n ପ୍ରତ୍ୟେକ ଲୋକର ଜୀବନ କିମ୍ବା ପ୍ରତ୍ୟେକ ଅନାବନା ଘଟଣା, ଗୋଟେ ଗୋଟେ କାହାଣୀ।"));
    //  console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ("Every human life even a random incident is a story.\n ପ୍ରତ୍ୟେକ ଲୋକର ଜୀବନ କିମ୍ବା ପ୍ରତ୍ୟେକ ଅନାବନା ଘଟଣା, ଗୋଟେ ଗୋଟେ କାହାଣୀ।"));
    //   console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ("Today Trees need more hugs than we humans do!\nଆଜିକାଲି ମଣିଷମାନଙ୍କଠୁ ବେଶୀ ଭଲପାଇବା ଗଛ ମାନଙ୍କୁ ଦରକାର!"));
    //   console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ("Today Trees need more hugs than we humans do!\nଆଜିକାଲି ମଣିଷମାନଙ୍କଠୁ ବେଶୀ ଭଲପାଇବା ଗଛ ମାନଙ୍କୁ ଦରକାର!"));
    //  console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ("Good manners and soft words have brought many difficult things to pass.\n\nଭଲ ଆଚରଣ ଓ ନମ୍ର ଶବ୍ଦ ବ୍ୟବହାର ଦ୍ୱାରା ଅନେକ କଷ୍ଟ ଲାଘବ କରାଯାଇ ପାରେ।"));
    //  console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ("Good manners and soft words have brought many difficult things to pass.\n\nଭଲ ଆଚରଣ ଓ ନମ୍ର ଶବ୍ଦ ବ୍ୟବହାର ଦ୍ୱାରା ଅନେକ କଷ୍ଟ ଲାଘବ କରାଯାଇ ପାରେ।"));
   // console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ("Let your faith be bigger than your fears!\nଆପଣଙ୍କ ଭୟ ଅପେକ୍ଷା ଆପଣଙ୍କ ବିଶ୍ୱାସକୁ ବଡ଼ ହେବାକୁ ଦିଅନ୍ତୁ!"));
//    console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ("Let your faith be bigger than your fears\nଆପଣଙ୍କ ଭୟ ଅପେକ୍ଷା ଆପଣଙ୍କ ବିଶ୍ୱାସକୁ ବଡ଼ ହେବାକୁ ଦିଅନ୍ତୁ"));
//    console.log(ଯୋଡ଼ିର_ଓଡ଼ିଆ_ଭାଗ("Neither land nor way \n ଜମି ନୁହେଁ କି ରାସ୍ତା ନୁହେଁ"));
//    console.log(ଯୋଡ଼ିର_ଇଂରାଜୀ_ଭାଗ("Neither land nor way \n ଜମି ନୁହେଁ କି ରାସ୍ତା ନୁହେଁ"));

    /*

    Good manners and soft words have brought many difficult things to pass.\n\nଭଲ ଆଚରଣ ଓ ନମ୍ର ଶବ୍ଦ ବ୍ୟବହାର ଦ୍ୱାରା ଅନେକ କଷ୍ଟ ଲାଘବ କରାଯାଇ ପାରେ।
    Good manners and soft words have brought many difficult things to pass.

    ଭଲ ଆଚରଣ ଓ ନମ୍ର ଶବ୍ଦ ବ୍ୟବହାର ଦ୍ୱାରା ଅନେକ କଷ୍ଟ ଲାଘବ କରାଯା…

    ତାଳଗୁଡ଼ର ଜନ୍ମ ପରା ସେଇ କାମରେ ବ୍ୟବହାର ହେବା ପାଇଁ । ନ ଫୁଲେଇଲେ ତା ମନ କଷ୍ଟ ହେବନି?
    Palm jaggery is born for that purpose. Won't it feel bad if you don't blow?
    cc: 
    @mte2o
    ଟିକେ ରଥ ଦେଖା କଦଳୀ ବିକା କରିଦେଲି 

    ବିନ୍ଦୁରୁ ସିନ୍ଧୁ
    Drops form the ocean 

    Realistic perception of events at hand measures one's cognitive ability.
    ସାମ୍ପ୍ରତିକ ଘଟଣାବଳୀ ମାନଙ୍କର ବାସ୍ତବବାଦୀ ଗ୍ରହଣବୋଧ/ଅବଧାରଣା ଜଣଙ୍କର ସଂଜ୍ଞାନ ସାମର୍ଥ୍ୟ ମାପିଥାଏ।/ନିର୍ଣ୍ଣୟ କରେ।

    */
    // Regex for Odia and English parts of the tweets
    /**
     * ends with 
     *  exclamatory,
     *  question mark
     *  new line 
     */
    // const  ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଓଡ଼ିଆ  = /(([\n\s"]*[\u0b00-\u0b7F\s,!:])+([\;\|\n\?\!।]))/g;
    // const  ପୁନଃପୌନିକ_ଅକ୍ଷରମାଳା_ଇଂରାଜୀ  = /(["\n\s \u0b00-\u0b7F]*[\w\s,:!'])*([\.\|\n\? \;\!])/g

