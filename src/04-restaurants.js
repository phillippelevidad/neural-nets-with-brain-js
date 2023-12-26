const brain = require("brain.js");

const restaurants = {
  "Brilliant Yellow Corral": "Monday",
  "Penny's": "Tuesday",
  "Right Coast Wings": "Wednesday",
  "The Delusion Last Railway Car": "Thursday",
  "Fun Day Inn": "Friday",
  JHOP: "Saturday",
  Owls: "Sunday",
};

const data = Object.keys(restaurants).reduce((arr, restaurant) => {
  const dayOfWeek = restaurants[restaurant];
  arr.push({
    input: { [dayOfWeek]: 1 },
    output: { [restaurant]: 1 },
  });
  return arr;
}, []);

const network = new brain.NeuralNetwork({ hiddenLayers: [3] });
network.train(data);

function getRestaurantByDay(dayOfWeek) {
  const result = network.run({ [dayOfWeek]: 1 });
  let highestScore = 0;
  let highestRestaurant = null;
  for (let restaurant in result) {
    const score = result[restaurant];
    if (score > highestScore) {
      highestScore = score;
      highestRestaurant = restaurant;
    }
  }
  return highestRestaurant;
}

const inputs = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

inputs.forEach((dayOfWeek) => {
  const restaurant = getRestaurantByDay(dayOfWeek);
  console.log({ dayOfWeek, restaurant });
});
