const brain = require("brain.js");

// Count to 5
// 1-5, 5-1

const trainingData = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

// The net should correctly guess the next number in the series
console.log(Math.round(net.run([1, 2, 3, 4])));
console.log(Math.round(net.run([5, 4, 3, 2])));

// But it makes mistakes for these cases
// Maybe it's because of the short training data
console.log(Math.round(net.run([2, 3])));
console.log(Math.round(net.run([3, 2])));
