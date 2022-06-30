export const loadHome = () => {
    const hero = document.createElement("div");
    const imgContainer = document.createElement("div");
    const star = document.createElement("img");
    const heroSushi = document.createElement("img");
    const text1 = document.createElement("h1");
    const text2 = document.createElement("h1");

    hero.classList.add("hero");
    imgContainer.classList.add("img-container");
    star.classList.add("rotate-clockwise", "star", "focus-in");
    heroSushi.classList.add("rotate-counter-clockwise", "img-on-top", "focus-in");
    text1.classList.add("title", "text1", "tracking-in-expand-1");
    text2.classList.add("title", "text2","tracking-in-expand-2" );

    star.src = "../images/svg/star.svg";
    star.alt = "star yellow shape"
    heroSushi.src = "../images//home/hero-sushi.png";
    heroSushi.alt = "Rotating picture of Sushi";
    text1.textContent = "We love everything";
    text2.textContent = "about sushi.";

    imgContainer.append(star, heroSushi);
    hero.append(imgContainer, text1, text2);

    const contentDiv = document.querySelector(".content");
    contentDiv.append(hero);
}
