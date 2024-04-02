const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// API endpoint to fetch data with filtering options
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://api.publicapis.org/entries');
    const data = response.data;

    let filteredData = data.entries;

    // Filter by category
    const category = req.query.category;
    if (category) {
      filteredData = filteredData.filter(entry => entry.Category.toLowerCase() === category.toLowerCase());
    }

    // Limiting the number of results
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;
    filteredData = filteredData.slice(0, limit);

    res.json({ success: true, count: filteredData.length, entries: filteredData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ success: false, error: 'Error fetching data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
