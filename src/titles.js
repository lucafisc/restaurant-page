import starSrc from "./images/svg/star.svg";

export function buildTitle(myText) {
    const container = document.createElement("div");
    const text = document.createElement("h1");
    const starBackground = document.createElement("img");

    container.classList.add("relative-container");
    text.classList.add("title");
    starBackground.classList.add("text-backdrop", "rotate-clockwise");

    text.textContent = myText;
    starBackground.src = starSrc;

    container.append(text, starBackground);
    
    return container
}