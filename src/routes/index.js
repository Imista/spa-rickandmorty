import Home from '../pages/Home.js';
import Character from '../pages/Character.js';
import Header from '../templates/Header.js';
import getRoute from '../utils/getRoute.js';

const routes = {
    '/': Home,
    '/id': Character
};

const setRoute = async () => {
    const header = null || document.querySelector('header');
    const main = null || document.querySelector('main')

    //Header
    header.innerHTML = Header();

    //Main
    const route = getRoute();
    let render = routes[route] ? routes[route] : Home;
    main.innerHTML = await render();

}

const run = async () => {
    //Update info
    const characters = await Home();
    content.innerHTML = characters.join('');
}

const setInfo = async () => {
    const data = await Character();
    info.innerHTML = data;
}

export default setRoute;