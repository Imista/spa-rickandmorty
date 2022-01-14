import getCharacters from "../utils/getCharacters.js";
const getter = getCharacters();
let back = ``;

const Home = async (condition) => {
    if((back === ``) || condition){
        const characters =  await (getter.next());
        const value = characters.value.join('');
        back = `<div class="cards">${value}</div>`;
    }
    return back;
    
}

export default Home;
