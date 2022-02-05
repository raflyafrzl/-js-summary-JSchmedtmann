const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Coding Challenge1
// const [player1, player2] = game.players;
// const [gkBayern, ...fieldPlayerBayern] = player1;
// const [gkDortmund, ...fieldPlayerDortmund] = player2;
// // console.log(gkBayern, fieldPlayerBayern);

// const [...allPlayers] = [...player1, ...player2];
// const [...player1Final] = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(player1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// function printGoals(...player) {
//   console.log(player);
//   console.log(`${player.length} goals were scored`);
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

//Coding Challenge 2

//Answer number 1
for (const [goal, playerGoal] of game.scored.entries()) {
  console.log(`Goal ${goal + 1} : ${playerGoal}`);
}

//Answer number 2
let tempAverage = [0, 0];

for (const [, value] of Object.entries(game.odds)) {
  tempAverage = [tempAverage[0] + 1, tempAverage[1] + value];
}

console.log(tempAverage[1] / tempAverage[0]);

//Answer number 3

for (const key of Object.keys(game.odds)) {
  const check = game[key] ?? "Draw";
  console.log(`Odd Of: ${check} : ${game.odds[key]}`);
}

//Bonus
const scores = {};

for (const player of game.scored) {
  if (scores[player]) {
    scores[player] += 1;
  } else {
    scores[player] = 1;
  }
}
console.log(scores);
