const brain = require("brain.js");

function toArray(string) {
  if (string.length !== 7 * 7)
    throw new Error("string is not 7 characters long");
  return string.split("").map(toNumber);
}

function toNumber(character) {
  return character === "#" ? 0 : 1;
}

const zero = toArray(
  "#######" +
  "#     #" +
  "#     #" +
  "#     #" +
  "#     #" +
  "#     #" +
  "#######"
);

const one = toArray(
  "   #   " +
  "   #   " +
  "   #   " +
  "   #   " +
  "   #   " +
  "   #   " +
  "   #   "
);

const two = toArray(
  "#######" +
  "#     #" +
  "      #" +
  "     # " +
  "   #   " +
  " #     " +
  "#######"
);

const three = toArray(
  "#######" +
  "      #" +
  "      #" +
  " ######" +
  "      #" +
  "      #" +
  "#######"
);

const four = toArray(
  "#     #" +
  "#     #" +
  "#     #" +
  "#######" +
  "      #" +
  "      #" +
  "      #"
);

const five = toArray(
  "#######" +
  "#      " +
  "#      " +
  "#######" +
  "      #" +
  "      #" +
  "#######"
);

const six = toArray(
  "      #" +
  "    #  " +
  "  #    " +
  " ######" +
  "#     #" +
  "#     #" +
  "#######"
);

const seven = toArray(
  "#######" +
  "     # " +
  "    #  " +
  "   #   " +
  "  #    " +
  " #     " +
  "#      "
);

const eight = toArray(
  "#######" +
  "#     #" +
  "#     #" +
  "#######" +
  "#     #" +
  "#     #" +
  "#######"
);

const nine = toArray(
  "#######" +
  "#     #" +
  "#     #" +
  "###### " +
  "    #  " +
  "   #   " +
  " #     "
);

const net = new brain.NeuralNetwork();

const trainingData = [
  { input: zero, output: { zero: 1 } },
  { input: one, output: { one: 1 } },
  { input: two, output: { two: 1 } },
  { input: three, output: { three: 1 } },
  { input: four, output: { four: 1 } },
  { input: five, output: { five: 1 } },
  { input: six, output: { six: 1 } },
  { input: seven, output: { seven: 1 } },
  { input: eight, output: { eight: 1 } },
  { input: nine, output: { nine: 1 } },
];

net.train(trainingData);

// Up to now we've been using net.run, but there's a better method
// for our use case, which we see below.
//
// const result = net.run(toArray(
//     '#######' +
//     '#     #' +
//     '#     #' +
//     '#######' +
//     '#     #' +
//     '#     #' +
//     '#######'
// ));

const inputs = [
  {
    input: toArray(
      "#######" +
      "#     #" +
      "#     #" +
      "#######" +
      "#     #" +
      "#     #" +
      "#######"
    ),
    expected: "eight",
  },
  {
    input: toArray(
      "#######" +
      "#      " +
      "#      " +
      "#######" +
      "      #" +
      "      #" +
      "#######"
    ),
    expected: "five",
  },
  {
    input: toArray(
      "#######" +
      "      #" +
      "      #" +
      " ######" +
      "      #" +
      "      #" +
      "#######"
    ),
    expected: "three",
  },
  {
    input: toArray(
      "#######" +
      "#     #" +
      "#     #" +
      "##  ###" +
      "#     #" +
      "#     #" +
      "#######"
    ),
    expected: "eight",
  },
  {
    input: toArray(
      "   #   " +
      " # #   " +
      "#  #   " +
      "   #   " +
      "   #   " +
      "   #   " +
      "   #   "
    ),
    expected: "one",
  },
  {
    input: toArray(
      "   #   " +
      "   #   " +
      "   #   " +
      "   #   " +
      "   #   " +
      "   #   " +
      " ##### "
    ),
    expected: "one",
  },
  {
    input: toArray(
      "#######" +
      "#     #" +
      "#   # #" +
      "#  #  #" +
      "# #   #" +
      "#     #" +
      "#######"
    ),
    expected: "zero",
  },
  {
    input: toArray(
      "#######" +
      "#      " +
      " #     " +
      "  ###  " +
      "     # " +
      "      #" +
      "#######"
    ),
    expected: "five",
  },
];

inputs.forEach((input) => {
  // This brain.likely method is better than net.run because it
  // returns the output with the highest confidence. If you have
  // multiple outputs, it will return the one with the highest
  // confidence.
  const output = brain.likely(input.input, net);
  console.log(`expected ${input.expected}, got ${output}`);
});
