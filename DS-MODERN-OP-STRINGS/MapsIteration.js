const quest = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "Java"],
  [2, "C++"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Jawaban Kamu Benar"],
  [false, "Jawaban kamu salah"],
]);

//Map itu merupakan sebuah iterasi, oleh karena itu bisa dilakukan Looping nya
console.log(quest.get("question"));
for (const [key, value] of quest) {
  if (typeof key === "number") {
    console.log(`${key} : ${value}`);
  }
}

const inputUser = Number(prompt("Your Answer"));

if (inputUser === 3) {
  console.log(quest.get(true));
} else {
  console.log(quest.get(false));
}

//Convert Map to Array

console.log([...quest]);

//Method pada map
console.log([...quest.keys()]); //Menampilkan Key dari Map;

console.log([...quest.values()]); //Menampilkan Value dari Map;
