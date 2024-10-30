import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "💸Earn Money💸";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// number data
let counter: number = 0; // counter for money
let totalIncrease: number = 0; // total number increase per second
const priceRate = 1.15; // growth rate for item price

// clicking button
const buttonEmoji = "💰";
const emojiButton = document.createElement("button");
emojiButton.innerHTML = buttonEmoji;
emojiButton.addEventListener("click", () => {
  counter += 1;
});
// resize clickbutton
emojiButton.style.width = "100px";
emojiButton.style.height = "100px";
emojiButton.style.fontSize = "50px";
emojiButton.style.padding = "0";
app.append(emojiButton);

// counter display
const numberDisplay = document.createElement("div");
numberDisplay.innerHTML = `Money: ${counter}`;
numberDisplay.style.fontSize = "20px";
app.append(numberDisplay);

// number increase per second
const increaseNumber = document.createElement("div");
increaseNumber.innerText = `${totalIncrease} dollars/sec`;
app.append(increaseNumber);

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
// use for track button state and disable it
const trackButtons: { button: HTMLButtonElement; cost: number }[] = [];

// update button state
function updateButtonState() {
  trackButtons.forEach(({ button, cost }) => {
    button.disabled = counter < cost;
  });
}

function updateButtonText(item: Item): string {
  return `
    ${item.name} (${item.purchases})<br/>
    Cost: ${item.cost.toFixed(2)} dollars<br/>
    Growth rate: ${item.rate} dollars/sec<br/>
    ${item.describe}
  `;
}

// Add upgradebutton
function addUpgradeButtons() {
  availableItems.forEach((item) => {
    const upgradeButton = document.createElement("button");
    upgradeButton.innerHTML = updateButtonText(item);
    trackButtons.push({ button: upgradeButton, cost: item.cost });
    upgradeButton.addEventListener("click", () => {
      if (counter >= item.cost) {
        totalIncrease += item.rate;
        counter -= item.cost;
        item.cost *= priceRate;
        item.purchases++;
        upgradeButton.innerHTML = updateButtonText(item);
        const buttonIndex = trackButtons.findIndex(
          (Upgrade) => Upgrade.button == upgradeButton,
        );
        trackButtons[buttonIndex].cost = item.cost;
        updateButtonState();
      }
    });
    app.append(upgradeButton);
  });
}
addUpgradeButtons();

// return a decimal number in string
function decimalNumber(number: number): string {
  return `${(Math.floor(number * 100) / 100).toString()}`;
}

let lastTime = performance.now();
requestAnimationFrame(function increaseCounter() {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  counter += (deltaTime / 1000) * totalIncrease;
  updateButtonState();
  numberDisplay.innerHTML = decimalNumber(counter) + "dollars";
  increaseNumber.innerHTML = decimalNumber(totalIncrease) + " dollars/sec";
  lastTime = currentTime;
  requestAnimationFrame(increaseCounter);
});
