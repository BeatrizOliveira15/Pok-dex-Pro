const ids = [63, 65, 80, 121, 150, 151, 196, 249, 282, 376, 385, 475];

async function carregarPokemons() {
  const container = document.getElementById("pokemon-container");

  const area = document.createElement("div");
  area.classList.add("pokemon-tipo");

  for (const id of ids) {
    try {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const p = await resp.json();

      const cardId = "card-" + id;

      const habilidades = p.abilities
        .slice(0, 2)
        .map((h) => h.ability.name)
        .join(", ");

      const ataque = p.stats.find((s) => s.stat.name === "attack").base_stat;
      const defesa = p.stats.find((s) => s.stat.name === "defense").base_stat;

      const tipos = p.types.map((t) => t.type.name).join(" / ");

      const imagem =
        p.sprites.other?.["official-artwork"]?.front_default ||
        p.sprites.front_default;

      const card = document.createElement("div");
      card.classList.add("card");
      card.id = cardId;

      card.innerHTML = `
      <div class="card-header" onclick="toggleCard('${cardId}')">
        <img src="${imagem}">
        <h3>${p.name}</h3>
        <h4>${tipos}</h4>
        <h5>#${p.id}</h5>
        <button id="button"> VEJA MAIS </button>
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
    } catch (erro) {
      console.error(`Erro ao buscar o Pokémon ID ${id}:`, erro);
    }
  }

  container.appendChild(area);
}

function toggleCard(id) {
  const card = document.getElementById(id);
  card.classList.toggle("expanded");
}

carregarPokemons();

const botao = document.getElementById("botao");
const body = document.body;

botao.addEventListener("click", () => {
  if (body.classList.contains("claro")) {
    body.classList.replace("claro", "escuro");
    botao.textContent = "Modo claro";
  } else {
    body.classList.replace("escuro", "claro");
    botao.textContent = "Modo escuro";
  }
});
