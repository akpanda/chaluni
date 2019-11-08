const Firebase = require('firebase');
const firebaseConfig = require('../config/firebaseConfig.js');

let uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);

const writePair=(Pair)=>{
  if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseConfig);
  }
    Firebase.database().ref('pairs/' + uniqueId).set(Pair);
 }
const ଯୋଡିଟେ_ପଠାଉଛୁ =writePair;
const writeUnRecognized=(unrecognizedObject)=>{
  if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseConfig);
  }
    Firebase.database().ref('unrecognized/' + uniqueId).set(unrecognizedObject);
 }

const getPairs = () => {

    if (!Firebase.apps.length) {
      // console.log(Firebase.apps.length);
      // console.log(firebaseConfig);
      Firebase.initializeApp(firebaseConfig);
    }

    //calling firebase
    let ref = Firebase.database().ref("/pairs");

    ref.once(
      "value",
      function(snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function(childSnapshot) {
          console.log(childSnapshot.key);
          console.log(childSnapshot.val());
        });
      },
      snapshot => {
        console.log("hello again");
        console.log(snapshot);
      }
    );

    console.log("DATA RETRIEVED");
  };

 //TESTS 
 //writePair({en:'it costs a fortune to poop outside',or:'ମହଙ୍ଗା ପଡ଼ିଲା ବାହାରେ ମଳ ତ୍ୟାଗ କରିବା'})
 // writeUnRecognized({ en: '', or: '୫୪ ବର୍ଷରେ ପଦାର୍ପଣ କଲେ ବଲିଉଡ୍ କିଙ୍ଗ୍ ଖାନ' })
 // getPairs();

module.exports ={
  ଯୋଡିଟେ_ପଠାଉଛୁ
}