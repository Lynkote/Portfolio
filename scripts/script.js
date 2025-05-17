const PROJECTS = document.getElementById("projects");

// Links
const DAYLY_QUESTS = "#"

// Create
// name, image (160/200px), link
createCard("Daily Quests", "daily_quests.jpg", DAYLY_QUESTS);
createCard("Em breve...", "card_img.png", "#");

// Functions
// create element and add on doom
function createCard(name, image, url) {
  let newItem = document.createElement("div");
  newItem.classList.add("card");

  newItem.innerHTML =
  `
    <p>${name}</p>
    <img src="assets/images/${image}" alt="redirecionamento">
  `
  
  newItem.addEventListener("click", () => {
    window.open(`${url}`, '_blank');
  })

  PROJECTS.appendChild(newItem);
}