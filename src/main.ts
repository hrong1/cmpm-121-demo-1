import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "A Clicking Game";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// number data
let counter: number = 1000;
let total_increase: number = 0;

// clicking button
const buttonemoji = "💰";
const button = document.createElement("button");
button.innerHTML = buttonemoji;
button.addEventListener("click", () => {
  counter += 1;
});
app.append(button);

// counter display
const number_display = document.createElement("div");
number_display.innerHTML = `Money: ${counter}`;
app.append(number_display);

// number increase per second
const increase_number = document.createElement("div");
app.append(increase_number);

// Upgrade_A
let upgrade_cost_A = 10
let auto_increase_number_A: number = 0;
let number_items_A = 0;
const upgrade_A = document.createElement("button");
upgrade_A.addEventListener("click", () => {
  auto_increase_number_A += 0.1;
  total_increase += 0.1
  counter -= upgrade_cost_A;
  upgrade_cost_A *= 1.1;
  number_items_A += 1;
  // number fix
  upgrade_cost_A = Number(upgrade_cost_A.toFixed(2));
  total_increase = Number(total_increase.toFixed(2));
  auto_increase_number_A = Number(auto_increase_number_A.toFixed(2));
});
app.append(upgrade_A);

// Upgrade_B
let upgrade_cost_B = 100
let auto_increase_number_B: number = 0;
let number_items_B = 0;
const upgrade_B = document.createElement("button");
upgrade_B.addEventListener("click", () => {
  auto_increase_number_B += 2;
  total_increase += 2
  counter -= upgrade_cost_B;
  upgrade_cost_B *= 1.1;
  number_items_B += 1;
  //number fix
  upgrade_cost_B = Number(upgrade_cost_B.toFixed(2));
  total_increase = Number(total_increase.toFixed(2));
  auto_increase_number_B = Number(auto_increase_number_B.toFixed(2));
  
});
app.append(upgrade_B);

// Upgrade_C
let upgrade_cost_C = 1000
let auto_increase_number_C: number = 0;
let number_items_C = 0;
const upgrade_C = document.createElement("button");
upgrade_C.addEventListener("click", () => {
  auto_increase_number_C += 50;
  total_increase += 50
  counter -= upgrade_cost_C;
  upgrade_cost_C *= 1.1;
  number_items_C += 1;
  //number fix
  upgrade_cost_C = Number(upgrade_cost_C.toFixed(2));
  total_increase = Number(total_increase.toFixed(2));
  auto_increase_number_C = Number(auto_increase_number_C.toFixed(2));
});
app.append(upgrade_C);



let lastTime = performance.now();
requestAnimationFrame(function increaseCounter() {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  counter += (deltaTime / 1000) * total_increase;
  // disable update A
  if (counter < upgrade_cost_A) upgrade_A.disabled = true;
  else upgrade_A.disabled = false;
  // disable update B
  if (counter < upgrade_cost_B) upgrade_B.disabled = true;
  else upgrade_B.disabled = false;
  // disable update C
  if (counter < upgrade_cost_C) upgrade_C.disabled = true;
  else upgrade_C.disabled = false;
  // update counter
  counter = Number(counter.toFixed(2));
  number_display.innerText = `Money: ${counter}`;
  // update upgrade A
  upgrade_A.innerHTML = "0.1 units/sec" + `(Cost: ${upgrade_cost_A})` + '<br/>' + `growth rate: ${auto_increase_number_A}` + '<br/> '+ `number of item: ${number_items_A}`;
  // update upgrade B
  upgrade_B.innerHTML = "2 units/sec" + `(Cost: ${upgrade_cost_B})` + '<br/>' + `growth rate: ${auto_increase_number_B}` + '<br/> '+ `number of item: ${number_items_B}`;
  // update upgrade C
  upgrade_C.innerHTML = "50 units/sec" + `(Cost: ${upgrade_cost_C})` + '<br/>' + `growth rate: ${auto_increase_number_C}` + '<br/> '+ `number of item: ${number_items_C}`;
  // total number increase
  increase_number.innerText = `Auto Increase ${total_increase}/second`;
  // fix number
  total_increase = Number(total_increase.toFixed(2));
  lastTime = currentTime;
  requestAnimationFrame(increaseCounter);
});


