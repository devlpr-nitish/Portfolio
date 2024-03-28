import express from "express";
import path from "path"
const app = express();
const port = process.env.PORT || 3000; 



// Serve static files from the public directory
app.use(express.static('public'));

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
