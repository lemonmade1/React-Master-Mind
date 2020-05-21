let router = require('express').Router();
let scoresCtrl = require('../controllers/scores');

// GET /api/scores
router.get('/scores', scoresCtrl.index);

// POST /api/scores
// We will already have access to the logged in student on
// the server, therefore do not use: /scores/:id/facts
// router.post('/facts', isLoggedIn, scoresCtrl.addFact);


module.exports = router;