const brain = require("brain.js");

const trainingData = [
  { input: "I am super happy", output: "happy" },
  { input: "Feeling joyous and delighted today", output: "happy" },
  { input: "What a wonderful and uplifting day!", output: "happy" },
  { input: "My heart is filled with happiness", output: "happy" },
  { input: "Smiling from ear to ear with glee", output: "happy" },
  { input: "Today has been an absolutely fantastic day", output: "happy" },
  { input: "Feeling on top of the world with joy", output: "happy" },
  { input: "I'm so glad and content right now", output: "happy" },
  { input: "This is the happiest I've felt in a while", output: "happy" },
  { input: "Experiencing such a blissful moment", output: "happy" },
  { input: "I'm feeling really down today", output: "sad" },
  { input: "Nothing seems to go right for me", output: "sad" },
  { input: "I've been feeling quite sad and gloomy", output: "sad" },
  { input: "It's been a tough and challenging day", output: "sad" },
  { input: "Feeling overwhelmed and stressed out", output: "sad" },
  { input: "I'm just not in a good mood right now", output: "sad" },
  { input: "Today has been really disappointing", output: "sad" },
  { input: "Feeling lonely and a bit isolated", output: "sad" },
  { input: "There's a sense of despair hanging over me", output: "sad" },
  { input: "I'm struggling to find any positivity today", output: "sad" },
  { input: "Can't wait for the weekend, so excited!", output: "excited" },
  { input: "Feeling thrilled about the upcoming event", output: "excited" },
  { input: "I'm buzzing with excitement for the news", output: "excited" },
  { input: "Anticipating great things, feeling so excited", output: "excited" },
  { input: "Eagerly looking forward to the adventure", output: "excited" },
  {
    input: "I'm electrified with excitement about the trip",
    output: "excited",
  },
  { input: "So pumped up for the concert tonight!", output: "excited" },
  {
    input: "The thought of the holiday is making me excited",
    output: "excited",
  },
  { input: "I'm on the edge of my seat with excitement", output: "excited" },
  {
    input: "This opportunity has me filled with excitement",
    output: "excited",
  },
  { input: "Oh great, another Monday", output: "sarcastic" },
  { input: "Just what I needed, more work", output: "sarcastic" },
  {
    input: "Wow, this is exactly how I wanted to spend my day",
    output: "sarcastic",
  },
  { input: "I'm so thrilled to be stuck in traffic", output: "sarcastic" },
  { input: "This is just my luck, isn't it?", output: "sarcastic" },
  { input: "Oh sure, because I love waiting in lines", output: "sarcastic" },
  {
    input: "Fantastic, another meeting that could've been an email",
    output: "sarcastic",
  },
  { input: "Yay, more chores to do at home", output: "sarcastic" },
  { input: "Thrilled to be working overtime again", output: "sarcastic" },
  {
    input: "Can't wait to hear all about your vacation... again",
    output: "sarcastic",
  },
];

const net = new brain.recurrent.LSTM();

console.time("training time");
net.train(trainingData, {
  iterations: 50,
  errorThresh: 0.011,
});
console.timeEnd("training time");

console.log("I am unhappy:", net.run("I am unhappy"));
console.log("I am happy:", net.run("I am happy"));
