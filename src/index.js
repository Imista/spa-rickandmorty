import Home from "./pages/Home.js";

const content = document.querySelector('.cards');
const getCharacters = Home();

const run = async () => {
    const characters =  await (getCharacters.next());
    content.innerHTML = characters.value;
}


const button = document.querySelector('.More');
button.addEventListener('click',run)