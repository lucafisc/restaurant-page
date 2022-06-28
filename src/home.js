export const loadHome = () => {
    const hero = document.createElement("div");
    const imgContainer = document.createElement("div");
    const star = document.createElement("img");
    const heroSushi = document.createElement("img");
    const text1 = document.createElement("h1");
    const text2 = document.createElement("h1");

    hero.classList.add("hero");
    imgContainer.classList.add("img-container");
    star.classList.add("rotate-clockwise", "star");
    heroSushi.classList.add("rotate-counter-clockwise", "img-on-top");
    text1.classList.add("title", "text1");
    text2.classList.add("title", "text2");

    star.src = "../images/svg/star.svg";
    star.alt = "star yellow shape"
    heroSushi.src = "../images//home/hero-sushi.png";
    heroSushi.alt = "Rotating picture of Sushi";
    text1.textContent = "We love everything";
    text2.textContent = "about sushi.";

    imgContainer.append(star, heroSushi);
    hero.append(imgContainer, text1, text2);


    return hero;
}
