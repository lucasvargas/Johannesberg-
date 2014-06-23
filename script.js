function create(){

var players = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var team_A = [];
var team_B = [];
var len = 5;
var total = players.length;

for (var i = 0; i < len; i++) {
	pos = Math.floor((Math.random() * total));
	team_A.push(players[pos]);
	players.splice(pos, 1);
	total = total - 1;
}

team_B = players;

console.log("Team A: " + team_A)
console.log("Team B: " + team_B)

alert("Team A: " + team_A + "\nTeam B: " + team_B);

}
