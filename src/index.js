import { test } from "../app/test";
import "./main.css";
import "./nav.css";
import { loadNav } from "./nav.js"

const contentDiv = document.querySelector(".content")

test();
contentDiv.append(loadNav());
