import { loadNav } from "./nav.js";
import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";
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

contentDiv.prepend(loadNav());
loadHome();


const homeMenu = document.getElementById("home");
const menuMenu = document.getElementById("menu");
const aboutMenu = document.getElementById("about");
const menus = [homeMenu, menuMenu, aboutMenu];

function clearPage() {
    contentDiv.removeChild(contentDiv.children[1]);
    }

function setCurrentPage(page) {
    for (let i=0; i<menus.length; i++) {
        menus[i].classList.remove("current-page");
    }
    page.classList.add("current-page");
}

homeMenu.onclick = () => {
    setCurrentPage(event.target);
    clearPage();
    loadHome();
};

menuMenu.onclick = () => {
    setCurrentPage(event.target);
    clearPage();
    loadMenu();
}

aboutMenu.onclick = () => {
    setCurrentPage(event.target);
    clearPage();
    loadAbout();
    loadMap();
}





