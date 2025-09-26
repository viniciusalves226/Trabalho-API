import { useEffect, useState } from "react";

import { traducoes } from "../constants/mapa_traducao";

function Personagem({ id }) {
  const [personagem, setPersonagem] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(dados => {
        let ultimo = dados.episode[dados.episode.length - 1];
        fetch(ultimo)
          .then(Response => Response.json())
          .then(ep => {
            dados.ultimoEpisodio = ep.name;
            setPersonagem(dados);
            console.log(dados);
          });
      });
  }, [id]);

  if (!personagem) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <img src={personagem.image} alt={personagem.name} width="200" />
      <h2>{personagem.name}</h2>
      <p>Status: {traducoes.status[personagem.status] || personagem.status}</p>
      <p>Espécie: {traducoes.species[personagem.species] || personagem.species}</p>
      <p>Gênero: {traducoes.gender[personagem.gender] || personagem.gender}</p>
      <p>Último episódio: {personagem.ultimoEpisodio}</p>
    </div>
  );
}

export default Personagem;
