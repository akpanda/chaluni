/** all odia consonants */
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

//Tests 
  //console.log(hasOdia("ଶୁଆନୁବାଦ")); // true
  //console.log(hasOdia("Anjan")); //false 