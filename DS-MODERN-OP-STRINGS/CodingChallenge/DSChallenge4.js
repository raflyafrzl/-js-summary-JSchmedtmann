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
    console.log(
      `${s.slice(0, s.indexOf("_")).replace(" ", "")}${s[
        s.indexOf("_") + 1
      ].toUpperCase()}${s
        .slice(s.indexOf("_") + 2)
        .toLocaleLowerCase()}${"✅".repeat(test++)}`
    );
  }
});
