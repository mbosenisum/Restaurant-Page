// import { menuTabSwitch } from "./menu.js";

console.log('index.js');

let content = document.getElementById('content');

let homeTab = document.createElement('div');
homeTab.textContent = "Home";
homeTab.setAttribute("class", "tabs");

let contactTab = document.createElement('div');
contactTab.textContent = "Contact";
contactTab.setAttribute("class", "tabs");

let menuTab = document.createElement('div');
menuTab.textContent = "Menu";
menuTab.setAttribute("class", "tabs");

// displaying twice for some reason
let docBody = document.getElementsByTagName('body');
docBody[0].appendChild(homeTab);
docBody[0].appendChild(contactTab);
docBody[0].appendChild(menuTab);

function clearDocument() {
    let content = document.getElementById('content');
    content.remove();

    let contentDiv = document.createElement('div');
    contentDiv.setAttribute("id", "content");
    let body = document.getElementsByTagName('body');
    // console.log("body = " + body);
    body[0].appendChild(contentDiv);
}

function homeTabSwitch() {
    clearDocument();

    let content = document.getElementById('content');
    let headline = document.createElement('div');
    headline.textContent = 'headline';
    headline.setAttribute("style", "font-weight: bold; color: red");
    content.appendChild(headline);
    
    let image = document.createElement('img');
    image.src = "optiplex_neofetch.png";
    image.setAttribute("style", "width: 600px; display: flex");
    content.appendChild(image);
}
homeTab.addEventListener("click", homeTabSwitch);

homeTabSwitch();

function contactTabSwitch() {
    clearDocument();

    let items = document.createElement('div');
    items.textContent = 'phone number, address';
    let content = document.getElementById('content');
    content.appendChild(items);
}
contactTab.addEventListener('click', contactTabSwitch);

function menuTabSwitch() {
    clearDocument();

    let items = document.createElement('div');
    items.textContent = 'bacon, egg, bagel';
    let content = document.getElementById('content');
    content.appendChild(items);
}
menuTab.addEventListener('click', menuTabSwitch);

// export {menuTabSwitch};

// menuTabSwitch();
