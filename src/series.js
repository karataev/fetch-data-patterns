const {getIdList, fetchPhoto, series} = require('./helpers');

const t0 = Date.now();
series(getIdList(2000), fetchPhoto)
  .then(res => {
    const t1 = Date.now();
    console.log(`Fetch time: ${t1 - t0} ms`);
  });
