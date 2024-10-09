import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "A Clicking Game";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const buttonemoji = "💰";
let counter: number = 0;
let auto_increase_number: number = 1;

const button = document.createElement("button");
const number_display = document.createElement("number_display");
button.innerHTML = buttonemoji;
number_display.innerHTML = `Money: ${counter}`;

button.addEventListener("click", () => {
  counter += 1;
});
app.append(button);

function Autoclick() {
  counter += auto_increase_number;
}
setInterval(Autoclick, 1000);


let lastTime = 0;
let fps = 0;
function animate(timestamp: number) {
  const now = timestamp;
  const deltaTime = now - lastTime;
  lastTime = now;
  fps = 1000 / deltaTime;
  // update counter
  counter = Number(counter.toFixed(2));
  number_display.innerText = `Money: ${counter}`;
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

app.append(number_display);


