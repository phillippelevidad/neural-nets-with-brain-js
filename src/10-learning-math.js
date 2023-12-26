const brain = require("brain.js");

const trainingData = [];

for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    const sum = i + j;
    trainingData.push(`${i}+${j}=${sum}`);
  }
}

// const trainingData = [
//   '0+0=0',
//   '0+1=1',
//   '0+2=2',
//   '0+3=3',
//   '0+4=4',
//   '0+5=5',
//   ...
// ];

// What happens under the hood is that the input map will be like the following,
// which is just a list of all possible individual characters in the training data.
// Note, the number 10 will exist in the training data, when we do '5+5=10', but
// it is ultimately composed of the individual characters '1' and '0', which are
// already in the input map.
//
// const inputMap = ['0', '+', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// inputMap.length === inputSize
//
// For the training data point '0+0=0', the input will essentially be the following.
// Note how each line of the array lights up a single character in the input map.
// [1,0,0,0,0,0,0,0,0,0,0,0]; // 0
// [0,1,0,0,0,0,0,0,0,0,0,0]; // +
// [1,0,0,0,0,0,0,0,0,0,0,0]; // 0
// [0,0,1,0,0,0,0,0,0,0,0,0]; // =
// [1,0,0,0,0,0,0,0,0,0,0,0]; // 0

const net = new brain.recurrent.LSTM({
  hiddenLayers: [20],
});

net.train(trainingData, { errorThresh: 0.025 });

const inputs = ["0+0=", "0+3=", "1+2=", "2+4=", "3+5=", "5+5=", "4+5+1="];
inputs.forEach((input) => {
  const output = net.run(input);
  console.log(`${input}${output}`);
});

/*
0+0=0
0+3=3
1+2=3
2+4=6
3+5=8
5+5=10
4+5+1=
*/
