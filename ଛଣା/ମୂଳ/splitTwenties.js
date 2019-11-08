const fs = require('fs');

let pairs = []
// fs.readFile('./pairs.json', 'utf8', function(err, contents) {
//     console.log(contents);    
// });

 pairs = JSON.parse(fs.readFileSync('./pairs.json', 'utf8'));
console.log(pairs.length);
console.log(pairs[1]);

 let splitPair=[]
 let splitLength=50;

for (let index = 0; index < pairs.length; index++) {
   splitPair.push(pairs[index]);
   if (index % splitLength ===0){
       //write to a new file 
        fs.appendFile(`./pairs/pairs${index}.json`,JSON.stringify(splitPair), function (err) {
            if (err) throw err;
            console.log('Pairs Saved!');
          });
        //reset the temp array
        splitPair=[]
    }
}
