import { buildTitle } from "./titles.js";

export function loadAbout() {
    const aboutPage = document.createElement("div");
    const about = document.createElement("div");
    const whereTitle = buildTitle("where to find us");
    const address = document.createElement("p");
    const map = document.createElement("div");
    const credits = document.createElement("div");
    const creditsTitle = buildTitle("credits");
    const creditsText = document.createElement("p");

    aboutPage.classList.add("about-page");
    about.classList.add("about");
    address.classList.add("secondary-text");
    map.classList.add("map");
    credits.classList.add("credits");
    creditsTitle.classList.add("secondary-text");

    address.innerHTML = "Musterstrasse 1<br>12345 Musterstadt<br>phone: 01234 567890<br>daily from 2pm to 2am";
    map.id = "map";

    about.append(whereTitle, address);
    credits.append(creditsTitle, creditsText);
    aboutPage.append(about, map, credits);   

    return aboutPage;
}