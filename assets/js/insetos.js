async function chamarAPI() {
  const container = document.getElementById("escrita");

  const dozePokemon = [
    "caterpie",
    "Beedrill",
    "Butterfree",
    "Metapod",
    "Pinsir",
    "Weedle",
    "Paras",
    "Parasect ",
    "Heracross",
    "Scyther",
    "Venonat ",
    "Combee",
];

  const bug = document.createElement("div");
  bug.classList.add("pokemon-tipo");

  for (const p of dozePokemon) {
     const resposta2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${p}`
    );
    const det = await resposta2.json();

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src="${det.sprites.other["official-artwork"].front_default}" alt="${det.name}">
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

  //  .catch(error => {
  //   console.error("Erro ao consumir API do Ghibli:", error);
  // });
  


