const {getIdList, fetchPhoto, all} = require('./helpers');

const t0 = Date.now();
all(getIdList(2000), fetchPhoto)
  .then(res => {
    const t1 = Date.now();
    console.log(`Fetch time: ${t1 - t0} ms`);
  });
