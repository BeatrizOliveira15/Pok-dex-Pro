async function chamarAPI() {
  const container = document.getElementById("pokemon-container", "b");


  const resposta = await fetch("https://pokeapi.co/api/v2/type/psychic");
  const dados = await resposta.json();

  const listapokemon = dados.pokemon.slice(0, 12);

  const psychic = document.createElement("div");
  psychic.classList.add("pokemon-tipo", "b-tipo");

  for (const p of listapokemon) {
    const resposta2 = await fetch(p.pokemon.url);
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