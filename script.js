const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const catGrid = document.getElementById("catGrid");

// ქარდის შექმნის ფუნქცია
function createCard(imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Cat";

  card.appendChild(img);
  return card;
}

// API-დან კატების წამოღება
async function loadCats() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    data.forEach((cat) => {
      const card = createCard(cat.url);
      catGrid.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching cats:", error);
    catGrid.innerHTML = "<p>😿 Could not load cat images</p>";
  }
}

// გვერდის ჩატვირთვისას წამოიღოს კატები
document.addEventListener("DOMContentLoaded", loadCats);
