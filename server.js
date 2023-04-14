// NOTES TO STUDENTS \\

// Node.js & NPM  are covered in module 9!
// Express is covered in module 11!
// For this project I used NoSQL for my database
// NoSQL is covered in module 18!

// FUTURE DEVELOPMENT \\
// Progressive Web App to be available offline
// PWAs are covered in module 19!

const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const api = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("client"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/index.html"))
);

// GET Route for feedback page
app.get("/feedback", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/pages/feedback.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
