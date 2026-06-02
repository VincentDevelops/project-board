const mediaQuery = window.matchMedia('(max-width: 769px)')

const hamburgerMenuButtons = document.getElementsByClassName("menu-button");
const newPostButtons = document.getElementsByClassName("new-post-button");
const submitNewPostButtom = document.querySelector(".submit-post-button");

const cancelPostButton = document.querySelector(".cancel-post");

const newTitle = document.querySelector("#new-title");
const newDescription = document.querySelector("#new-description");

const menu = document.querySelector(".menu");
const mainContainer = document.querySelector(".container-main");
const formContainer = document.querySelector(".container-new-post");
const cardsContainer = document.querySelector(".cards-container");

Array.from(hamburgerMenuButtons).forEach(element => {
    element.onclick = function() {
        toggleMenu();
        if (mainContainer.classList.contains("hide")) {
            formContainer.classList.add("hide");
            mainContainer.classList.remove("hide");
        }   
    }
})

Array.from(newPostButtons).forEach(element => {
    element.onclick = function () {
        handleNewPost();
    }
})

cancelPostButton.onclick = function () {
    if (!mainContainer.classList.contains("hide"))
        return;

    mainContainer.classList.toggle("hide");
    formContainer.classList.toggle("hide");
    newTitle.value = "";
    newDescription.value = "";

}

formContainer.addEventListener("submit", function (e) {
    e.preventDefault();
    const card = newCard(newTitle.value, newDescription.value);
    cardsContainer.append(card);
    mainContainer.classList.toggle("hide");
    formContainer.classList.toggle("hide");

    newTitle.value = "";
    newDescription.value = "";

})

function handleNewPost() {
    if (mainContainer.classList.contains("hide"))
        return;

    removeMenu();
    mainContainer.classList.toggle("hide");
    formContainer.classList.toggle("hide");



}

function removeMenu() {
    menu.classList.add("hide");
}

function toggleMenu() {
    menu.classList.toggle("hide");
    console.log("clicked");

}

function handleScreenChange(mediaQuery) {
    if (mediaQuery.matches) {
        // 769px or smaller: show menu
        menu.classList.remove("hide");
    } else {
        // bigger than 769px: hide menu
        menu.classList.add("hide");
    }
}

mediaQuery.addEventListener('change', handleScreenChange);
handleScreenChange(mediaQuery);

// change to object at later date
function newCard(newTitle, newDescription) {
    const card = document.createElement("div");
    card.classList.add("card", "flex");

    const cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details", "flex");

    const cardTitle = document.createElement("div")
    cardTitle.classList.add("card-title");
    cardTitle.textContent = newTitle;

    const cardDescription = document.createElement("div")
    cardDescription.classList.add("card-description");
    cardDescription.textContent = newDescription;

    cardDetails.append(cardTitle, cardDescription);

    const cardButtons = document.createElement("div")
    cardButtons.classList.add("card-buttons", "flex");
    
    const cardButton1 = document.createElement("button");
    cardButton1.classList.add("card-button", "card-icon");

    const cardIcon1 = document.createElement("img");
    cardIcon1.src = "/assets/icons/star-svgrepo-com.svg";
    cardIcon1.alt = "favorite"
    cardIcon1.classList.add("card-button-icon");

    cardButton1.append(cardIcon1);

    const cardButton2 = document.createElement("button");
    cardButton2.classList.add("card-button", "card-icon");

    const cardIcon2 = document.createElement("img");
    cardIcon2.src = "/assets/icons/share-svgrepo-com.svg";
    cardIcon2.alt = "share"
    cardIcon2.classList.add("card-button-icon");

    cardButton2.append(cardIcon2);

    const cardButton3 = document.createElement("button");
    cardButton3.classList.add("card-button", "card-icon");

    const cardIcon3 = document.createElement("img");
    cardIcon3.src = "/assets/icons/menu-dots-svgrepo-com.svg";
    cardIcon3.alt = "card menu"
    cardIcon3.classList.add("card-button-icon");

    cardButton3.append(cardIcon3);

    cardButtons.append(cardButton1, cardButton2, cardButton3);

    card.append(cardDetails, cardButtons);

    return card;
}