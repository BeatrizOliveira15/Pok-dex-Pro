async function chamarAPI() {
const container = document.getElementById("pokemon-container");

const dozePokemon = [
    "Sandshrew",
    "Sandslash",
    "Geodude",
    "Graveler",
    "Golem",
    "Cubone",
    "Marowak",
    "Phanpy",
    "Donphan",
    "Trapinch",
    "Vibrava",
    "Groudon",
];

const field = document.createElement("div");
field.classList.add("pokemon-tipo");

for (const pokemon of dozePokemon) {
    const resposta2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const det = await resposta2.json();

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src="${det.sprites.other["official-artwork"].front_default}" alt="${det.name}">
    <h2>${det.name}</h2>
    <h4>${det.types[0].type.name}</h4>
    <h4>${det.types[1] ? det.types[1].type.name : ""}</h4>
    <h4>#${det.id}</h4>
    <button id="button">VEJA MAIS</button>

  `;

    field.appendChild(card);
  }

  container.appendChild(field);
}

chamarAPI();