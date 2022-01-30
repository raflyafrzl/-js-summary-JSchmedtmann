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

const [...player1] = game.players[0];
const [...player2] = game.players[1];

const [gkBayern, ...fieldPlayerBayern] = player1;
const [gkDortmund, ...fieldPlayerDortmund] = player2;
// console.log(gkBayern, fieldPlayerBayern);

const [...allPlayers] = [...player1, ...player2];
const [...player1Final] = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...player) {
  console.log(player);
  console.log(`${player.length} goals were scored`);
}

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);
