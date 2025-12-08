async function chamarAPI() {
  const container = document.getElementById("escrita");

  const resposta = await fetch("https://pokeapi.co/api/v2/type/bug");
  const dados = await resposta.json();

  const listapokemon = dados.pokemon.slice(0, 12);

  const bug = document.createElement("div");
  bug.classList.add("pokemon-tipo");

  for (const p of listapokemon) {
    const resposta2 = await fetch(p.pokemon.url);
    const det = await resposta2.json();
  
  
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <h2>${det.name}</h2>
    <h4>${det.types[0].type.name}</h4>
    <h4>#${det.id}</h4>
    <button id="button">VEJA MAIS</button>
  `;

    bug.appendChild(card);
  }

  container.appendChild(bug);
}

chamarAPI();