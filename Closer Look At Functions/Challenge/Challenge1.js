const getButton = document.querySelector("button");

const poll = {
  question: "What is your favourite programming language",
  options: ["0:Javascript", "1:Python", "2:Rust", "3:C++"],
  answer: new Array(4).fill(0),

  registerNewAnswer() {
    let test = Number(prompt(`${this.question} \n${this.options.join("\n")}`));
    if (Number(test) <= 3 && Number(test) >= 0) {
      this.answer[test] += 1;
      let pilihan = prompt("Pilihan anda");
      this.displayResults(pilihan);
    } else {
      alert("Invalid choice");
    }
  },
  displayResults(choice) {
    if (choice.toLowerCase() === "string") {
      console.log(this.answer.join(", "));
    } else if (choice.toLowerCase() === "array") {
      console.log(this.answer);
    } else {
      alert("Invalid Choice");
    }
  },
};

getButton.addEventListener("click", poll.registerNewAnswer.bind(poll));

const poll2 = {
  answer: [5, 2, 3],
};

const get = poll.displayResults.bind(poll2);

get("string");
