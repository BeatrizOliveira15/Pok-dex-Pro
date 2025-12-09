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

async function chamarAPI() {
  const container = document.getElementById("pokemon-container");

  const resposta = await fetch("https://pokeapi.co/api/v2/type/psychic");
  const dados = await resposta.json();

  const lista = dados.pokemon.slice(0, 12);

  const area = document.createElement("div");
  area.classList.add("pokemon-tipo");

  for (const p of lista) {
    const r2 = await fetch(p.pokemon.url);
    const det = await r2.json();

    const cardId = "card-" + det.id;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = cardId;

    card.innerHTML = `
      <div class="card-header" onclick="toggleCard('${cardId}')">
        <img src="${det.sprites.front_default}">
        <h3>${det.name}</h3>
        <h4>${det.types[0].type.name}</h4>
      </div>

      <div class="card-content">
        <p><b>Peso:</b> ${det.weight}</p>
        <p><b>Altura:</b> ${det.height}</p>
      </div>
    `;

    area.appendChild(card);
  }

  container.appendChild(area);
}

function toggleCard(id) {
  const c = document.getElementById(id);
  c.classList.toggle("expanded");
}

chamarAPI();

