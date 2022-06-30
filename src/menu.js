import { buildTitle } from "./titles.js";

let sushi = [
    {
      "name": "salmon sushi",
      "price": 3.50,
      "img": "sushi1",
    },
    {
        "name": "toro nigiri",
        "price": 4,
        "img": "sushi2",
      },
      {
        "name": "kanimaki",
        "price": 3.50,
        "img": "sushi3",
      },
      {
        "name": "california roll",
        "price": 3.50,
        "img": "sushi4",
      },
      {
        "name": "kappamaki",
        "price": 2.50,
        "img": "sushi5",
      },
      {
        "name": "philadelphia",
        "price": 3.50,
        "img": "sushi6",
      },
      {
        "name": "tekkamaki",
        "price": 2.50,
        "img": "sushi7",
      },
      {
        "name": "sushi box",
        "price": 3.50,
        "img": "sushi8",
      },

    ]

let drinks = [
        {
          "name": "nigori",
          "price": 12.50,
          "img": "drink1",
        },
        {
            "name": "daiginjo-shu",
            "price": 13.50,
            "img": "drink2",
          },
          {
            "name": "ginjo-shu",
            "price": 11.00,
            "img": "drink3",
          },
          {
            "name": "junmai-shu",
            "price": 12.00,
            "img": "drink4",
          },
          {
            "name": "sapporo beer",
            "price": 4.50,
            "img": "drink5",
          },
          {
            "name": "asahi beer",
            "price": 3.50,
            "img": "drink6",
          },
     
        ]

function createGridElements (grid, array) {

for (let i=0; i<array.length; i++) {
    const menuItem = document.createElement("div");
    const menuImg = document.createElement("img");
    const info = document.createElement("div");
    const productName = document.createElement("h2");
    const productPrice = document.createElement("h3");

    menuItem.classList.add("menu-item");
    menuImg.classList.add("menu-img");
    info.classList.add("info");
    productName.classList.add("product-name");
    productPrice.classList.add("product-price");


    console.log(array[i]["img"]);
    console.log(array[i]["name"]);
    console.log(array[i]["price"]);

    console.log("../images/menu/" + array[i]["img"] + ".png");



    menuImg.src = "../images/menu/" + array[i]["img"] + ".png";
    productName.textContent = array[i]["name"];
    productPrice.textContent = "$" + array[i]["price"];

    info.append(productName, productPrice);
    menuItem.append(menuImg, info);
    grid.append(menuItem);
}
}

export function loadMenu() {
const menuPage = document.createElement("div");
const leftHero = document.createElement("div");
const heroImg = document.createElement("img");
const rightContainer = document.createElement("div");
const menu = document.createElement("div");
const favoritesTitle = buildTitle("favorites");
const favoritesGrid = document.createElement("div");
const drinksTitle = buildTitle("drinks");
const drinksGrid = document.createElement("div");

menuPage.classList.add("menu-page");
leftHero.classList.add("left-hero");
heroImg.classList.add("img-side");
rightContainer.classList.add("right-container");
menu.classList.add("menu");
favoritesGrid.classList.add("menu-grid");
drinksGrid.classList.add("menu-grid");

heroImg.src = "../images/menu/sushi-plate.jpg";

createGridElements (favoritesGrid, sushi);
createGridElements (drinksGrid, drinks);

menu.append(favoritesTitle, favoritesGrid, drinksTitle, drinksGrid);
rightContainer.append(menu);
leftHero.append(heroImg);
menuPage.append(leftHero, rightContainer);

const contentDiv = document.querySelector(".content");
    contentDiv.append(menuPage);
}







