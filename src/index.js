import { test } from "../app/test";
import { loadNav } from "./nav.js";
import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadMap } from "./map.js";
import "./styles/main.css";
import "./styles/map.css";
import "./styles/nav.css";
import "./styles/animations.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";

import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";


const contentDiv = document.querySelector(".content")

test();
;
contentDiv.prepend(loadNav());
// contentDiv.append(loadHome());
contentDiv.append(loadAbout());
loadMap();



