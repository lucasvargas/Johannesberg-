function create(){

var players = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    team_A = [],
    team_B = [],
    len = 5,
    total = players.length;

for (var i = 0; i < len; i++) {
	pos = Math.floor((Math.random() * total));
	team_A.push(players[pos]);
	players.splice(pos, 1);
	total--;
}

team_B = players;

console.log("Team A: " + team_A)
console.log("Team B: " + team_B)

alert("Team A: " + team_A + "\nTeam B: " + team_B);

}
