import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "A Clicking Game";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const buttonemoji = "💰";
let counter: number = 0;
const auto_increase_number: number = 1;

const button = document.createElement("button");
const number_display = document.createElement("div");
button.innerHTML = buttonemoji;
number_display.innerHTML = `Money: ${counter}`;

button.addEventListener("click", () => {
  counter += 1;
});
app.append(button);



let lastTime = performance.now();
requestAnimationFrame(function increaseCounter() {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  counter += (deltaTime / 1000) * auto_increase_number;
  number_display.innerHTML =
    `${(Math.floor(counter * 100) / 100).toString()}` + " dollars";
  lastTime = currentTime;
  requestAnimationFrame(increaseCounter);
});

app.append(number_display);