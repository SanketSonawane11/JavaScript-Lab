console.log("A: script start");

setTimeout(() => {
  console.log("B: setTimeout 0");

  Promise.resolve().then(() => {
    console.log("C: microtask inside timeout");
  });
}, 0);

async function main() {
  console.log("D: async function start");

  await Promise.resolve().then(() => {
    console.log("E: promise inside await");
  });

  console.log("F: after first await");

  queueMicrotask(function recursiveMicrotask() {
    console.log("G: recursive microtask");
    queueMicrotask(() => {
      console.log("H: nested microtask");
    });
  });

  await Promise.resolve();

  console.log("I: after second await");
}

main();

Promise.resolve()
  .then(() => {
    console.log("J: first then");

    return Promise.resolve().then(() => {
      console.log("K: nested then");
    });
  })
  .then(() => {
    console.log("L: second then");
  });

console.log("M: script end");
