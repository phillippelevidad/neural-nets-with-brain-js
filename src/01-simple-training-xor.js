const brain = require("brain.js");

const network = new brain.NeuralNetwork();

const data = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 1], output: [0] },
  { input: [1, 0], output: [1] },
];

network.train(data, {
  log: (error) => console.log(error),
  logPeriod: 100,
});

const testInputs = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

testInputs.forEach((input) => {
  console.log(`Input: ${input} Output: ${network.run(input)}`);
});
