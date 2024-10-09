
import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "A Clicking Game";
document.title = gameName;

const buttonemoji = "💡";
let counter: number = 0;

const button = document.createElement("button");
const number_display = document.createElement("number_display");
button.innerHTML = buttonemoji;
number_display.innerText = `Number of Item: ${counter}`;

button.addEventListener("click", () => {
  counter += 1;
  console.log(counter);
  number_display.innerText = `Number of Item: ${counter}`;
});

function Autoclick() {
  counter += 1;
  number_display.innerText = `Number of Item: ${counter}`;
}
setInterval(Autoclick, 1000);

app.append(button);
app.append(number_display);

// const header = document.createElement("h1");
// header.innerHTML = gameName;
// app.append(header);
