

const utils  = require('../../src/utils/utils');

test('Check HTTP strings to be cleaned ', () => {
    let stringWithLink= "ଏବେ ଏଇଟା କଟକ ଆପଣଙ୍କ ଦୃଷ୍ଟି ପାଇଁ .. କେବଳ ଗୋଟିଏ ଶବ୍ଦ ବାଃ… https://t.co/mFZL27tjp3";
    let stringWithoutLink= "ଏବେ ଏଇଟା କଟକ ଆପଣଙ୍କ ଦୃଷ୍ଟି ପାଇଁ .. କେବଳ ଗୋଟିଏ ଶବ୍ଦ ବାଃ…";
    expect(utils.excludeLinkURLS(stringWithLink)).toBe(stringWithoutLink);
  });

  test('Check RT lists to be cleaned  ', () => {
    let stringWithLink= "ନରାଜରେ ଏକ ସନ୍ଧ୍ୟା\nA evening at Naraj";
    let stringWithoutLink= "ନରାଜରେ ଏକ ସନ୍ଧ୍ୟା\nA evening at Naraj";
    expect(utils.excludeRTLists(stringWithLink)).toBe(stringWithoutLink);
  });