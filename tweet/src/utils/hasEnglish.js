

const hasEnglish=(orString)=>{
    let hasEnglish=false;
    var n = orString.match(/[a-z A-Z]/g);
    if (n && n.length >0)  hasEnglish=true ;
    return hasEnglish ;
 }



 //Tests 
console.log(hasEnglish("ଶୁଆନୁବାଦ")); // false
console.log(hasEnglish("Anjan")); //true 