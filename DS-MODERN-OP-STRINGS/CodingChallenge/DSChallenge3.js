const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log(gameEvents.values());

//Number 1

const eventGame = new Set([...gameEvents.values()]);
console.log([...eventGame]);

//Number 2
gameEvents.delete(64);
console.log(gameEvents);

//Number3
console.log(
  `An Event happened, on average , every ${
    90 / [...gameEvents.keys()].length
  } minutes' `
);

for (const [key, value] of gameEvents) {
  console.log(`${key < 45 ? "First Half" : "Second half"} ${key}: ${value} `);
}
