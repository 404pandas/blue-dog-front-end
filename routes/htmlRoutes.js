const path = require("path");
const router = require("express").Router();

// "/back" responds with the back.html file
router.get("/back", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/.html"));
});

// "/notes" responds with the bathroom.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/bathroom.html"));
});

// "/notes" responds with the dad-bathroom.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/dad-bathroom.html"));
});

// "/notes" responds with the deck.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/deck.html"));
});

// "/notes" responds with the dining-room.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/dining-room.html"));
});

// "/notes" responds with the kitchen.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/kitchen.html"));
});

// "/notes" responds with the living-room.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/living-room.html"));
});

// "/notes" responds with the office.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/office.html"));
});

// "/notes" responds with the paths.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/paths.html"));
});

// "/notes" responds with the playroom.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/playroom.html"));
});

// "/notes" responds with the sunroom.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/sunroom.html"));
});

// All other routes respond with the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/index.html"));
});

module.exports = router;
