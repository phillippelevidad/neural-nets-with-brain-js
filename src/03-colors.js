const brain = require("brain.js");

// input: { red, green, blue }
// ouput: { light, neutral, dark }

const colors = [
  { green: 0.2, blue: 0.4 },
  { green: 0.4, blue: 0.6 },
  { red: 0.2, green: 0.8, blue: 0.8 },
  { green: 1, blue: 1 },
  { red: 0.8, green: 1, blue: 1 },
  { red: 1, green: 1, blue: 1 },
  { red: 1, green: 0.8, blue: 0.8 },
  { red: 1, green: 0.6, blue: 0.6 },
  { red: 1, green: 0.4, blue: 0.4 },
  { red: 1, green: 0.31, blue: 0.31 },
  { red: 0.8 },
  { red: 0.6, green: 0.2, blue: 0.2 },
];

const brightnesses = [
  { dark: 0.8 },
  { neutral: 0.8 },
  { light: 0.7 },
  { light: 0.8 },
  { light: 0.9 },
  { light: 1 },
  { light: 0.8 },
  { neutral: 0.7, light: 0.5 },
  { dark: 0.5, neutral: 0.5 },
  { dark: 0.6, neutral: 0.3 },
  { dark: 0.85 },
  { dark: 0.9 },
];

const trainingData = [];

for (let i = 0; i < colors.length; i++) {
  trainingData.push({
    input: colors[i],
    output: brightnesses[i],
  });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

console.log({ stats });

console.log(
  net.run({
    red: 0.9,
  })
);

/*
Output:
{
  dark: 0.9383077025413513,
  neutral: 0.019236335530877113,
  light: 0.00044138228986412287
}

This indicates that the network is 93.8% confident that the color is dark, 1.9%
confident that it is neutral, and 0.04% confident that it is light.
*/
