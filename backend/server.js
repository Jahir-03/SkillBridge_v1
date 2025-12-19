// 1. Import the tools we just installed
const express = require('express');
const cors = require('cors');

// 2. Create the app "server" object
const app = express();

// 3. Define the PORT (The door number where the server listens)
const PORT = 5000;

// 4. Enable CORS (Allows the Frontend at port 3000 to knock on this door)
app.use(cors());

// 5. Mock Data (This simulates a Database)
// Later, we will replace this with a real Database connection.
const courses = [
    { 
        id: 1, 
        title: "DevOps for Beginners", 
        instructor: "JVL CODE", 
        videoUrl: "https://www.youtube.com/embed/8t2GknB7Rio?si=-SPbOF217ZUBKutK" 
    },
    { 
        id: 2, 
        title: "Cloud Computing Tamil", 
        instructor: "DATA ENGINEERING", 
        videoUrl: "https://www.youtube.com/embed/IodkW9XTch4?si=-RaHN9BjIsqf0mSy" 
    },
];

// 6. Create an API Route (The Endpoint)
// When someone visits 'http://localhost:5000/api/courses', run this function:
app.get('/api/courses', (req, res) => {
    console.log("Someone requested the course list!"); // Logs to your terminal
    res.json(courses); // Sends the 'courses' data back as JSON
});

// 7. Start the Server
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});