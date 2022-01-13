import Home from "./pages/Home.js";
import Character from "./pages/Character.js";
import getHash from "./utils/getHash.js";


const content = document.querySelector('.cards');
const info = document.querySelector('.info');

const run = async () => {
    //Update info
    const characters = await Home();
    content.innerHTML = characters.join('');
   
    //Show info
    // const items = document.querySelectorAll('.cards_item');
    // for(let i = 0; i < items.length;i++){
    //     const item = items[i];
    //     item.addEventListener('click',() => {
    //         console.log(i+1);
    //     })
    // }
}

const setInfo = async () => {
    const data = await Character();
    info.innerHTML = data;
}


// //Observer
// let observer = new IntersectionObserver(entry => {

// }, {
//     rootMargin: '0px 0px 0px 0px',
//     threshold: 1.0
// });

const button = document.querySelector('.More');
button.addEventListener('click',run)
const infoButton = document.querySelector('.Info');
infoButton.addEventListener('click',setInfo)