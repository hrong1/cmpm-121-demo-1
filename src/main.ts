import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "A Clicking Game";
document.title = gameName;

const buttonemoji = "💡";

const button = document.createElement("button");
button.innerHTML = buttonemoji;

app.append(button)