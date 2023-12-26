const brain = require("brain.js");

const rawData = [
  {
    date: "2018-11-02",
    open: 141.0716,
    high: 141.1014,
    low: 138.7762,
    close: 139.7898,
    volume: 7673303,
    unadjustedVolume: 7673303,
    change: -0.139114,
    changePercent: -0.099,
    vwap: 139.5278,
    label: "Nov 2",
    changeOverTime: 0,
  },
  {
    date: "2018-11-05",
    open: 140.1078,
    high: 141.8367,
    low: 138.1204,
    close: 141.3002,
    volume: 5601398,
    unadjustedVolume: 5601398,
    change: 1.5104,
    changePercent: 1.08,
    vwap: 141.2547,
    label: "Nov 5",
    changeOverTime: 0.010804794055073943,
  },
  {
    date: "2018-11-06",
    open: 140.6344,
    high: 141.9262,
    low: 140.1674,
    close: 141.6678,
    volume: 5798915,
    unadjustedVolume: 5798915,
    change: 0.367659,
    changePercent: 0.26,
    vwap: 141.4935,
    label: "Nov 6",
    changeOverTime: 0.013434456591253337,
  },
  {
    date: "2018-11-07",
    open: 142.1945,
    high: 143.9567,
    low: 142.0653,
    close: 143.834,
    volume: 7173590,
    unadjustedVolume: 7173590,
    change: 2.1662,
    changePercent: 1.529,
    vwap: 143.4709,
    label: "Nov 7",
    changeOverTime: 0.0289305800566278,
  },
  {
    date: "2018-11-08",
    open: 143.3968,
    high: 144.8695,
    low: 143.0888,
    close: 144.3805,
    volume: 5497130,
    unadjustedVolume: 5497130,
    change: 0.54652,
    changePercent: 0.38,
    vwap: 144.2387,
    label: "Nov 8",
    changeOverTime: 0.03284002123187813,
  },
  {
    date: "2018-11-09",
    open: 144.1222,
    high: 144.8178,
    low: 143.4664,
    close: 144.4203,
    volume: 5343206,
    unadjustedVolume: 5343206,
    change: 0.039746,
    changePercent: 0.028,
    vwap: 144.4139,
    label: "Nov 9",
    changeOverTime: 0.03312473442268308,
  },
  {
    date: "2018-11-12",
    open: 144.0725,
    high: 145.3146,
    low: 143.8141,
    close: 144.6985,
    volume: 7013577,
    unadjustedVolume: 7013577,
    change: 0.278229,
    changePercent: 0.193,
    vwap: 144.6873,
    label: "Nov 12",
    changeOverTime: 0.03511486531921486,
  },
  {
    date: "2018-11-13",
    open: 145.2649,
    high: 145.8214,
    low: 142.5124,
    close: 143.7645,
    volume: 7432438,
    unadjustedVolume: 7432438,
    change: -0.934052,
    changePercent: -0.646,
    vwap: 143.9306,
    label: "Nov 13",
    changeOverTime: 0.028433405012382763,
  },
  {
    date: "2018-11-14",
    open: 144.1023,
    high: 144.3905,
    low: 142.6516,
    close: 143.3372,
    volume: 6433077,
    unadjustedVolume: 6433077,
    change: -0.427279,
    changePercent: -0.297,
    vwap: 143.4752,
    label: "Nov 14",
    changeOverTime: 0.025376672689995848,
  },
  {
    date: "2018-11-15",
    open: 142.5025,
    high: 143.5955,
    low: 141.5784,
    close: 143.5856,
    volume: 6658019,
    unadjustedVolume: 6658019,
    change: 0.248418,
    changePercent: 0.173,
    vwap: 142.7533,
    label: "Nov 15",
    changeOverTime: 0.027153626373311823,
  },
  {
    date: "2018-11-16",
    open: 143.7943,
    high: 145.8114,
    low: 143.6353,
    close: 145.0662,
    volume: 8494311,
    unadjustedVolume: 8494311,
    change: 1.4806,
    changePercent: 1.031,
    vwap: 144.8256,
    label: "Nov 16",
    changeOverTime: 0.03774524321517017,
  },
  {
    date: "2018-11-19",
    open: 145.5034,
    high: 147.5007,
    low: 145.4438,
    close: 146.7952,
    volume: 8714603,
    unadjustedVolume: 8714603,
    change: 1.729,
    changePercent: 1.192,
    vwap: 146.6115,
    label: "Nov 19",
    changeOverTime: 0.050113813740344286,
  },
  {
    date: "2018-11-20",
    open: 146.5666,
    high: 147.8087,
    low: 145.4239,
    close: 145.5233,
    volume: 8937990,
    unadjustedVolume: 8937990,
    change: -1.2719,
    changePercent: -0.866,
    vwap: 146.2531,
    label: "Nov 20",
    changeOverTime: 0.04101515275077289,
  },
  {
    date: "2018-11-21",
    open: 145.3047,
    high: 145.3047,
    low: 139.8891,
    close: 141.0915,
    volume: 10275810,
    unadjustedVolume: 10275810,
    change: -4.4318,
    changePercent: -3.045,
    vwap: 141.4162,
    label: "Nov 21",
    changeOverTime: 0.009311838202787201,
  },
  {
    date: "2018-11-23",
    open: 140.9524,
    high: 141.8268,
    low: 140.704,
    close: 141.33,
    volume: 3404882,
    unadjustedVolume: 3404882,
    change: 0.238482,
    changePercent: 0.169,
    vwap: 141.3418,
    label: "Nov 23",
    changeOverTime: 0.01101797126828995,
  },
  {
    date: "2018-11-26",
    open: 142,
    high: 142.05,
    low: 140.715,
    close: 141.37,
    volume: 7590941,
    unadjustedVolume: 7590941,
    change: 0.040031,
    changePercent: 0.028,
    vwap: 141.16,
    label: "Nov 26",
    changeOverTime: 0.01130411517864673,
  },
  {
    date: "2018-11-27",
    open: 140.57,
    high: 143.35,
    low: 139.66,
    close: 143.22,
    volume: 5962112,
    unadjustedVolume: 5962112,
    change: 1.85,
    changePercent: 1.309,
    vwap: 141.5703,
    label: "Nov 27",
    changeOverTime: 0.02453827103265034,
  },
  {
    date: "2018-11-28",
    open: 143.83,
    high: 146.56,
    low: 143.36,
    close: 146.44,
    volume: 8411383,
    unadjustedVolume: 8411383,
    change: 3.22,
    changePercent: 2.248,
    vwap: 145.5168,
    label: "Nov 28",
    changeOverTime: 0.04757285581637561,
  },
  {
    date: "2018-11-29",
    open: 145.62,
    high: 147.2,
    low: 144.84,
    close: 145.85,
    volume: 6900046,
    unadjustedVolume: 6900046,
    change: -0.59,
    changePercent: -0.403,
    vwap: 146.1078,
    label: "Nov 29",
    changeOverTime: 0.04335223313861226,
  },
  {
    date: "2018-11-30",
    open: 145.34,
    high: 147,
    low: 145.1,
    close: 146.9,
    volume: 12517550,
    unadjustedVolume: 12517550,
    change: 1.05,
    changePercent: 0.72,
    vwap: 146.2548,
    label: "Nov 30",
    changeOverTime: 0.05086351078547928,
  },
];

const relevantData = rawData.map((data) => {
  const { open, high, low, close } = data;
  return { open, high, low, close };
});

const hiLo = relevantData.reduce(
  (hiLo, data) => {
    const values = [data.open, data.high, data.low, data.close];
    hiLo.high = Math.max(hiLo.high, ...values);
    hiLo.low = Math.min(hiLo.low, ...values);
    return hiLo;
  },
  { high: Number.MIN_VALUE, low: Number.MAX_VALUE }
);

function scaleDown(entry) {
  return {
    open: scaleDownValue(entry.open),
    high: scaleDownValue(entry.high),
    low: scaleDownValue(entry.low),
    close: scaleDownValue(entry.close),
  };
}

/**
 * Function: scaleDownValue
 *
 * This function applies min-max normalization to scale a given value.
 * Min-max normalization is a scaling technique that transforms features to a
 * range between 0 and 1. The formula used is:
 *
 * normalized_value = (value - min_value) / (max_value - min_value)
 *
 * where min_value and max_value are the minimum and maximum values in the dataset,
 * respectively.
 *
 * This method is chosen for its simplicity and effectiveness in maintaining the
 * proportional relationships in the original data. It is particularly useful when
 * all features share a common scale, as in this financial data context, where open,
 * high, low, and close values are all price values. However, it is sensitive to
 * outliers as they can skew the min and max values.
 *
 * Other normalization methods, like z-score normalization, could be considered
 * if the dataset has features on different scales or is heavily affected by
 * outliers.
 */
function scaleDownValue(value) {
  return (value - hiLo.low) / (hiLo.high - hiLo.low);
}

function scaleUp(entry) {
  return {
    open: scaleUpValue(entry.open),
    high: scaleUpValue(entry.high),
    low: scaleUpValue(entry.low),
    close: scaleUpValue(entry.close),
  };
}

function scaleUpValue(value) {
  return value * (hiLo.high - hiLo.low) + hiLo.low;
}

const scaledDownData = relevantData.map(scaleDown);

/**
 * The training data is prepared as an array of arrays, with each sub-array
 * containing 5 elements, representing sequential data points. This structure is
 * specifically chosen for training the LSTM (Long Short-Term Memory) network,
 * a type of recurrent neural network (RNN) that is particularly adept at learning
 * from sequences or time-series data.
 *
 * LSTM networks, by design, benefit from understanding the temporal relationships
 * in data. By providing the data in sequences, the network can better learn
 * patterns over time, such as trends and cycles, which are common in financial
 * data like stock prices.
 *
 * Feeding the entire array of data at once would not provide the LSTM with the
 * necessary structure to understand the temporal sequence of events. Instead,
 * breaking the data into smaller sequential chunks allows the LSTM to capture the
 * temporal dynamics effectively. Each chunk of 5 elements represents a discrete
 * sequence to learn from, providing the network with a manageable context window
 * to understand and predict temporal patterns.
 *
 * This approach is particularly beneficial when dealing with time-series data
 * where the relationship between consecutive data points is important for making
 * accurate predictions.
 *
 * -----
 *
 * The choice of chunk size (also known as the sequence length or window size)
 * when training LSTM networks, especially with large datasets, is a critical
 * decision that affects both the performance and the efficiency of the model.
 *
 * The size of your chunks should be large enough to capture the relevant temporal
 * dependencies in your data. If your data has long-term dependencies (e.g.,
 * seasonal trends in financial data), you might need longer sequences to capture
 * these patterns. However, if the dependencies are short-term (e.g., daily
 * fluctuations), shorter sequences might suffice.
 */
const trainingData = [
  scaledDownData.slice(0, 5),
  scaledDownData.slice(5, 10),
  scaledDownData.slice(10, 15),
  scaledDownData.slice(15, 20),
];

/**
 * LSTM Network Configuration:
 *
 * inputSize: 4
 * This parameter specifies the number of features in the input data. Since each
 * data point in your dataset consists of 4 features ('open', 'high', 'low',
 * 'close'), the inputSize is set to 4. This ensures that the network can process
 * each of these features at every timestep of the input sequence.
 *
 * hiddenLayers: [8, 8]
 * This array defines the architecture of the hidden layers in the LSTM network.
 * Each number in the array represents a layer, and its value indicates the number
 * of neurons (or units) in that layer. Here, you have two hidden layers, each
 * with 8 neurons. The number of neurons and layers are hyperparameters that can be
 * tuned. In general, more neurons and layers can increase the network's capacity
 * to learn complex patterns, but also increase the risk of overfitting and
 * computational demand. The choice of [8, 8] is a starting point and can be
 * adjusted based on the model's performance and training efficiency.
 *
 * outputSize: 4
 * Similar to inputSize, outputSize defines the dimensionality of the output. In
 * this case, the network is expected to predict 4 values ('open', 'high', 'low',
 * 'close') for each timestep in the output sequence. Therefore, the outputSize
 * is set to 4, matching the structure of your target output data.
 *
 * These parameters are essential in designing an LSTM network that aligns with
 * the specific structure and needs of your dataset. They should be carefully
 * selected and, if necessary, adjusted through experimentation and validation
 * against a holdout dataset to optimize the network's performance.
 */
const net = new brain.recurrent.LSTMTimeStep({
  inputSize: 4,
  hiddenLayers: [8, 8],
  outputSize: 4,
});

/**
 * Training Configuration:
 *
 * learningRate: 0.005
 * This is a hyperparameter that influences the rate at which the network
 * updates its weights during training. A smaller learning rate means the
 * network adjusts its weights more gradually, improving training accuracy
 * but potentially increasing convergence time. The value 0.005 balances
 * convergence speed with learning stability.
 *
 * errorThresh: 0.02
 * This sets the target error threshold for training. Training continues
 * until the model's error rate on the training data falls below this
 * threshold or until other stopping criteria are met. A lower threshold
 * indicates training for higher accuracy, but increases overfitting risk.
 * The value of 0.02 balances accuracy with overfitting risk.
 *
 * These parameters are adjustable, tune them based on dataset specifics
 * and the desired model accuracy.
 */
net.train(trainingData, {
  learningRate: 0.005,
  errorThresh: 0.02,
  // log: (stats) => console.log(stats)
});

console.log(scaleUp(net.run(trainingData[0])));
/*
{
  open: 144.8610936082244,
  high: 146.22127137606142,
  low: 144.09271742311714,
  close: 145.76413987604377
}
*/
