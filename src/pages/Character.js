import getData from "../utils/getData.js";

const Character = async () => {
    const character = await getData(1);

    const view = `
    <article class="info-card">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="${character.name}">
        <h2>${character.name}</h2>
    </article>
    <article class="info-data">
        <h3>Episodes: <span>${character.episode.length} </span> </h3>
        <h3>Status: <span>${character.status} </span> </h3>
        <h3>Species: <span>${character.species} </span> </h3>
        <h3>Gender: <span>${character.gender} </span> </h3>
        <h3>Origin: <span>${character.origin.name} </span> </h3>
        <h3>Last Location: <span>${character.location.name} </span> </h3>
    </article>
    `;

    return view;
}

export default Character;