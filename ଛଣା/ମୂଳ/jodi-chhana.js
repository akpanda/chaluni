//ଯୋଡିଛଣା

const fs = require('fs');
const csv=require('csvtojson')

const csvFilePath='output_partially_curated_june_2019.csv'
let ଯୋଡିଗୋଛା =[]
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{

    fs.appendFile('pairs.json',JSON.stringify(jsonObj), function (err) {
        if (err) throw err;
        console.log('Pairs Saved!');
      });
    console.log(jsonObj[0]);
})

