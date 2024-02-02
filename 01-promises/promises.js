const p = new Promise((resolve, reject) => {
  const a = 1;
  if (a === 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then((msg) => {
  console.log('This is in the then', msg);
}).catch((msg) => {
  console.log('This is in the catch', msg);
});
