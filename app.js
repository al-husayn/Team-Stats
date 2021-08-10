const team = {
  _players: [
    { firstName: "Steven", lastName: "Jones", age: 52 },
    { firstName: "Robert", lastName: "Wagner", age: 65 },
    { firstName: "Sebastian", lastName: "Miller", age: 15 },
  ],
  _games: [
    { opponent: "Broncos", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Packers", teamPoints: 35, opponentPoints: 31 },
    { opponent: "Bears", teamPoints: 15, opponentPoints: 7 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayers(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },

  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName,
      points: points,
      opponentPoints: oppPoints,
    };
    this.games.push(game);
  },
};

team.addPlayers("Steph", "Curry", 28);
team.addPlayers("Von", "Miller", 30);
team.addPlayers("Drew", "Lock", 24);

console.log(team.players);

team.addGame("Seahawks", 45, 10);
team.addGame("Chiefs", 10, 45);
team.addGame("Cowboys", 14, 28);

console.log(team.games);
