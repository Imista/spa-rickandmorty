import getCharacters from "../utils/getCharacters.js";
const getter = getCharacters();

const Home = async () => {
    const characters =  await (getter.next());
    return characters.value;
}

export default Home;
