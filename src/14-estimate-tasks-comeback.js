const brain = require("brain.js");

// 1. DATA
const tasks = [
  { name: "Email", category: "Communication", estimated: 30, actual: 32 },
  {
    name: "Report Writing",
    category: "Documentation",
    estimated: 60,
    actual: 55,
  },
  { name: "Code Review", category: "Development", estimated: 45, actual: 50 },
  { name: "Meeting", category: "Communication", estimated: 30, actual: 35 },
  { name: "Design Mockup", category: "Design", estimated: 90, actual: 85 },
  { name: "Testing", category: "Development", estimated: 35, actual: 40 },
  { name: "Research", category: "Analysis", estimated: 60, actual: 70 },
  { name: "Data Entry", category: "Administration", estimated: 45, actual: 50 },
  { name: "Budget Planning", category: "Finance", estimated: 50, actual: 45 },
  { name: "Client Call", category: "Communication", estimated: 20, actual: 25 },
  {
    name: "Project Planning",
    category: "Management",
    estimated: 120,
    actual: 110,
  },
  {
    name: "Team Briefing",
    category: "Communication",
    estimated: 25,
    actual: 30,
  },
  {
    name: "Software Deployment",
    category: "Development",
    estimated: 60,
    actual: 65,
  },
  { name: "Graphic Design", category: "Design", estimated: 70, actual: 75 },
  { name: "Content Writing", category: "Content", estimated: 90, actual: 85 },
  { name: "Data Analysis", category: "Analysis", estimated: 50, actual: 60 },
  { name: "Client Presentation", category: "Sales", estimated: 40, actual: 45 },
  { name: "Contract Review", category: "Legal", estimated: 30, actual: 35 },
  {
    name: "Product Testing",
    category: "Quality Assurance",
    estimated: 55,
    actual: 50,
  },
  {
    name: "Marketing Strategy",
    category: "Marketing",
    estimated: 80,
    actual: 75,
  },
  { name: "User Research", category: "Research", estimated: 45, actual: 50 },
  { name: "Financial Audit", category: "Finance", estimated: 100, actual: 95 },
  {
    name: "HR Interview",
    category: "Human Resources",
    estimated: 60,
    actual: 55,
  },
  {
    name: "Supply Chain Management",
    category: "Logistics",
    estimated: 75,
    actual: 70,
  },
  {
    name: "Website Update",
    category: "Development",
    estimated: 40,
    actual: 45,
  },
  { name: "Customer Support", category: "Support", estimated: 35, actual: 40 },
  { name: "Inventory Check", category: "Logistics", estimated: 50, actual: 55 },
  { name: "System Backup", category: "IT", estimated: 25, actual: 30 },
  { name: "Staff Training", category: "Education", estimated: 60, actual: 65 },
  {
    name: "Business Analysis",
    category: "Strategy",
    estimated: 70,
    actual: 75,
  },
  {
    name: "Quality Inspection",
    category: "Quality Assurance",
    estimated: 45,
    actual: 50,
  },
  { name: "Security Audit", category: "IT", estimated: 120, actual: 115 },
  {
    name: "Branding Discussion",
    category: "Marketing",
    estimated: 60,
    actual: 55,
  },
  { name: "Budget Review", category: "Finance", estimated: 50, actual: 60 },
  { name: "Website Design", category: "Design", estimated: 80, actual: 85 },
  {
    name: "Social Media Planning",
    category: "Marketing",
    estimated: 40,
    actual: 35,
  },
  {
    name: "Employee Onboarding",
    category: "Human Resources",
    estimated: 30,
    actual: 45,
  },
  {
    name: "Product Brainstorming",
    category: "Product Development",
    estimated: 60,
    actual: 70,
  },
  { name: "Market Analysis", category: "Research", estimated: 90, actual: 95 },
  {
    name: "Software Debugging",
    category: "Development",
    estimated: 120,
    actual: 110,
  },
  {
    name: "Corporate Training",
    category: "Education",
    estimated: 180,
    actual: 170,
  },
  { name: "Legal Consultation", category: "Legal", estimated: 70, actual: 65 },
  {
    name: "Public Relations Strategy",
    category: "Communications",
    estimated: 55,
    actual: 60,
  },
  { name: "Network Optimization", category: "IT", estimated: 90, actual: 85 },
  { name: "Sales Forecasting", category: "Sales", estimated: 60, actual: 55 },
  {
    name: "Product Photography",
    category: "Design",
    estimated: 120,
    actual: 125,
  },
  { name: "Technical Writing", category: "Content", estimated: 80, actual: 75 },
  { name: "Video Editing", category: "Media", estimated: 150, actual: 140 },
  {
    name: "Event Planning",
    category: "Administration",
    estimated: 200,
    actual: 190,
  },
  {
    name: "Facility Maintenance",
    category: "Logistics",
    estimated: 110,
    actual: 105,
  },
  {
    name: "User Interface Design",
    category: "Design",
    estimated: 75,
    actual: 80,
  },
  { name: "Client Negotiation", category: "Sales", estimated: 90, actual: 85 },
  {
    name: "Inventory Management",
    category: "Logistics",
    estimated: 100,
    actual: 95,
  },
  { name: "Risk Assessment", category: "Strategy", estimated: 65, actual: 60 },
  {
    name: "SEO Optimization",
    category: "Marketing",
    estimated: 50,
    actual: 55,
  },
  { name: "Data Migration", category: "IT", estimated: 130, actual: 120 },
  {
    name: "Crisis Management",
    category: "Management",
    estimated: 75,
    actual: 80,
  },
  { name: "Software Installation", category: "IT", estimated: 40, actual: 45 },
  {
    name: "User Testing",
    category: "Quality Assurance",
    estimated: 90,
    actual: 85,
  },
  {
    name: "Campaign Analysis",
    category: "Analytics",
    estimated: 70,
    actual: 75,
  },
];

// One-hot encoding
const uniqueNames = [...new Set(tasks.map((task) => task.name))];
const uniqueCategories = [...new Set(tasks.map((task) => task.category))];

const nameEncoding = {};
uniqueNames.forEach((name, index) => {
  const oneHot = Array(uniqueNames.length).fill(0);
  oneHot[index] = 1;
  nameEncoding[name] = oneHot;
});

const categoryEncoding = {};
uniqueCategories.forEach((category, index) => {
  const oneHot = Array(uniqueCategories.length).fill(0);
  oneHot[index] = 1;
  categoryEncoding[category] = oneHot;
});

// Normalize data
const normalize = (value, min, max) => (value - min) / (max - min);

// 2. PREPARE AND TRAIN THE MODEL
const network = new brain.NeuralNetwork({
  inputSize: uniqueNames.length + uniqueCategories.length,
  outputSize: 1,
});

const trainingData = tasks.map((task) => ({
  input: {
    ...nameEncoding[task.name],
    ...categoryEncoding[task.category],
  },
  output: {
    estimated: normalize(task.estimated, 0, 120), // Assuming max duration is 120 minutes
  },
}));

network.train(trainingData, {
  iterations: 20000,
  errorThresh: 0.005,
  logPeriod: 10,
  learningRate: 0.3,
});

// 3. TEST
const testTasks = [
  { name: "Email", category: "Communication", estimated: 25 },
  { name: "Bug Fixing", category: "Development", estimated: 40 },
  { name: "Team Meeting", category: "Communication", estimated: 35 },
];

testTasks.forEach((task) => {
  const output = network.run({
    ...nameEncoding[task.name],
    ...categoryEncoding[task.category],
  });

  console.log(
    `Task: ${task.name}, Category: ${
      task.category
    }, Model Estimate: ${Math.round(
      output.estimated * 120
    )} mins, Actual Estimate: ${task.estimated} mins`
  );
});
