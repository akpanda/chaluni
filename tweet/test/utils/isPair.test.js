
const isPair  = require('../../src/utils/isPair');


test('Check if the tweet is a pair', () => {
    let pairString= "RT @mte2o: ଜାପାନର ଛାତ୍ରମାନେ ଗୁଣନ କେମିତି କରନ୍ତି\nHow Japanese students multiply";
    expect(isPair.ଏମାନେ_ଗୋଟେ_ଯୋଡି_କି(pairString)).toBe(true);
});