// promise all
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let length = promises.length;

    let result = [];

    let count = 0;

    for (let i = 0; i < length; i++) {
      Pomise.resolve(promises[i])
        .then((r) => {
          result[i] = r;
          if (length === ++count) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    }
  });
}
// promise race

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    let length = promises.length;
    for (let i = 0; i < length; i++) {
      Pomise.resolve(promises[i])
        .then((r) => {
          resolve(r);
        })
        .catch((err) => reject(err));
    }
  });
}
