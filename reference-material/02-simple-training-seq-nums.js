const brain = require("brain.js");

// Create a new neural network instance
// Specifying one hidden layer with 3 neurons
// More layers/neurons can model more complex relationships, but may lead to overfitting
const network = new brain.NeuralNetwork({ hiddenLayers: [3] });

// Generate a sequence of numbers from 1 to 500
// This will be used for both input and output data
const sequence = Array.from({ length: 500 }, (_, i) => i + 1);

// Normalize function to scale input/output values to a range between 0 and 1
// Neural networks generally perform better with normalized data
function normalize(num) {
  return num / sequence.length;
}

// Denormalize function to convert normalized data back to its original scale
// Useful for interpreting the network's output
function denormalize(num) {
  return num * sequence.length;
}

// Prepare training data
// Map each number in the sequence to an object with normalized input and output
// This is a supervised learning scenario where each input has a known output
const data = sequence.map((n) => ({
  input: [normalize(n)],
  output: [normalize(n)],
}));

// Train the network on the prepared data
// iterations: number of times to run through the training data
// errorThresh: target error threshold to stop training
// Adjust these parameters to improve learning and prevent overfitting
network.train(data, {
  iterations: 20000,
  errorThresh: 0.005,
});

// Testing the network
// Using numbers divisible by 7 as test cases
// Demonstrates how the network generalizes from training data
const testInputs = sequence.filter((n) => n % 7 === 0);
testInputs.forEach((input) => {
  // Normalize the input before feeding it to the network
  const normalizedInput = normalize(input);
  // Run the normalized input through the network to get the output
  const output = network.run([normalizedInput]);
  // Denormalize the output for human-readable form
  const denormalizedOutput = denormalize(output[0]);
  console.log(`Input: ${input}, Output: ${denormalizedOutput}`);
});

/*
This was a failed attempt.

I expected the network to learn the pattern of the sequence and be able to
return the same number as the output for each input. However, the network
seems to have learned a different pattern. The results were:

Input: 7, Output: 147.7988213300705
Input: 14, Output: 153.04143726825714
Input: 21, Output: 158.4319919347763
Input: 28, Output: 163.9665812253952
Input: 35, Output: 169.64051127433777
Input: 42, Output: 175.44816434383392
Input: 49, Output: 181.38302862644196
... list continues

This discrepancy can be attributed to several factors:

1. Network Complexity: The network's architecture, with a single hidden layer
and three neurons, might be too simplistic to accurately model the identity
function represented by the training data. A more complex model or a different
type of network might be required to capture the linear relationship accurately.

2. Data Representation: The range and representation of the data could also impact
the network's performance. Neural networks often require a large and diverse
set of data to learn effectively, and the linear nature of the provided data
(sequential numbers) might not be varied enough to facilitate effective learning.

3. Training Process: The training parameters such as the number of iterations,
learning rate, and error threshold play a crucial role in how well the network
learns. In this case, the chosen parameters might not be optimal, leading to
either insufficient training or the inability of the network to converge on
the correct output.

4. Normalization Strategy: While normalization is crucial for neural network
performance, the method of scaling inputs and outputs to the range [0, 1] might
introduce non-linearity, making it harder for the network to learn the direct
mapping from input to output.
*/

// https://github.com/BrainJS/brain.js/blob/9595fe1d0069939ba271b25c1e7db785edd11936/src/neural-network.js#L233
// https://github.com/BrainJS/brain.js#options
