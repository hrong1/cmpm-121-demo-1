import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "💸Earn Money💸";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// number data
let counter: number = 0;
let total_increase: number = 0;
const price_rate = 1.15;

// clicking button
const buttonemoji = "💰";
const button = document.createElement("button");
button.innerHTML = buttonemoji;
button.addEventListener("click", () => {
  counter += 1;
});
// resize clickbutton
button.style.width = "100px";
button.style.height = "100px";
button.style.fontSize = "50px";
button.style.padding = "0";
app.append(button);

// counter display
const number_display = document.createElement("div");
number_display.innerHTML = `Money: ${counter}`;
number_display.style.fontSize = "20px";
app.append(number_display);

// number increase per second
const increase_number = document.createElement("div");
increase_number.innerText = `${total_increase} dollars/sec`;
app.append(increase_number);

interface Item {
  name: string;
  cost: number;
  rate: number;
  describe: string;
  purchases: number;
}
// List of item
const availableItems: Item[] = [
  {
    name: "A Cat 🐈",
    cost: 10,
    rate: 0.1,
    describe: "What do you expect a cat to do?",
    purchases: 0,
  },
  {
    name: "A Worker 👷",
    cost: 100,
    rate: 2,
    describe: "Hire a worker to help you make money",
    purchases: 0,
  },
  {
    name: "Company 🏢",
    cost: 1000,
    rate: 50,
    describe: "Buy a company to help you make money",
    purchases: 0,
  },
  {
    name: "Gold Mine⛏️",
    cost: 5000,
    rate: 200,
    describe: "A Gold mine for the extraction of gold.",
    purchases: 0,
  },
  {
    name: "Wishing Star🌟",
    cost: 10000,
    rate: 1000,
    describe: "Make a Wish?",
    purchases: 0,
  },
];

const TrackButtons: { button: HTMLButtonElement; cost: number }[] = [];

// Add upgradebutton
function addUpgradeButton() {
  availableItems.forEach((item) => {
    const UpgradeButton = document.createElement("button");
    UpgradeButton.innerHTML =
      `${item.name} (${item.purchases})` +
      "<br/>" +
      `Cost: ${item.cost.toFixed(2)} dollars` +
      "<br/>" +
      `Growth rate: ${item.rate} dollars/sec` +
      "<br/>" +
      `${item.describe}`;
    TrackButtons.push({ button: UpgradeButton, cost: item.cost });
    UpgradeButton.addEventListener("click", () => {
      if (counter >= item.cost) {
        total_increase += item.rate;
        counter -= item.cost;
        item.cost *= price_rate;
        item.purchases++;
        UpgradeButton.innerHTML =
          `${item.name} (${item.purchases})` +
          "<br/>" +
          `Cost: ${item.cost.toFixed(2)} dollars` +
          "<br/>" +
          `Growth rate: ${item.rate} dollars/sec` +
          "<br/>" +
          `${item.describe}`;
        const buttonIndex = TrackButtons.findIndex(
          (Upgrade) => Upgrade.button == UpgradeButton,
        );
        TrackButtons[buttonIndex].cost = item.cost;
        UpdateButtonState();
      }
    });
    app.append(UpgradeButton);
  });
}
addUpgradeButton();

// update button state
function UpdateButtonState() {
  TrackButtons.forEach(({ button, cost }) => {
    button.disabled = counter < cost;
  });
}

let lastTime = performance.now();
requestAnimationFrame(function increaseCounter() {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  counter += (deltaTime / 1000) * total_increase;
  //counter += total_increase;
  UpdateButtonState();
  number_display.innerHTML =
    `${(Math.floor(counter * 100) / 100).toString()}` + " dollars";
  increase_number.innerHTML = `${Math.floor(total_increase * 100) / 100} dollars/sec`;
  lastTime = currentTime;
  requestAnimationFrame(increaseCounter);
});