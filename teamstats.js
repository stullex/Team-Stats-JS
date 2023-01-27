const team = {
    _player: [
            { firstName: "Naruto", lastName: "Uzumaki", age: 16 },
            { firstName: "Kakashi", lastName: "Hatake", age: 30 },
            { firstName: "Sakura", lastName: "Haruno", age: 16 }
    ],
    _games: [
            { opponent: "Kisame Hoshigaki", teamPoints: 69, opponentPoints: 31 },
            { opponent: "Danso Shimura", teamPoints: 78, opponentPoints: 22 },
            { opponent: "Nagato Uzumaki", teamPoints: 51, opponentPoints: 49 }
    ],

    get players() {
        return this._player
    },
    get games() {
        return this._games
    },


    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        this.players.push(player)
    }, 

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent, 
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this.games.push(game)
    }
}

team.addGame("Gol D. Roger", 0, 1000)

team.addPlayer("Sasuke", "Uchiha", 16)



console.log(team.games)
console.log(team.players)
