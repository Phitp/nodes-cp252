const tags = [];
let i = 0

const getTags = (req, res) => {
  tags.push(i++)
  res.json({ tags });
};

// Implement other controllers related to tags

module.exports = {
  getTags,
  // Export other tag controllers
};
