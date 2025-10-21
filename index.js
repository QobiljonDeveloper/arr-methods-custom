// Bind
function myBind(fn, thisArg, ...args) {
  return function (...moreArgs) {
    return fn.apply(thisArg, [...args, ...moreArgs]);
  };
}

function greet(greeting, name) {
  console.log(`${greeting}, ${name}! Men ${this.title}`);
}

const person = { title: "Qobiljon" };

const boundGreet = myBind(greet, person, "Salom");
boundGreet("Aziz");

// All
function myAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });

    if (promises.length === 0) {
      resolve([]);
    }
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

myAll([p1, p2, p3]).then(console.log);
