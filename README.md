# Create API Endpoints for Data Retrieval

Objective: Develop API endpoints to fetch data from a public API with filtering
options.

● Requirements:
○ Utilize Node.js and Express.js to create API routes.
○ Fetch data from the provided public API
○ Implement filtering options for data retrieval based on categories and
result limits.

# Get data

GET http://localhost:5000/api/data

# To filter by category:

GET http://localhost:5000/api/data?category=Animals

# To limit the number of results:

GET http://localhost:5000/api/data?limit=10

Replace "10" with the desired limit.

# Combining filtering options:

GET http://localhost:5000/api/data?category=Animals&limit=10
