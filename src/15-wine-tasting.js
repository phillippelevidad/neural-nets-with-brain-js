// https://thecodebarbarian.com/building-a-wine-tasting-neural-network-with-node-js.html

// training data format after parsing 15-wine-tasting.csv
// {
//   input: {
//     "fixed acidity": 0.7,
//     "volatile acidity": 0.027000000000000003,
//     "citric acid": 0.036,
//     "residual sugar": 0.0207,
//     chlorides: 0.0045,
//     "free sulfur dioxide": 0.045,
//     "total sulfur dioxide": 0.17,
//     density: 0.1001,
//     pH: 0.3,
//     sulphates: 0.045,
//     alcohol: 0.08800000000000001,
//   },
//   output: { quality: 0.6 },
// }

const brain = require("brain.js");
const fs = require("fs");
const _ = require("lodash");

const TRAINING_PARTITION_SIZE = 1000;
const TEST_PARTITION_SIZE = 50;

const DATA_FILE = "src/15-wine-tasting.csv";
const NET_FILE = "src/15-wine-tasting.json";

function main() {
  const data = loadData();
  const netExists = fs.existsSync(NET_FILE);
  const net = netExists ? loadNetwork() : trainNetwork(data);
  runTests(net, data);
}

function loadData() {
  const lines = fs.readFileSync(DATA_FILE, "utf-8").split("\n");
  const headers = lines[0].split(";").map((h) => h.replace(/"/g, ""));
  const entries = lines.slice(1).map((line) =>
    line.split(";").reduce((obj, value, i) => {
      // Ensure that numberic values are between 0 and 1
      if (headers[i].includes("sulfur") || headers[i].includes("sugar")) {
        obj[headers[i]] = parseFloat(value) / 1000;
      } else if (headers[i].includes("alcohol")) {
        obj[headers[i]] = parseFloat(value) / 100;
      } else {
        obj[headers[i]] = parseFloat(value) / 10;
      }
      return obj;
    }, {})
  );

  return {
    headers,
    entries,
  };
}

function trainNetwork(data) {
  console.log("Training network...");

  const trainingData = data.entries
    .slice(0, TRAINING_PARTITION_SIZE)
    .map((d) => ({
      input: _.omit(d, "quality"),
      output: _.pick(d, "quality"),
    }));

  const net = new brain.NeuralNetwork();
  net.train(trainingData);

  // Serialize the neural network as JSON to a file
  fs.writeFileSync(NET_FILE, JSON.stringify(net.toJSON(), null, 2));

  return net;
}

function loadNetwork() {
  console.log("Loading network...");

  const net = new brain.NeuralNetwork();
  net.fromJSON(JSON.parse(fs.readFileSync(NET_FILE, "utf-8")));

  return net;
}

function runTests(net, data) {
  console.log("Running tests...");

  const testData = data.entries.slice(
    TRAINING_PARTITION_SIZE,
    TRAINING_PARTITION_SIZE + TEST_PARTITION_SIZE
  );

  const errorMargin = testData.reduce((sum, d) => {
    const { quality } = net.run(_.omit(d, "quality"));
    sum += Math.abs(quality - d.quality);
    return sum;
  }, 0);

  const averageError = errorMargin / testData.length;
  console.log(`Average error: ${averageError}`);
}

main();
