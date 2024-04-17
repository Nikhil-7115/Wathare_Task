
const Solutions = require('../models/Solutions');

// Controller to fetch all solutions
const getAllSolutions = async (req, res) => {
  try {
    const solutions = await Solutions.find();
    res.json(solutions);
  } catch (err) {
    console.error("Error fetching solutions:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getAllSolutions;
