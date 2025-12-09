// Faz uma requisição HTTP para a API do Studio Ghibli
fetch("https://ghibliapi.vercel.app/films")

  // Converte a resposta da API para JSON (objeto JavaScript)
  .then(response => response.json())

  // Aqui recebemos os dados já convertidos (array de filmes)
  .then(data => {
    console.log("Filmes do Studio Ghibli:");
    console.log(data); // Mostra no console todos os filmes recebidos

    // Seleciona o container onde os cards dos filmes serão inseridos
    const container = document.getElementById("filmes-container");

    // Percorre cada filme do array de dados
    data.forEach(filme => {
      
      // Cria uma nova div para representar o card do filme
      const card = document.createElement("div");
      card.classList.add("card"); // Adiciona a classe CSS "card"

      // Monta o HTML interno do card com as informações do filme
      card.innerHTML = `
        <img src="${filme.image}" alt="${filme.title}" class="poster">
        <h2>${filme.title}</h2>
        <p><strong>Diretor:</strong> ${filme.director}</p>
        <p><strong>Ano:</strong> ${filme.release_date}</p>
        <p>${filme.description.substring(0, 120)}...</p>
      `;

      // Insere o card dentro do container principal
      container.appendChild(card);
    });
  })
  
// fim
  // Caso a API falhe, este bloco captura o erro
  .catch(error => {
    console.error("Erro ao consumir API do Ghibli:", error);
  });