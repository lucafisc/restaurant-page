import { test } from "../app/test";
import { loadNav } from "./nav.js"
import { loadHome } from "./home.js"
import "./styles/main.css";
import "./styles/nav.css";
import "./styles/animations.css";
import "./styles/home.css";


const contentDiv = document.querySelector(".content")

test();
contentDiv.prepend(loadNav());
contentDiv.append(loadHome());
