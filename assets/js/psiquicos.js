async function chamarAPI() {
const container = document.getElementById("pokemon-container");

const dozePokemon = [
    "mewtwo",
    "mew",
    "alakazam",
    "espeon",
    "gardevoir",
    "metagross",
    "slowbro",
    "starmie",
    "jirachi",
    "abra",
    "gallade",
    "lugia",
];

const psychic = document.createElement("div");
psychic.classList.add("pokemon-tipo", "b-tipo");

for (const pokemon of dozePokemon) {
    const resposta2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const det = await resposta2.json();

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src="${det.sprites.front_default}">
    <h3>${det.name}</h3>
    <h4>${det.types[0].type.name}</h4>
    <h4>#${det.id}</h4>

  `;

    psychic.appendChild(card);
  }

  container.appendChild(psychic);
}

chamarAPI();
