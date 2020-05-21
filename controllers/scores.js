
const dummyHighScores = [
  { number: 1, initials: "TDL", guesses: 1, time: "00:00" },
  { number: 2, initials: "ALL", guesses: 1, time: "00:00" },
  { number: 3, initials: "SSS", guesses: 1, time: "00:00" },
  { number: 4, initials: "TYL", guesses: 1, time: "00:00" },
]

function index(req, res) {
  res.send(dummyHighScores)
}

function create(req, res) {
  // TODO: Code up high score create action
}

module.exports = {
  index,
  create
}