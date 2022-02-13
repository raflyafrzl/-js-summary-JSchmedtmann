document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea");
const button = document.querySelector("button");

button.textContent = "Click Here";

button.addEventListener("click", function () {
  const splitToArr = text.value.split("\n");
  console.log(splitToArr);
  let test = 1;
  for (const s of splitToArr) {
    const arr = s.trim().toLowerCase().split("_");
    console.log(
      `${arr[0]}${arr[1].replace(arr[1][0], arr[1][0].toUpperCase())} `
    );
  }
});
