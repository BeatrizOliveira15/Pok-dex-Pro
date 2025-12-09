// async function chamarAPI() {
//   const container = document.getElementById("pokemon-container", "b");


//   const resposta = await fetch("https://pokeapi.co/api/v2/type/psychic");
//   const dados = await resposta.json();

//   const listapokemon = dados.pokemon.slice(0, 12);

//   const psychic = document.createElement("div");
//   psychic.classList.add("pokemon-tipo", "b-tipo");

//   for (const p of listapokemon) {
//     const resposta2 = await fetch(p.pokemon.url);
//     const det = await resposta2.json();

//     const card = document.createElement("div");
//     card.classList.add("card");

//     card.innerHTML = `
//     <img src="${det.sprites.front_default}">
//     <h3>${det.name}</h3>
//     <h4>${det.types[0].type.name}</h4>
//     <h4>#${det.id}</h4>

//   `;

//     psychic.appendChild(card);
//   }

//   container.appendChild(psychic);
// }

// chamarAPI();

// IDs dos Pokémon que você quer
const ids = [
  187, // Hoppip
  333, // Swablu
  334, // Altaria
  373, // Salamence
  398, // Staraptor
  458, // Mantyke
  469, // Togekiss
  519, // Pidove
  587, // Emolga
  722, // Rowlet
  741, // Oricorio (Baile Style)
  823  // Corviknight
];

async function carregarPokemons() {
  const container = document.getElementById("pokemon-container");

  const area = document.createElement("div");
  area.classList.add("pokemon-tipo");

  // Buscar cada Pokémon pelo ID
  for (const id of ids) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const p = await resp.json();

    const cardId = "card-" + id;

    // Pegando habilidades (pega só as 2 primeiras)
    const habilidades = p.abilities
      .slice(0, 2)
      .map(h => h.ability.name)
      .join(", ");

    // Pegando stat de ataque e defesa
    const ataque = p.stats.find(s => s.stat.name === "attack").base_stat;
    const defesa = p.stats.find(s => s.stat.name === "defense").base_stat;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = cardId;

    card.innerHTML = `
      <div class="card-header" onclick="toggleCard('${cardId}')">
        <img src="${p.sprites.front_default}">
        <h3>${p.name}</h3>
        <h4>#${p.id}</h4>
      </div>

      <div class="card-content">
        <p><b>Peso:</b> ${p.weight / 10} kg</p>
        <p><b>Altura:</b> ${p.height / 10} m</p>
        <p><b>Habilidades:</b> ${habilidades}</p>
        <p><b>Ataque:</b> ${ataque}</p>
        <p><b>Defesa:</b> ${defesa}</p>
      </div>
    `;

    area.appendChild(card);
  }

  container.appendChild(area);
}

function toggleCard(id) {
  const card = document.getElementById(id);
  card.classList.toggle("expanded");
}

carregarPokemons();
