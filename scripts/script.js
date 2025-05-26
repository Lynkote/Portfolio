// content
const PROJECTS = document.getElementById("projects");
  
// data 
const CARDS = [
  {
    name: "Daily Quests", 
    image: 'daily_quests.jpg', 
    link: "https://lynkote.github.io/daily-quests/"
  },
  {
    name: "Em breve...", 
    image: 'card.jpg', 
    link: "#"
  }
]
  
// Create
createCards();

// Functions
// create element and add on DOM
function createCards() {
  for (let i = 0; i < CARDS.length; i++) {
    let newItem = document.createElement("div");
    newItem.classList.add("card");
  
    newItem.innerHTML =
    `
      <p>${CARDS[i].name}</p>
      <img src="assets/images/${CARDS[i].image}" alt="cartão de redirecionamento para: ${CARDS[i].name}">
    `
    
    newItem.addEventListener("click", () => {
      window.open(`${CARDS[i].link}`, "_blank");
    })
    PROJECTS.appendChild(newItem);
  }
}