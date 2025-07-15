import { renderHome } from "./home.js"; 
import { renderMenu } from "./menu.js"; 
import { renderAbout } from "./about.js"; 
import "./styles.css"

function loadAbout() {
    const about = document.getElementById("about");
    about.addEventListener("click", renderAbout);
}

function loadMenu() {
    const menu = document.getElementById("menu");
    menu.addEventListener("click", renderMenu);
}

function loadHome() {
  const home = document.getElementById("home");
  renderHome();
  home.addEventListener("click", renderHome);
}
loadHome(); 
loadMenu();
loadAbout();