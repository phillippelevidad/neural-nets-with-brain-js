const brain = require("brain.js");

const sentences = [
  "The sun sets over calm seas.",
  "A cat sleeps on a cozy chair.",
  "Rain taps gently on the window.",
  "A book lies open on the desk.",
  "The garden blooms in spring.",
  "Stars twinkle in the night sky.",
  "A gentle breeze rustles the leaves.",
  "Coffee brews in the early morning.",
  "Snowflakes drift in the cold air.",
  "A train whistles in the distance.",
  "Leaves crunch underfoot in autumn.",
  "Waves crash against the shore.",
  "A fireplace crackles warmly.",
];

const net = new brain.recurrent.LSTM();

net.train(sentences, {
  iterations: 1500,
  errorThresh: 0.011,
});

inputs = [
  { original: "The sun sets over calm seas.", part: "sun sets" },
  { original: "A cat sleeps on a cozy chair.", part: "cat sleeps" },
  { original: "Rain taps gently on the window.", part: "window" },
  { original: "A book lies open on the desk.", part: "lies open" },
  { original: "The garden blooms in spring.", part: "spring" },
  { original: "Stars twinkle in the night sky.", part: "in the night" },
  { original: "A gentle breeze rustles the leaves.", part: "rustles" },
  { original: "Coffee brews in the early morning.", part: "Coffee" },
  {
    original:
      "Snowflakes drift in the cold air. Coffee brews in the early morning.",
    part: "Snowflakes in the morning",
  },
  { original: "A train whistles in the distance.", part: "distance" },
  {
    original: "Leaves crunch underfoot in autumn.",
    part: "Leaves crunch underfoot in autumn.",
  },
  {
    original: "Waves crash against the shore. A fireplace crackles warmly.",
    part: "against A fireplace",
  },
  { original: "A fireplace crackles warmly.", part: "crackles warmly" },
];

inputs.forEach((input) => {
  const output = net.run(input.part);
  console.log("Original:", input.original);
  console.log("Input:", input.part);
  console.log("Output:", output);
  console.log();
});
