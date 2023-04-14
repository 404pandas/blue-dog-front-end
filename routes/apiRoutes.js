// FUTURE DEVELOPMENT \\

const router = require("express").Router();
const store = require("../db/store");

// GET "/api/pictures" responds with all pictures from the database
router.get("/pictures", (req, res) => {
  store
    .getPictures()
    .then((pictures) => {
      return res.json(pictures);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/pictures", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/pictures" deletes the note with an id equal to req.params.id
router.delete("/pictures/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
