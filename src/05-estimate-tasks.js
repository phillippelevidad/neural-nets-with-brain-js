const brain = require("brain.js");

const tasks = {
  "check my emails": 30,
  "team status update meeting": 40,
  "write project proposal": 50,
  "update project plan": 55,
  "lunch break": 30,
};

const trainingData = Object.keys(tasks).reduce((arr, task) => {
  const duration = tasks[task];
  arr.push({
    input: { [task]: 1 },
    output: { [duration]: 1 },
  });
  return arr;
}, []);

const network = new brain.NeuralNetwork();
network.train(trainingData);

function getEstimate(task) {
  const result = network.run({ [task]: 1 });
  const top5 = Object.entries(result)
    .map(([key, value]) => ({
      duration: Number(key),
      score: value,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return calculateWeightedAverage(top5);
}

function calculateWeightedAverage(data) {
  let weightedSum = 0;
  let totalWeight = 0;

  data.forEach((item) => {
    weightedSum += item.duration * item.score;
    totalWeight += item.score;
  });

  const avg = totalWeight > 0 ? weightedSum / totalWeight : 0;
  return Math.round(avg);
}

const tasksToEstimate = [
  "check my emails",
  // "team status update meeting",
  // "write project proposal",
  // "update project plan",
  // "lunch break",
];

tasksToEstimate.forEach((task) => {
  const estimate = getEstimate(task);
  console.log({ task, estimate });
});
