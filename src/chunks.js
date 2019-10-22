const {getIdList, fetchPhoto, chunks} = require('./helpers');

const t0 = Date.now();
chunks(getIdList(2000), fetchPhoto, 50)
  .then(res => {
    const t1 = Date.now();
    console.log(`Fetch time: ${t1 - t0} ms`);
  });
