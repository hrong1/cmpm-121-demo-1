import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "A Clicking Game";
document.title = gameName;

const buttonemoji = "💡";


const button = document.createElement("button");
button.innerHTML = buttonemoji;



app.append(button)

// const header = document.createElement("h1");
// header.innerHTML = gameName;
// app.append(header);
