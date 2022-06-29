export const loadNav = () => {
    const navBar = document.createElement("nav");
    const logo = document.createElement("img");
    const navContainer = document.createElement("ul");
    const homeListItem = document.createElement("li");
    const menuListItem = document.createElement("li");
    const aboutListtItem = document.createElement("li");

    navBar.classList.add("nav-bar");
    logo.classList.add("logo");
    navContainer.classList.add("nav-container");
    homeListItem.classList.add("nav-item", "current-page");
    menuListItem.classList.add("nav-item");
    aboutListtItem.classList.add("nav-item");

    logo.src = "../images/svg/sushi-logo-01.svg";
    logo.alt = "Sushi logo";
    homeListItem.textContent = "Home";
    menuListItem.textContent = "Menu";
    aboutListtItem.textContent = "About";

    navContainer.append(homeListItem, menuListItem, aboutListtItem);
    navBar.append(logo, navContainer);
    return navBar;
}