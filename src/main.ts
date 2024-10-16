import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;



const gameName = "A Clicking Game";
document.title = gameName;

const buttonemoji = "💡";
let counter: number = 0;

const button = document.createElement("button");
const number_count = document.createElement("div");
button.innerHTML = buttonemoji;
number_count.innerText = `Number of Item: ${counter}`;

button.addEventListener('click', () => {
    counter += 1;
    console.log(counter);
    number_count.innerText = `Number of Item: ${counter}`;
  });

app.append(button);
app.append(number_count);
