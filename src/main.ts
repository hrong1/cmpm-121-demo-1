import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "A Clicking Game";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const buttonemoji = "💰";
let counter: number = 0;
let auto_increase_number: number = 0;
let upgrade_cost:number = 10;

const button = document.createElement("button");
const number_display = document.createElement("div");
const increase_number = document.createElement("div");
const upgrade = document.createElement("button");
button.innerHTML = buttonemoji;
number_display.innerHTML = `Money: ${counter}`;

button.addEventListener("click", () => {
  counter += 1;
});
app.append(button);

upgrade.addEventListener("click", () => {
  auto_increase_number += 1;
  counter -= upgrade_cost
  upgrade_cost *= 1.1;
});
app.append(button);


let lastTime = performance.now();
requestAnimationFrame(function increaseCounter() {
  if (counter < upgrade_cost) upgrade.disabled = true;
  else upgrade.disabled = false;
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  counter += (deltaTime / 1000) * auto_increase_number;
  number_display.innerHTML =
    `${(Math.floor(counter * 100) / 100).toString()}` + " dollars";
  upgrade_cost = Number(upgrade_cost.toFixed(2));
  upgrade.innerHTML = "Upgrade" + `(Cost: ${upgrade_cost})`;
  increase_number.innerText = `Auto Increase ${auto_increase_number} per second`
  lastTime = currentTime;
  requestAnimationFrame(increaseCounter);
});

app.append(number_display);
app.append(increase_number);
app.append(upgrade);
