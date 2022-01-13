import getCharacters from "../utils/getCharacters.js";
const getter = getCharacters();

const Home = async () => {
    const characters =  await (getter.next());
    const value = characters.value.join('');
    return `<div class="cards">${value}</div>`;
    
}

export default Home;
